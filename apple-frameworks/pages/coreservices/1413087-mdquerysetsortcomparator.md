> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413087-mdquerysetsortcomparator](https://developer.apple.com/documentation/coreservices/1413087-mdquerysetsortcomparator)

# MDQuerySetSortComparator(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Sets the function used to sort the results of an MDQuery.

## Declaration

```swift
func MDQuerySetSortComparator(_ query: MDQuery!, _ comparator: MDQuerySortComparatorFunction!, _ context: UnsafeMutableRawPointer!)
```

## Parameters

- `query`: The query.
- `comparator`: The callback function the MDQuery uses to sort the results list. This parameter may be `NULL` which cancels previous sort comparator settings. If a function is specified and is not of type `MDQuerySortComparatorFunction` or does not behave as a `MDQuerySortComparatorFunction` must, the behavior is undefined.
- `context`: A pointer-sized user-defined value, that is passed as the third parameter to the create function. MDQuery does not use this value, does not retain the context in any way, and requires that the context be valid for the lifetime of the query. If the context is not what is expected by the create function, the behavior is undefined.

## See Also

### Setting Callback Functions

- [MDQuerySetCreateResultFunction(\_:\_:\_:\_:)](1413064-mdquerysetcreateresultfunction.md): Sets the function used to create the result objects of the MDQuery.
- [MDQuerySetCreateValueFunction(\_:\_:\_:\_:)](1413017-mdquerysetcreatevaluefunction.md): Sets the function used to create the value objects of the MDQuery.

# MDQuerySetSortComparator (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Sets the function used to sort the results of an MDQuery.

## Declaration

```objectivec
void MDQuerySetSortComparator(MDQueryRef query, MDQuerySortComparatorFunction comparator, void *context);
```

## Parameters

- `query`: The query.
- `comparator`: The callback function the MDQuery uses to sort the results list. This parameter may be `NULL` which cancels previous sort comparator settings. If a function is specified and is not of type `MDQuerySortComparatorFunction` or does not behave as a `MDQuerySortComparatorFunction` must, the behavior is undefined.
- `context`: A pointer-sized user-defined value, that is passed as the third parameter to the create function. MDQuery does not use this value, does not retain the context in any way, and requires that the context be valid for the lifetime of the query. If the context is not what is expected by the create function, the behavior is undefined.

## See Also

### Setting Callback Functions

- [MDQuerySetCreateResultFunction](1413064-mdquerysetcreateresultfunction.md): Sets the function used to create the result objects of the MDQuery.
- [MDQuerySetCreateValueFunction](1413017-mdquerysetcreatevaluefunction.md): Sets the function used to create the value objects of the MDQuery.
