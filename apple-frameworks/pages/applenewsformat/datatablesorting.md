> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/datatablesorting](https://developer.apple.com/documentation/applenewsformat/datatablesorting)

# DataTableSorting

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

A data category by which to sort the table in descending or ascending order.

## Declaration

```
object DataTableSorting
```

## Properties

- `descriptor` — `string` (required): The `identifier` property of one of the table’s data descriptors. See [DataDescriptor](datadescriptor.md).
- `direction` — `string` (required): The data sorting direction.
  **Allowed values:** `ascending`, `descending`

<a id="Discussion"></a>

## Discussion

In a `DataTable` object, use the `sortBy` property to sort data already in a table. You can specify which data is to be sorted and the order (ascending or descending). If this property is not defined, data is displayed in the order it is provided in the [RecordStore](recordstore.md).

This object can be used in [DataTable](datatable.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "datatable",
      "showDescriptorLabels": true,
      "sortBy": [
        {
          "descriptor": "id-name",
          "direction": "descending"
        }
      ],
      "data": {
        "descriptors": [
          {
            "identifier": "id-name",
            "key": "name",
            "label": {
              "type": "formatted_text",
              "text": "Name",
              "textStyle": {
                "textColor": "black"
              }
            },
            "dataType": "string"
          },
          {
            "identifier": "id-occupation",
            "key": "occupation",
            "label": "Occupation",
            "dataType": "string"
          }
        ],
        "records": [
          {
            "name": "Amelia Earhart",
            "occupation": "Pilot"
          },
          {
            "name": "Grace Hopper",
            "occupation": "Computer Scientist"
          }
        ]
      }
    }
  ]
}
```

## See Also

### Tables with JSON Data

- [Adding a JSON Table](../applenews/adding-a-json-table.md): Add a table to your article that displays JSON data in rows and columns.
- [DataTable](datatable.md): The component for adding a JSON data table.
- [RecordStore](recordstore.md): The object that contains JSON data for a data table.
- [DataDescriptor](datadescriptor.md): The object for providing the data type, data formatting, and label for a field in a table.
- [DataFormat](dataformat.md): Properties shared by all data format obejct types.
- [FloatDataFormat](floatdataformat.md): The object that allows you to specify the number of digits after the decimal point for numeric values in data table cells.
- [ImageDataFormat](imagedataformat.md): The object that allows you to specify the minimum and maximum dimensions for images in data table cells.
