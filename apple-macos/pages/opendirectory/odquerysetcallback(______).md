> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerysetcallback(_:_:_:)](https://developer.apple.com/documentation/opendirectory/odquerysetcallback(_:_:_:))

# ODQuerySetCallback(\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Sets the callback for an asynchronous query.

## Declaration

```swift
func ODQuerySetCallback(_ query: ODQueryRef!, _ callback: ODQueryCallback!, _ userInfo: UnsafeMutableRawPointer!)
```

## Parameters

- `query`: The query.
- `callback`: The callback function.
- `userInfo`: A user-defined pointer to be passed back to the callback function.

## See Also

### Related Documentation

- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.

### Working with Queries

- [ODQueryCopyResults(\_:\_:\_:)](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID()](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop(\_:\_:\_:)](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetDispatchQueue(\_:\_:)](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize(\_:)](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

# ODQuerySetCallback (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Sets the callback for an asynchronous query.

## Declaration

```objectivec
extern void ODQuerySetCallback(ODQueryRef query, ODQueryCallback callback, void *userInfo);
```

## Parameters

- `query`: The query.
- `callback`: The callback function.
- `userInfo`: A user-defined pointer to be passed back to the callback function.

## See Also

### Related Documentation

- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.

### Working with Queries

- [ODQueryCopyResults](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetDispatchQueue](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.
