> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413046-mdquerygetattributevalueofresult](https://developer.apple.com/documentation/coreservices/1413046-mdquerygetattributevalueofresult)

# MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the value of the named attribute for the result at the given index.

## Declaration

```swift
func MDQueryGetAttributeValueOfResultAtIndex(_ query: MDQuery!, _ name: CFString!, _ idx: CFIndex) -> UnsafeMutableRawPointer!
```

## Parameters

- `query`: The query.
- `name`: The attribute name to return the values of. If the attribute is not one of those requested in the `valueListAttrs` or `sortingAttrs` parameters to one of the query creation functions, the result will be `NULL`.
- `idx`: The index into the query's result list. If the index is negative or is equal to or larger than the current number of results in the query, the behavior is undefined.

<a id="return_value"></a>

## Return Value

The value of the attribute, or `NULL` if the attribute doesn't exist for the specified result.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult(\_:\_:)](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex(\_:\_:)](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount(\_:)](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock(\_:\_:)](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

# MDQueryGetAttributeValueOfResultAtIndex (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns the value of the named attribute for the result at the given index.

## Declaration

```objectivec
void * MDQueryGetAttributeValueOfResultAtIndex(MDQueryRef query, CFStringRef name, CFIndex idx);
```

## Parameters

- `query`: The query.
- `name`: The attribute name to return the values of. If the attribute is not one of those requested in the `valueListAttrs` or `sortingAttrs` parameters to one of the query creation functions, the result will be `NULL`.
- `idx`: The index into the query's result list. If the index is negative or is equal to or larger than the current number of results in the query, the behavior is undefined.

<a id="return_value"></a>

## Return Value

The value of the attribute, or `NULL` if the attribute doesn't exist for the specified result.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetCountOfResultsWithAttributeValue](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock](1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.
