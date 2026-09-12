> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerysetdispatchqueue(_:_:)](https://developer.apple.com/documentation/opendirectory/odquerysetdispatchqueue(_:_:))

# ODQuerySetDispatchQueue(\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Retrieves results from a query asynchronously by adding the query to a dispatch queue.

## Declaration

```swift
func ODQuerySetDispatchQueue(_ query: ODQueryRef!, _ queue: dispatch_queue_t!)
```

## Parameters

- `query`: The query.
- `queue`: The dispatch queue.

<a id="Discussion"></a>

## Discussion

When the query is complete, the query’s callback function is called with both `inResults` and `inError` set to `NULL`.

## See Also

### Related Documentation

- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.

### Working with Queries

- [ODQueryCopyResults(\_:\_:\_:)](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID()](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop(\_:\_:\_:)](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback(\_:\_:\_:)](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySynchronize(\_:)](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

# ODQuerySetDispatchQueue (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Retrieves results from a query asynchronously by adding the query to a dispatch queue.

## Declaration

```objectivec
extern void ODQuerySetDispatchQueue(ODQueryRef query, dispatch_queue_t queue);
```

## Parameters

- `query`: The query.
- `queue`: The dispatch queue.

<a id="Discussion"></a>

## Discussion

When the query is complete, the query’s callback function is called with both `inResults` and `inError` set to `NULL`.

## See Also

### Related Documentation

- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.

### Working with Queries

- [ODQueryCopyResults](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySynchronize](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.
