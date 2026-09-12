> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413085-mdquerysetmaxcount](https://developer.apple.com/documentation/coreservices/1413085-mdquerysetmaxcount)

# MDQuerySetMaxCount(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Sets the maximum number of results returned.

## Declaration

```swift
func MDQuerySetMaxCount(_ query: MDQuery!, _ size: CFIndex)
```

## Parameters

- `query`: The query.
- `size`: The maximum number of return results.

<a id="discussion"></a>

## Discussion

This must be called before the query is executed.

## See Also

### Getting and Setting Query Parameters

- [MDQueryGetBatchingParameters(\_:)](1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQuerySetBatchingParameters(\_:\_:)](1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopyValueListAttributes(\_:)](1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes(\_:)](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString(\_:)](1413004-mdquerycopyquerystring.md): Returns the query string of the query.

# MDQuerySetMaxCount (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Sets the maximum number of results returned.

## Declaration

```objectivec
void MDQuerySetMaxCount(MDQueryRef query, CFIndex size);
```

## Parameters

- `query`: The query.
- `size`: The maximum number of return results.

<a id="discussion"></a>

## Discussion

This must be called before the query is executed.

## See Also

### Getting and Setting Query Parameters

- [MDQueryGetBatchingParameters](1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQuerySetBatchingParameters](1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopyValueListAttributes](1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString](1413004-mdquerycopyquerystring.md): Returns the query string of the query.
