> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/floatdataformat](https://developer.apple.com/documentation/applenewsformat/floatdataformat)

# FloatDataFormat

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object that allows you to specify the number of digits after the decimal point for numeric values in data table cells.

## Declaration

```
object FloatDataFormat
```

## Properties

- `decimals` — `integer`: The number of digits that can appear after the decimal point. The number will be rounded to this number of digits after the decimal.
  **Default:** `2`  
  **Minimum:** `0`
- `type` — `string` (required): The type of data format for this object. This must be float for a `float` data format object.
  **Allowed values:** `float`

<a id="Discussion"></a>

## Discussion

When you specify `float` as the data type for an item in [DataDescriptor](datadescriptor.md), you can indicate the number of places after the decimal point that you want to display.

This object can be used in [DataDescriptor](datadescriptor.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "datatable",
      "data": {
        "descriptors": [
          {
            "identifier": "id-float",
            "dataType": "float",
            "format": {
              "type": "float",
              "decimals": 3
            },
            "key": "image",
            "label": "none"
          }
        ],
        …
      }
    }
  ]
}
```

## Relationships

### Inherits From

- [DataFormat](dataformat.md)

## See Also

### Tables with JSON Data

- [Adding a JSON Table](../applenews/adding-a-json-table.md): Add a table to your article that displays JSON data in rows and columns.
- [DataTable](datatable.md): The component for adding a JSON data table.
- [RecordStore](recordstore.md): The object that contains JSON data for a data table.
- [DataDescriptor](datadescriptor.md): The object for providing the data type, data formatting, and label for a field in a table.
- [DataTableSorting](datatablesorting.md): A data category by which to sort the table in descending or ascending order.
- [DataFormat](dataformat.md): Properties shared by all data format obejct types.
- [ImageDataFormat](imagedataformat.md): The object that allows you to specify the minimum and maximum dimensions for images in data table cells.
