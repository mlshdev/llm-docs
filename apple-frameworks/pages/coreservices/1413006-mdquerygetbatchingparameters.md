> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413006-mdquerygetbatchingparameters](https://developer.apple.com/documentation/coreservices/1413006-mdquerygetbatchingparameters)

# MDQueryGetBatchingParameters(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the current parameters that control the batching of progress notifications.

## Declaration

```swift
func MDQueryGetBatchingParameters(_ query: MDQuery!) -> MDQueryBatchingParams
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

An MDQueryBatchingParams structure with the current batching parameters.

## See Also

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount(\_:\_:)](1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQuerySetBatchingParameters(\_:\_:)](1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopyValueListAttributes(\_:)](1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes(\_:)](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString(\_:)](1413004-mdquerycopyquerystring.md): Returns the query string of the query.

# MDQueryGetBatchingParameters (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the current parameters that control the batching of progress notifications.

## Declaration

```objectivec
MDQueryBatchingParams MDQueryGetBatchingParameters(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

An MDQueryBatchingParams structure with the current batching parameters.

## See Also

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount](1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQuerySetBatchingParameters](1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopyValueListAttributes](1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString](1413004-mdquerycopyquerystring.md): Returns the query string of the query.
