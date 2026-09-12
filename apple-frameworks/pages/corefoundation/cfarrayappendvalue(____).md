> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayappendvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfarrayappendvalue(_:_:))

# CFArrayAppendValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a value to an array giving it the new largest index.

## Declaration

```swift
func CFArrayAppendValue(_ theArray: CFMutableArray!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theArray`: The array to which `value` is to be added. If `theArray` is a limited-capacity array and it is full before this operation, the behavior is undefined.
- `value`: A CFType object or a pointer value to add to `theArray`.

<a id="Discussion"></a>

## Discussion

The `value` parameter is retained by `theArray` using the retain callback provided when `theArray` was created. If `value` is not of the type expected by the retain callback, the behavior is undefined. The `value` parameter is assigned to the index one larger than the previous largest index and the count of `theArray` is increased by one.

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray(\_:\_:\_:)](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArrayAppendValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a value to an array giving it the new largest index.

## Declaration

```objectivec
extern void CFArrayAppendValue(CFMutableArrayRef theArray, const void *value);
```

## Parameters

- `theArray`: The array to which `value` is to be added. If `theArray` is a limited-capacity array and it is full before this operation, the behavior is undefined.
- `value`: A CFType object or a pointer value to add to `theArray`.

<a id="Discussion"></a>

## Discussion

The `value` parameter is retained by `theArray` using the retain callback provided when `theArray` was created. If `value` is not of the type expected by the retain callback, the behavior is undefined. The `value` parameter is assigned to the index one larger than the previous largest index and the count of `theArray` is increased by one.

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
