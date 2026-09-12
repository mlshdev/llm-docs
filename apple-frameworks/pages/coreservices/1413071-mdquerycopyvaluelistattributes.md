> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413071-mdquerycopyvaluelistattributes](https://developer.apple.com/documentation/coreservices/1413071-mdquerycopyvaluelistattributes)

# MDQueryCopyValueListAttributes(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the list of attribute names for which values are being collected by the query.

## Declaration

```swift
func MDQueryCopyValueListAttributes(_ query: MDQuery!) -> CFArray!
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

A CFArrayRef containing the attribute names of the collected values.

## See Also

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount(\_:\_:)](1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQueryGetBatchingParameters(\_:)](1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQuerySetBatchingParameters(\_:\_:)](1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopySortingAttributes(\_:)](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString(\_:)](1413004-mdquerycopyquerystring.md): Returns the query string of the query.

# MDQueryCopyValueListAttributes (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the list of attribute names for which values are being collected by the query.

## Declaration

```objectivec
CFArrayRef MDQueryCopyValueListAttributes(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

A CFArrayRef containing the attribute names of the collected values.

## See Also

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount](1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQueryGetBatchingParameters](1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQuerySetBatchingParameters](1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopySortingAttributes](1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString](1413004-mdquerycopyquerystring.md): Returns the query string of the query.
