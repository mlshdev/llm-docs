> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayexchangevaluesatindices(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarrayexchangevaluesatindices(_:_:_:))

# CFArrayExchangeValuesAtIndices(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Exchanges the values at two indices of an array.

## Declaration

```swift
func CFArrayExchangeValuesAtIndices(_ theArray: CFMutableArray!, _ idx1: CFIndex, _ idx2: CFIndex)
```

## Parameters

- `theArray`: The array that contains the values to be swapped.
- `idx1`: The index of the value to swap with the value at `idx2`. The index must not exceed the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of `theArray` before the operation).
- `idx2`: The index of the value to swap with the value at `idx1`. The index must not exceed the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of `theArray` before the operation).

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray(\_:\_:\_:)](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArrayExchangeValuesAtIndices (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Exchanges the values at two indices of an array.

## Declaration

```objectivec
extern void CFArrayExchangeValuesAtIndices(CFMutableArrayRef theArray, CFIndex idx1, CFIndex idx2);
```

## Parameters

- `theArray`: The array that contains the values to be swapped.
- `idx1`: The index of the value to swap with the value at `idx2`. The index must not exceed the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of `theArray` before the operation).
- `idx2`: The index of the value to swap with the value at `idx1`. The index must not exceed the index space of `theArray` (`0` to `N-1` inclusive, where `N` is the count of `theArray` before the operation).

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
