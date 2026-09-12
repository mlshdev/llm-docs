> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/dataitem](https://developer.apple.com/documentation/tvmljs/dataitem)

# DataItem

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Class  
**Availability:** tvOS 11.0+

An object used to create observable objects from JSON objects for data binding.

## Declaration

```
interface DataItem
```

## Topics

### Creating the Data Item

- [DataItem](dataitem/2897826-dataitem.md): Creates a new data item.

### Retrieving Data Item Information

- [identifier](dataitem/2897829-identifier.md): A unique identifier for a data item provided by the associated JSON object.
- [type](dataitem/2897825-type.md): The type for a data item provided by the associated JSON object.

### Working with Property Paths

- [setPropertyPath](dataitem/2897832-setpropertypath.md): Sets the value associated with a property path.
- [getPropertyPath](dataitem/2897819-getpropertypath.md): Retrieves the value associated with a property path.
- [touchPropertyPath](dataitem/2897830-touchpropertypath.md): Updates the property path.

## Relationships

### Inherits From

- [EventListenerObject](eventlistenerobject.md)

## See Also

### Data Storage and Retrieval

- [Binding JSON data to TVML documents](binding_json_data_to_tvml_documents.md): Create full-fledged TVML documents by using data binding and queries on simplified TVML files.
- [XMLHttpRequest](xmlhttprequest.md): An object used to retrieve data from a URL.
- [Storage](storage.md): An object used to store key-value-pair information.
- [DataSource](datasource.md): An interface that allows the system to detect and respond to changes in your data.
- [LoadIndexesRequest](loadindexesrequest.md): A request created when the [loadindexes](datasource/datasource/3192119-loadindexes.md) event is triggered.
