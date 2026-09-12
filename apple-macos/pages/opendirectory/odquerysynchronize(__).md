> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerysynchronize(_:)](https://developer.apple.com/documentation/opendirectory/odquerysynchronize(_:))

# ODQuerySynchronize(\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Restarts a query, disposing of any results it has obtained.

## Declaration

```swift
func ODQuerySynchronize(_ query: ODQueryRef!)
```

## Parameters

- `query`: The query.

<a id="Discussion"></a>

## Discussion

If `inQuery` was originally scheduled in a run loop with [ODQueryScheduleWithRunLoop(\_:\_:\_:)](odqueryschedulewithrunloop%28______%29.md), the query’s callback function is called with `inResults` set to `NULL`, `inError.error` set to `kODErrorQuerySynchronize`, and `inError.domain` set to `kODErrorDomainFramework`.

## See Also

### Working with Queries

- [ODQueryCopyResults(\_:\_:\_:)](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID()](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop(\_:\_:\_:)](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback(\_:\_:\_:)](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue(\_:\_:)](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

# ODQuerySynchronize (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Restarts a query, disposing of any results it has obtained.

## Declaration

```objectivec
extern void ODQuerySynchronize(ODQueryRef query);
```

## Parameters

- `query`: The query.

<a id="Discussion"></a>

## Discussion

If `inQuery` was originally scheduled in a run loop with [ODQueryScheduleWithRunLoop](odqueryschedulewithrunloop%28______%29.md), the query’s callback function is called with `inResults` set to `NULL`, `inError.error` set to `kODErrorQuerySynchronize`, and `inError.domain` set to `kODErrorDomainFramework`.

## See Also

### Working with Queries

- [ODQueryCopyResults](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryCreateWithNodeType](odquerycreatewithnodetype%28__________________%29.md): Creates a query for a particular node type using provided parameters.
- [ODQueryGetTypeID](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.
