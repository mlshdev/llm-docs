> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayappendarray(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarrayappendarray(_:_:_:))

# CFArrayAppendArray(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds the values from one array to another array.

## Declaration

```swift
func CFArrayAppendArray(_ theArray: CFMutableArray!, _ otherArray: CFArray!, _ otherRange: CFRange)
```

## Parameters

- `theArray`: The array to which values from `otherArray` are added. If `theArray` is a limited-capacity array, adding `otherRange.length` values from `otherArray` must not cause the capacity limit of `theArray` to be exceeded.
- `otherArray`: An array providing the values to be added to `theArray`.
- `otherRange`: The range within `otherArray` from which to add the values to `theArray`. The range must not exceed the index space of `otherArray`.

<a id="Discussion"></a>

## Discussion

The new values are retained by `theArray` using the retain callback provided when `theArray` was created. If the values are not of the type expected by the retain callback, the behavior is undefined. The values are assigned to the indices one larger than the previous largest index in `theArray`, and beyond, and the count of `theArray` is increased by `otherRange.length`. The values are assigned new indices in `theArray` from smallest to largest index in the order in which they appear in `otherArray`.

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArrayAppendArray (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds the values from one array to another array.

## Declaration

```objectivec
extern void CFArrayAppendArray(CFMutableArrayRef theArray, CFArrayRef otherArray, CFRange otherRange);
```

## Parameters

- `theArray`: The array to which values from `otherArray` are added. If `theArray` is a limited-capacity array, adding `otherRange.length` values from `otherArray` must not cause the capacity limit of `theArray` to be exceeded.
- `otherArray`: An array providing the values to be added to `theArray`.
- `otherRange`: The range within `otherArray` from which to add the values to `theArray`. The range must not exceed the index space of `otherArray`.

<a id="Discussion"></a>

## Discussion

The new values are retained by `theArray` using the retain callback provided when `theArray` was created. If the values are not of the type expected by the retain callback, the behavior is undefined. The values are assigned to the indices one larger than the previous largest index in `theArray`, and beyond, and the count of `theArray` is increased by `otherRange.length`. The values are assigned new indices in `theArray` from smallest to largest index in the order in which they appear in `otherArray`.

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendValue](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
