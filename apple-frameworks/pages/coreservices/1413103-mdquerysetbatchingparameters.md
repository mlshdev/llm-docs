> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413103-mdquerysetbatchingparameters](https://developer.apple.com/documentation/coreservices/1413103-mdquerysetbatchingparameters)

# MDQuerySetBatchingParameters(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Set the query batching parameters.

## Declaration

```swift
func MDQuerySetBatchingParameters(_ query: MDQuery!, _ params: MDQueryBatchingParams)
```

## Parameters

- `query`: The query.
- `params`: An MDQueryBatchingParams structure with the batching parameters to set.

## See Also

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount(\_:\_:)](1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQueryGetBatchingParameters(\_:)](1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQueryCopyValueListAttributes(\_:)](1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes(\_:)](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString(\_:)](1413004-mdquerycopyquerystring.md): Returns the query string of the query.

# MDQuerySetBatchingParameters (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Set the query batching parameters.

## Declaration

```objectivec
void MDQuerySetBatchingParameters(MDQueryRef query, MDQueryBatchingParams params);
```

## Parameters

- `query`: The query.
- `params`: An MDQueryBatchingParams structure with the batching parameters to set.

## See Also

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount](1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQueryGetBatchingParameters](1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQueryCopyValueListAttributes](1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString](1413004-mdquerycopyquerystring.md): Returns the query string of the query.
