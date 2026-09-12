> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413008-mdquerygetresultcount](https://developer.apple.com/documentation/coreservices/1413008-mdquerygetresultcount)

# MDQueryGetResultCount(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the number of results currently collected by the query.

## Declaration

```swift
func MDQueryGetResultCount(_ query: MDQuery!) -> CFIndex
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

The number of results in the query.

<a id="discussion"></a>

## Discussion

Note that the number of results in a query will change over time as the query's result list is updated.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult(\_:\_:)](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex(\_:\_:)](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQuerySetSortComparatorBlock(\_:\_:)](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

# MDQueryGetResultCount (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the number of results currently collected by the query.

## Declaration

```objectivec
CFIndex MDQueryGetResultCount(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

The number of results in the query.

<a id="discussion"></a>

## Discussion

Note that the number of results in a query will change over time as the query's result list is updated.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQuerySetSortComparatorBlock](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.
