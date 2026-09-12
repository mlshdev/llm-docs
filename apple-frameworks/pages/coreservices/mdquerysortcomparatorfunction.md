> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mdquerysortcomparatorfunction](https://developer.apple.com/documentation/coreservices/mdquerysortcomparatorfunction)

# MDQuerySortComparatorFunction (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Callback function used to sort the results of a query.

## Declaration

```swift
typealias MDQuerySortComparatorFunction = (UnsafePointer<Unmanaged<CFTypeRef>?>?, UnsafePointer<Unmanaged<CFTypeRef>?>?, UnsafeMutableRawPointer?) -> CFComparisonResult
```

## Parameters

- `query`: The query instance.
- `attrs1`: A C array of attribute values for a result. The values occur in the array in the same order and position that the attribute names were passed in the `sortingAttrs` array when the query was created. The values of the attributes will be `NULL` if the attribute doesn't exist for a result or if read access to that attribute is not allowed.
- `attrs2`: A C array of attribute values for a result. The values occur in the array in the same order and position that the attribute names were passed in the `sortingAttrs` array when the query was created. The values of the attributes will be `NULL` if the attribute doesn't exist for a result or if read access to that attribute is not allowed.
- `context`: The user-defined context parameter provided in the function `MDQuerySetSortComparator`.

<a id="return_value"></a>

## Return Value

The function must return one of the CFComparisonResults `kCFCompareLessThan`, `kCFCompareEqualTo`, or `kCFCompareGreaterThan`. There is no provision for unordered results. The comparison should be a total order relation and produce the same results for the same inputs.

## See Also

### Callbacks

- [MDQueryCreateResultFunction](mdquerycreateresultfunction.md): Callback function used to create the result objects stored and returned by a query.
- [MDQueryCreateValueFunction](mdquerycreatevaluefunction.md): Callback function usedto create the value objects stored and returned by a query.

# MDQuerySortComparatorFunction (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Callback function used to sort the results of a query.

## Declaration

```objectivec
typedef CFComparisonResult (*MDQuerySortComparatorFunction)(const CFTypeRef attrs1[], const CFTypeRef attrs2[], void *context);
```

## Parameters

- `query`: The query instance.
- `attrs1`: A C array of attribute values for a result. The values occur in the array in the same order and position that the attribute names were passed in the `sortingAttrs` array when the query was created. The values of the attributes will be `NULL` if the attribute doesn't exist for a result or if read access to that attribute is not allowed.
- `attrs2`: A C array of attribute values for a result. The values occur in the array in the same order and position that the attribute names were passed in the `sortingAttrs` array when the query was created. The values of the attributes will be `NULL` if the attribute doesn't exist for a result or if read access to that attribute is not allowed.
- `context`: The user-defined context parameter provided in the function `MDQuerySetSortComparator`.

<a id="return_value"></a>

## Return Value

The function must return one of the CFComparisonResults `kCFCompareLessThan`, `kCFCompareEqualTo`, or `kCFCompareGreaterThan`. There is no provision for unordered results. The comparison should be a total order relation and produce the same results for the same inputs.

## See Also

### Callbacks

- [MDQueryCreateResultFunction](mdquerycreateresultfunction.md): Callback function used to create the result objects stored and returned by a query.
- [MDQueryCreateValueFunction](mdquerycreatevaluefunction.md): Callback function usedto create the value objects stored and returned by a query.
