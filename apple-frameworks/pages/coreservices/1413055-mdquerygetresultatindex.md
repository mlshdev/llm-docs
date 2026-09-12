> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413055-mdquerygetresultatindex](https://developer.apple.com/documentation/coreservices/1413055-mdquerygetresultatindex)

# MDQueryGetResultAtIndex(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the current result at the given index.

## Declaration

```swift
func MDQueryGetResultAtIndex(_ query: MDQuery!, _ idx: CFIndex) -> UnsafeRawPointer!
```

## Parameters

- `query`: The query.
- `idx`: The index into the query's result list. If the index is negative, or is equal to or larger than the current number of results in the query, the behavior is undefined.

<a id="return_value"></a>

## Return Value

Returns the MDItemRef currently at the given index, or if a result-creation function has been set, returns the result returned by that function.

<a id="discussion"></a>

## Discussion

This function causes the result object to be created if it hasn't been created already. For performance reasons you should only request objects that you require. If possible, call this function to fetch only the results you need to display or otherwise process. 

Note that the index of a particular result can change over time if the query is configured to allow live-updates.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult(\_:\_:)](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultCount(\_:)](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock(\_:\_:)](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

# MDQueryGetResultAtIndex (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the current result at the given index.

## Declaration

```objectivec
const void * MDQueryGetResultAtIndex(MDQueryRef query, CFIndex idx);
```

## Parameters

- `query`: The query.
- `idx`: The index into the query's result list. If the index is negative, or is equal to or larger than the current number of results in the query, the behavior is undefined.

<a id="return_value"></a>

## Return Value

Returns the MDItemRef currently at the given index, or if a result-creation function has been set, returns the result returned by that function.

<a id="discussion"></a>

## Discussion

This function causes the result object to be created if it hasn't been created already. For performance reasons you should only request objects that you require. If possible, call this function to fetch only the results you need to display or otherwise process. 

Note that the index of a particular result can change over time if the query is configured to allow live-updates.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultCount](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.
