> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413021-mdquerysetsortcomparatorblock](https://developer.apple.com/documentation/coreservices/1413021-mdquerysetsortcomparatorblock)

# MDQuerySetSortComparatorBlock(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.6+

Sets the block used to sort the results of an MDQuery.

## Declaration

```swift
func MDQuerySetSortComparatorBlock(_ query: MDQuery!, _ comparator: ((UnsafePointer<Unmanaged<CFTypeRef>?>?, UnsafePointer<Unmanaged<CFTypeRef>?>?) -> CFComparisonResult)!)
```

## Parameters

- `query`: The query.
- `comparator`: The callback block the MDQuery will use to sort its results. The comparator may be called on multiple threads in parallel, and must be reentrant. To take advantage of parallel sorting, it is best to avoid any locking in the comparator.

  The block may be `NULL` to cancel any custom comparator.

<a id="discussion"></a>

## Discussion

You may set the comparator block as many times as you like, even while the query is executing. Whenever the comparator block is set, all results are re-sorted using the new comparator block before the function returns. The block can be NULL to cancel custom sorting and revert to the default sorting.

The default sort provided by [MDQueryCreate(\_:\_:\_:\_:)](1413029-mdquerycreate.md) is an ascending sort. Strings are compared using [CFStringCompare(\_:\_:\_:)](../corefoundation/cfstringcompare%28______%29.md) with the options [compareNonliteral](../corefoundation/cfstringcompareflags/comparenonliteral.md) | [compareLocalized](../corefoundation/cfstringcompareflags/comparelocalized.md) | [compareNumerically](../corefoundation/cfstringcompareflags/comparenumerically.md). `CFDataRefs` are compared by using `memcmp()` of the data pointers.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult(\_:\_:)](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex(\_:\_:)](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount(\_:)](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.

# MDQuerySetSortComparatorBlock (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.6+

Sets the block used to sort the results of an MDQuery.

## Declaration

```objectivec
void MDQuerySetSortComparatorBlock(MDQueryRef query, CFComparisonResult (^comparator)(const CFTypeRef attrs1[], const CFTypeRef attrs2[]));
```

## Parameters

- `query`: The query.
- `comparator`: The callback block the MDQuery will use to sort its results. The comparator may be called on multiple threads in parallel, and must be reentrant. To take advantage of parallel sorting, it is best to avoid any locking in the comparator.

  The block may be `NULL` to cancel any custom comparator.

<a id="discussion"></a>

## Discussion

You may set the comparator block as many times as you like, even while the query is executing. Whenever the comparator block is set, all results are re-sorted using the new comparator block before the function returns. The block can be NULL to cancel custom sorting and revert to the default sorting.

The default sort provided by [MDQueryCreate](1413029-mdquerycreate.md) is an ascending sort. Strings are compared using [CFStringCompare(\_:\_:\_:)](../corefoundation/cfstringcompare%28______%29.md) with the options [compareNonliteral](../corefoundation/cfstringcompareflags/comparenonliteral.md) | [compareLocalized](../corefoundation/cfstringcompareflags/comparelocalized.md) | [compareNumerically](../corefoundation/cfstringcompareflags/comparenumerically.md). `CFDataRefs` are compared by using `memcmp()` of the data pointers.

## See Also

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex](1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue](1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult](1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex](1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount](1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
