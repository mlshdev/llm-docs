> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413093-mdquerygetindexofresult](https://developer.apple.com/documentation/coreservices/1413093-mdquerygetindexofresult)

# MDQueryGetIndexOfResult(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the current index of the given result.

## Declaration

```swift
func MDQueryGetIndexOfResult(_ query: MDQuery!, _ result: UnsafeRawPointer!) -> CFIndex
```

## Parameters

- `query`: The query.
- `result`: The result object to search for. If a custom create-result function has been set and this parameter is not a valid result object that the provided callbacks can handle, the behavior is undefined. If a custom create-result function has not been set this parameter must be a valid MDItemRef.

<a id="return_value"></a>

## Return Value

The index of the given result, or `kCFNotFound` if the value is not one of the query's existing results. If you provided a custom result creation function result, the result will be objects created by that function.

<a id="discussion"></a>

## Discussion

If a result-create function has been set, and the equal callback is non-`NULL`, it will be used to test the query's results against the candidate result. 

Note that the index of a result can change over time if the query allows live-updates.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetResultAtIndex(\_:\_:)](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount(\_:)](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock(\_:\_:)](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

# MDQueryGetIndexOfResult (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the current index of the given result.

## Declaration

```objectivec
CFIndex MDQueryGetIndexOfResult(MDQueryRef query, const void *result);
```

## Parameters

- `query`: The query.
- `result`: The result object to search for. If a custom create-result function has been set and this parameter is not a valid result object that the provided callbacks can handle, the behavior is undefined. If a custom create-result function has not been set this parameter must be a valid MDItemRef.

<a id="return_value"></a>

## Return Value

The index of the given result, or `kCFNotFound` if the value is not one of the query's existing results. If you provided a custom result creation function result, the result will be objects created by that function.

<a id="discussion"></a>

## Discussion

If a result-create function has been set, and the equal callback is non-`NULL`, it will be used to test the query's results against the candidate result. 

Note that the index of a result can change over time if the query allows live-updates.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetResultAtIndex](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.
