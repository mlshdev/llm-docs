> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413105-mdquerycopyvaluesofattribute](https://developer.apple.com/documentation/coreservices/1413105-mdquerycopyvaluesofattribute)

# MDQueryCopyValuesOfAttribute(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the list of values from the results of the query for the specified attribute.

## Declaration

```swift
func MDQueryCopyValuesOfAttribute(_ query: MDQuery!, _ name: CFString!) -> CFArray!
```

## Parameters

- `query`: The query.
- `name`: The attribute name to return the value of. If the attribute is not one of those requested when the query was created the behavior is undefined

<a id="return_value"></a>

## Return Value

A CFArrayRef containing the value objects for the specified attribute. The array contents are not ordered and contain only one occurrence of each value. The array contents may change over time if the query is configured for live-updates.

## See Also

### Getting Query Result Values

- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult(\_:\_:)](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex(\_:\_:)](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount(\_:)](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock(\_:\_:)](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

# MDQueryCopyValuesOfAttribute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the list of values from the results of the query for the specified attribute.

## Declaration

```objectivec
CFArrayRef MDQueryCopyValuesOfAttribute(MDQueryRef query, CFStringRef name);
```

## Parameters

- `query`: The query.
- `name`: The attribute name to return the value of. If the attribute is not one of those requested when the query was created the behavior is undefined

<a id="return_value"></a>

## Return Value

A CFArrayRef containing the value objects for the specified attribute. The array contents are not ordered and contain only one occurrence of each value. The array contents may change over time if the query is configured for live-updates.

## See Also

### Getting Query Result Values

- [MDQueryGetAttributeValueOfResultAtIndex](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.
