> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerycreatewithnodetype(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/opendirectory/odquerycreatewithnodetype(_:_:_:_:_:_:_:_:_:))

# ODQueryCreateWithNodeType(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a query for a particular node type using provided parameters.

## Declaration

```swift
func ODQueryCreateWithNodeType(_ allocator: CFAllocator!, _ nodeType: ODNodeType, _ recordTypeOrList: CFTypeRef!, _ attribute: String!, _ matchType: ODMatchType, _ queryValueOrList: CFTypeRef!, _ returnAttributeOrList: CFTypeRef!, _ maxResults: CFIndex, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<ODQueryRef>!
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `nodeType`: The node type.
- `recordTypeOrList`: The type or types of record to query. Can be a `CFString` object for a single type or a `CFArray` object containing `CFString` objects for multiple types.
- `attribute`: The name of the attribute to query.
- `matchType`: The type of query.
- `queryValueOrList`: The value or values to query in the attribute. Can be a `CFString` object or a `CFData` object for a single value, or a `CFArray` containing `CFString` and `CFData` objects for multiple values.
- `returnAttributeOrList`: The attribute or attributes to be returned from the query. Can be a `CFString` object for a single attribute or a `CFArray` object containing `CFString` objects for multiple attributes. Passing `NULL` is equivalent to passing `kODAttributeTypeStandardOnly`.
- `maxResults`: The maximum number of values to be returned.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created query.

## See Also

### Working with Queries

- [ODQueryCopyResults(\_:\_:\_:)](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryGetTypeID()](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop(\_:\_:\_:)](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback(\_:\_:\_:)](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue(\_:\_:)](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize(\_:)](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop(\_:\_:\_:)](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.

# ODQueryCreateWithNodeType (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a query for a particular node type using provided parameters.

## Declaration

```objectivec
extern ODQueryRefODQueryCreateWithNodeType(CFAllocatorRef allocator, ODNodeType nodeType, CFTypeRef recordTypeOrList, ODAttributeType attribute, ODMatchType matchType, CFTypeRef queryValueOrList, CFTypeRef returnAttributeOrList, CFIndex maxResults, CFErrorRef*error);
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `nodeType`: The node type.
- `recordTypeOrList`: The type or types of record to query. Can be a `CFString` object for a single type or a `CFArray` object containing `CFString` objects for multiple types.
- `attribute`: The name of the attribute to query.
- `matchType`: The type of query.
- `queryValueOrList`: The value or values to query in the attribute. Can be a `CFString` object or a `CFData` object for a single value, or a `CFArray` containing `CFString` and `CFData` objects for multiple values.
- `returnAttributeOrList`: The attribute or attributes to be returned from the query. Can be a `CFString` object for a single attribute or a `CFArray` object containing `CFString` objects for multiple attributes. Passing `NULL` is equivalent to passing `kODAttributeTypeStandardOnly`.
- `maxResults`: The maximum number of values to be returned.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created query.

## See Also

### Working with Queries

- [ODQueryCopyResults](odquerycopyresults%28______%29.md): Returns results from a query synchronously.
- [ODQueryCreateWithNode](odquerycreatewithnode%28__________________%29.md): Creates a query with a node using provided parameters.
- [ODQueryGetTypeID](odquerygettypeid%28%29.md): Returns the type ID for an Open Directory query.
- [ODQueryScheduleWithRunLoop](odqueryschedulewithrunloop%28______%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [ODQuerySetCallback](odquerysetcallback%28______%29.md): Sets the callback for an asynchronous query.
- [ODQuerySetDispatchQueue](odquerysetdispatchqueue%28____%29.md): Retrieves results from a query asynchronously by adding the query to a dispatch queue.
- [ODQuerySynchronize](odquerysynchronize%28__%29.md): Restarts a query, disposing of any results it has obtained.
- [ODQueryUnscheduleFromRunLoop](odqueryunschedulefromrunloop%28______%29.md): Removes a query from a specified run loop.
