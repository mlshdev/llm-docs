> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraycreatemutablecopy(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraycreatemutablecopy(_:_:_:))

# CFArrayCreateMutableCopy(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable array with the values from another array.

## Declaration

```swift
func CFArrayCreateMutableCopy(_ allocator: CFAllocator!, _ capacity: CFIndex, _ theArray: CFArray!) -> CFMutableArray!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new array and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new array. The array starts with the same number of values as `theArray` and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. If non-`0`, `capacity` must be greater than or equal to the count of `theArray`.
- `theArray`: The array to copy. The pointer values from the array are copied into the new array. However, the values are also retained by the new array.

<a id="return-value"></a>

## Return Value

A new mutable array that contains the same values as `theArray`. The new array has the same count as the `theArray` and uses the same callbacks. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray(\_:\_:\_:)](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable(\_:\_:\_:)](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArrayCreateMutableCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new mutable array with the values from another array.

## Declaration

```objectivec
extern CFMutableArrayRefCFArrayCreateMutableCopy(CFAllocatorRef allocator, CFIndex capacity, CFArrayRef theArray);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new array and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new array. The array starts with the same number of values as `theArray` and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. If non-`0`, `capacity` must be greater than or equal to the count of `theArray`.
- `theArray`: The array to copy. The pointer values from the array are copied into the new array. However, the values are also retained by the new array.

<a id="return-value"></a>

## Return Value

A new mutable array that contains the same values as `theArray`. The new array has the same count as the `theArray` and uses the same callbacks. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutable](cfarraycreatemutable%28______%29.md): Creates a new empty mutable array.
- [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
