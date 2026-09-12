> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayreplacevalues(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarrayreplacevalues(_:_:_:_:))

# CFArrayReplaceValues(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a range of values in an array.

## Declaration

```swift
func CFArrayReplaceValues(_ theArray: CFMutableArray!, _ range: CFRange, _ newValues: UnsafeMutablePointer<UnsafeRawPointer?>!, _ newCount: CFIndex)
```

## Parameters

- `theArray`: The array in which some values are to be replaced. If this parameter is not a valid CFMutableArray object, the behavior is undefined.
- `range`: The range of values within `theArray` to replace. The range location or end point (defined by the location plus length minus 1) must not lie outside the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of `theArray`). The range length must not be negative. The range may be empty (length 0), in which case the new values are merely inserted at the range location.
- `newValues`: A C array of the pointer-sized values to be placed into `theArray`. The new values in `theArray` are ordered in the same order in which they appear in this C array. This parameter may be `NULL` if the `newCount` parameter is 0. This C array is not changed or freed by this function. If this parameter is not a valid pointer to a C array of at least `newCount` pointers, the behavior is undefined.
- `newCount`: The number of values to copy from the `newValues` C array into `theArray`. If this parameter is different from the range length, the excess `newCount` values are inserted after the range or the excess range values are deleted. This parameter may be 0, in which case no new values are replaced into `theArray` and the values in the range are simply removed. If this parameter is negative or greater than the number of values actually in the `newValues` C array, the behavior is undefined.

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray(\_:\_:\_:)](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArrayReplaceValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a range of values in an array.

## Declaration

```objectivec
extern void CFArrayReplaceValues(CFMutableArrayRef theArray, CFRange range, const void **newValues, CFIndex newCount);
```

## Parameters

- `theArray`: The array in which some values are to be replaced. If this parameter is not a valid CFMutableArray object, the behavior is undefined.
- `range`: The range of values within `theArray` to replace. The range location or end point (defined by the location plus length minus 1) must not lie outside the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of `theArray`). The range length must not be negative. The range may be empty (length 0), in which case the new values are merely inserted at the range location.
- `newValues`: A C array of the pointer-sized values to be placed into `theArray`. The new values in `theArray` are ordered in the same order in which they appear in this C array. This parameter may be `NULL` if the `newCount` parameter is 0. This C array is not changed or freed by this function. If this parameter is not a valid pointer to a C array of at least `newCount` pointers, the behavior is undefined.
- `newCount`: The number of values to copy from the `newValues` C array into `theArray`. If this parameter is different from the range length, the excess `newCount` values are inserted after the range or the excess range values are deleted. This parameter may be 0, in which case no new values are replaced into `theArray` and the values in the range are simply removed. If this parameter is negative or greater than the number of values actually in the `newValues` C array, the behavior is undefined.

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
