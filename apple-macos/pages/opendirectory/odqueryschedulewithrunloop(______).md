> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odqueryschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/opendirectory/odqueryschedulewithrunloop(_:_:_:))

# ODQueryScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Retrieves results from a query asynchronously by scheduling the query in a run loop.

## Declaration

```swift
func ODQueryScheduleWithRunLoop(_ query: ODQueryRef!, _ runLoop: CFRunLoop!, _ runLoopMode: CFString!)
```

## Parameters

- `query`: The query.
- `runLoop`: The run loop.
- `runLoopMode`: The mode of the run loop.

<a id="Discussion"></a>

## Discussion

This function spawns a new thread to execute the query in `inRunLoop`. When the query is complete, the query’s callback function is called with both `inResults` and `inError` set to `NULL`. To remove an incomplete query from its run loop, call [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md).

## See Also

### Related Documentation

- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.

### Working with Queries

- [ODQueryCopyResults(\_:\_:\_:)](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID()](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQuerySetCallback(\_:\_:\_:)](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue(\_:\_:)](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize(\_:)](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

# ODQueryScheduleWithRunLoop (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Retrieves results from a query asynchronously by scheduling the query in a run loop.

## Declaration

```objectivec
extern void ODQueryScheduleWithRunLoop(ODQueryRef query, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `query`: The query.
- `runLoop`: The run loop.
- `runLoopMode`: The mode of the run loop.

<a id="Discussion"></a>

## Discussion

This function spawns a new thread to execute the query in `inRunLoop`. When the query is complete, the query’s callback function is called with both `inResults` and `inError` set to `NULL`. To remove an incomplete query from its run loop, call [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md).

## See Also

### Related Documentation

- [ODQueryCallback](odquerycallback.md): A callback function called as results from a scheduled query are returned.

### Working with Queries

- [ODQueryCopyResults](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQuerySetCallback](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.
