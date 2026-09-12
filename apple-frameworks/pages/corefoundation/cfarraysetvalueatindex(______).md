> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraysetvalueatindex(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraysetvalueatindex(_:_:_:))

# CFArraySetValueAtIndex(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the value at a given index in an array.

## Declaration

```swift
func CFArraySetValueAtIndex(_ theArray: CFMutableArray!, _ idx: CFIndex, _ value: UnsafeRawPointer!)
```

## Parameters

- `theArray`: The array in which the value is to be changed.
- `idx`: The index at which to set the new value. The value must not lie outside the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of the array before the operation).
- `value`: The value to set in `theArray`. The value is retained by `theArray` using the retain callback provided when `theArray` was created and the previous value at `idx` is released. If the value is not of the type expected by the retain callback, the behavior is undefined. The indices of other values are not affected.

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
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArraySetValueAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the value at a given index in an array.

## Declaration

```objectivec
extern void CFArraySetValueAtIndex(CFMutableArrayRef theArray, CFIndex idx, const void *value);
```

## Parameters

- `theArray`: The array in which the value is to be changed.
- `idx`: The index at which to set the new value. The value must not lie outside the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of the array before the operation).
- `value`: The value to set in `theArray`. The value is retained by `theArray` using the retain callback provided when `theArray` was created and the previous value at `idx` is released. If the value is not of the type expected by the retain callback, the behavior is undefined. The indices of other values are not affected.

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
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
