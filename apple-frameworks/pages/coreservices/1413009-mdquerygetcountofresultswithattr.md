> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413009-mdquerygetcountofresultswithattr](https://developer.apple.com/documentation/coreservices/1413009-mdquerygetcountofresultswithattr)

# MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the number of results which have the given attribute and attribute value.

## Declaration

```swift
func MDQueryGetCountOfResultsWithAttributeValue(_ query: MDQuery!, _ name: CFString!, _ value: CFTypeRef!) -> CFIndex
```

## Parameters

- `query`: The query.
- `name`: The attribute name to return the result count of. If the attribute is not one of those requested in the `valueListAttrs` parameter, the behavior is undefined.
- `value`: The attribute value for which to return the number of results with that value. This parameter may be `NULL`, in which case the number of results that do not contain the specified attribute is returned.

<a id="return_value"></a>

## Return Value

The number of results containing that attribute and value.

<a id="discussion"></a>

## Discussion

This count may change over time if the query allows live-updates.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetIndexOfResult(\_:\_:)](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex(\_:\_:)](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount(\_:)](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock(\_:\_:)](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

# MDQueryGetCountOfResultsWithAttributeValue (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the number of results which have the given attribute and attribute value.

## Declaration

```objectivec
CFIndex MDQueryGetCountOfResultsWithAttributeValue(MDQueryRef query, CFStringRef name, CFTypeRef value);
```

## Parameters

- `query`: The query.
- `name`: The attribute name to return the result count of. If the attribute is not one of those requested in the `valueListAttrs` parameter, the behavior is undefined.
- `value`: The attribute value for which to return the number of results with that value. This parameter may be `NULL`, in which case the number of results that do not contain the specified attribute is returned.

<a id="return_value"></a>

## Return Value

The number of results containing that attribute and value.

<a id="discussion"></a>

## Discussion

This count may change over time if the query allows live-updates.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetIndexOfResult](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.
