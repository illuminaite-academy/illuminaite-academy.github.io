---
title: "Read csv file"
date: 2024-10-25 # YYYY-MM-DD
author: "Napasorn Kao-ian"
image: images/read_csv_blog.png
summary: "How to read csv file with Matplotlib"
---

# READING A CSV FILE WITH MATPLOTLIB


### Content:
* CSV file introduction
* How to open a CSV file
* How to read a CSV file introduction
* Matplotlib introduction
* A step by step guide of how to read a file
* Application of a CSV file
* How to select columns
* How to predict a value based on data on a CSV file


### Introduction
* CSV (Comma-Separated Values) files are important because they provide a simple, universally accepted, lightweight, and efficient way to store and transfer structured data. Their ease of use, compatibility across platforms and software, and suitability for both human-readable and machine-readable formats make them indispensable in fields like data science, business analysis, and software development.
* Example of a CSV file: 
````python
Name,Age,City
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
````

### How to open a CSV file in Python
* Before you can read data from a file, you must learn how to open it. Note that the file must be located in the same folder as the current program you are running. 
````python
 with open(filename) as my_file:
 with open('filename.csv') as my_file:
````
 
### How to read a file
   * There are so many ways of reading a file. For instance, importing a CSV module to visualise the file opened. This line creates a CSV reader, which is a Python object that can read CSV data from a given file, splitting up the file into rows.
````python
with open('marriage_data.csv') as file:
reader = csv.reader(file)
````
  * However, for this project we will use Matplotlib. 
	  
### Matplotlib Introduction
  * Why do we use Matplotlib?
     * It integrates with Pandas, which is for reading while Matplotlib is for visualising. 
     * It offers a wide range of customizable options for plots, including line charts, bar charts, scatter plots, histograms, and more. You can customise everything from axis labels to colours, grid lines, titles, and markers. 
  
### A Step by Step Guide of How to Read the File
   * Import pandas and matplotlib
```` python
import pandas as pd
import matplotlib.pyplot as plt
````
  * Load CSV file in: You can load your CSV file using Pandas' read_csv() method.
```` python
# Load the CSV file
data = pd.read_csv('filename.csv')
# Display the first few rows of the dataframe
> print(filename.head())
````
  * Visualise it with some basic methods:  
      * `plt.plot()` is used to create the line plot.
      * We customise the plot by adding labels and titles using `plt.xlabel()`, `plt.ylabel()`, and `plt.title()`.
      * `plt.xticks(rotation=45)` rotates the x-axis labels (dates) by 45 degrees to make them more readable.
      * For example, the file contains 2 columns: Date and Sales
```` python
# Plot the data
plt.plot(data['Date'], data['Sales'])

# Add labels and title
plt.xlabel('Date')
plt.ylabel('Sales')
plt.title('Sales Over Time')

# Show the plot
plt.xticks(rotation=45)  # Rotate date labels for better readability
plt.show()
````
	
  * Customization:
````python
# Create a plot with customizations
plt.plot(data['Date'], data['Sales'], color='red', marker='o', linestyle='--')

# Adding grid lines
plt.grid(True)

# Customise axes
plt.xlabel('Date', fontsize=12)
plt.ylabel('Sales', fontsize=12)
plt.title('Sales Over Time with Custom Style', fontsize=15)

# Display the plot
plt.xticks(rotation=45)
plt.show()
````

   * Save the plot as image: If you want to save the plot as an image, use the savefig() function.
```` python
plt.plot(data['Date'], data['Sales'])
plt.xlabel('Date')
plt.ylabel('Sales')
plt.title('Sales Over Time')
# Save the plot as a PNG file
plt.savefig('sales_plot.png')
````


### Application of the CSV file with a house sale example!
With the given example CSV file, we will explore how to “select columns” and “predict the price of a house based on the data!”
   * CSV Example: house_data.csv
``` python
House_Size,Price,Bedrooms
1000,200000,3
1500,300000,4
2000,400000,3
2500,500000,4
3000,600000,5
````

### How to Select a Column?
  * The `data[['House_Size', 'Price']]` selects two specific columns (House_Size and Price) from the DataFrame. This creates a new DataFrame (selected_columns) that contains only these two columns.
```` python
selected_columns = data[['House_Size', 'Price']]
````
  * We use Matplotlib’s `plt.plot()` method to create a plot of House_Size vs Price.
```` python
plt.plot(selected_columns['House_Size'], selected_columns['Price'], marker='o', linestyle='-', color='blue')
````
  * The `plt.show()` command displays the figure.
```` python
plt.show()
````
  * Now, try to put them all together.
```` python
import pandas as pd
import matplotlib.pyplot as plt
> # Step 1: Load the CSV file into a Pandas DataFrame
data = pd.read_csv('house_data.csv')
> # Step 2: Select the columns 'House_Size' and 'Price' for plotting
selected_columns = data[['House_Size', 'Price']]
> # Print selected columns (optional, to verify the selection)
> print(selected_columns)
> # Step 3: Plot the data using Matplotlib
> plt.plot(selected_columns['House_Size'], selected_columns['Price'], marker='o', linestyle='-', color='blue')
> # Add labels and title
> plt.xlabel('House Size (sqft)')
> plt.ylabel('Price ($)')
> plt.title('House Size vs Price')
> # Display the plot
> plt.show()
````
  * With the following code, this is what you should get:

```` python
Selected Columns:
 
>      House_Size (sqft)   Price ($)
> 0               1000       200000
> 1               1500       300000
> 2               2000       400000
> 3               2500       500000
> 4               3000       600000
````


### Now, let’s try to predict how much it would cost if I had this size of a house. 
Here is a step breakdown:
   * __Extracting Columns__: We extract the House_Size and Price columns to use them for both visualization and model fitting.
   * __Plotting the Data__: We create a scatter plot to visualize the relationship between house size and price using Matplotlib.
   * __Linear Regression Model__: We fit a simple linear regression model using the LinearRegression class from sklearn, which helps us predict the price for a house based on its size.
   * __Predicting the Price__: Finally, we predict the cost of a house for a specified size (e.g., 2200 sqft).
   * Here is a code example: 

```python
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
import numpy as np

# Step 1: Load the CSV file into a Pandas DataFrame
data = pd.read_csv('house_data.csv')

# Step 2: Extract the 'House_Size' and 'Price' columns
house_size = data['House_Size (sqft)'].values.reshape(-1, 1)  # Reshaping for sklearn
price = data['Price ($)'].values

# Step 3: Visualize the data using a scatter plot
plt.scatter(house_size, price, color='blue')
plt.xlabel('House Size (sqft)')
plt.ylabel('Price ($)')
plt.title('House Size vs Price')
plt.show()

# Step 4: Fit a linear regression model to predict the price of a house based on its size
model = LinearRegression()
model.fit(house_size, price)

# Predict the price of a house for a given size, e.g., 2200 sqft
house_size_to_predict = np.array([[2200]])
predicted_price = model.predict(house_size_to_predict)

print(f'The predicted price for a house of size 2200 sqft is: ${predicted_price[0]:,.2f}')
````
  * This is what you should get from the following code:
  
``` python
The predicted price for a house of size 2200 sqft is: $440,000.00
````

