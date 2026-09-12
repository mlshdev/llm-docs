> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/dataformat](https://developer.apple.com/documentation/applenewsformat/dataformat)

# DataFormat

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

Properties shared by all data format obejct types.

## Declaration

```
object DataFormat
```

## Properties

- `type` — `string` (required): The type of format. This must be `float` for a [FloatDataFormat](floatdataformat.md) object or `image` for an [ImageDataFormat](imagedataformat.md) object.
  **Allowed values:** `float`, `image`

<a id="Discussion"></a>

## Discussion

This object can be used in [DataDescriptor](datadescriptor.md).

## Relationships

### Inherited By

- [FloatDataFormat](floatdataformat.md)
- [ImageDataFormat](imagedataformat.md)

## See Also

### Tables with JSON Data

- [Adding a JSON Table](../applenews/adding-a-json-table.md): Add a table to your article that displays JSON data in rows and columns.
- [DataTable](datatable.md): The component for adding a JSON data table.
- [RecordStore](recordstore.md): The object that contains JSON data for a data table.
- [DataDescriptor](datadescriptor.md): The object for providing the data type, data formatting, and label for a field in a table.
- [DataTableSorting](datatablesorting.md): A data category by which to sort the table in descending or ascending order.
- [FloatDataFormat](floatdataformat.md): The object that allows you to specify the number of digits after the decimal point for numeric values in data table cells.
- [ImageDataFormat](imagedataformat.md): The object that allows you to specify the minimum and maximum dimensions for images in data table cells.
