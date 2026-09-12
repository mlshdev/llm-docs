> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/loadindexesrequest](https://developer.apple.com/documentation/tvmljs/loadindexesrequest)

# LoadIndexesRequest

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Class  
**Availability:** tvOS 13.0+

A request created when the [loadindexes](datasource/datasource/3192119-loadindexes.md) event is triggered.

## Declaration

```
interface LoadIndexesRequest
```

## Topics

### Accessing Request Properties

- [dataSource](loadindexesrequest/3192160-datasource.md): A reference to the data source object that originated the request.
- [range](loadindexesrequest/3192161-range.md): The index range to load.

### Canceling Requests

- [cancel](loadindexesrequest/3192158-cancel.md): Cancels the load request.

### Completing the Request

- [close](loadindexesrequest/3192159-close.md): Signals whether or not the data fetch is successful.

## Relationships

### Inherits From

- [EventListenerObject](eventlistenerobject.md)

## See Also

### Data Storage and Retrieval

- [Binding JSON data to TVML documents](binding_json_data_to_tvml_documents.md): Create full-fledged TVML documents by using data binding and queries on simplified TVML files.
- [XMLHttpRequest](xmlhttprequest.md): An object used to retrieve data from a URL.
- [DataItem](dataitem.md): An object used to create observable objects from JSON objects for data binding.
- [Storage](storage.md): An object used to store key-value-pair information.
- [DataSource](datasource.md): An interface that allows the system to detect and respond to changes in your data.
