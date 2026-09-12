> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraycreatemutable(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraycreatemutable(_:_:_:))

# CFArrayCreateMutable(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new empty mutable array.

## Declaration

```swift
func CFArrayCreateMutable(_ allocator: CFAllocator!, _ capacity: CFIndex, _ callBacks: UnsafePointer<CFArrayCallBacks>!) -> CFMutableArray!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new array and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new array. The array starts empty and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.
- `callBacks`: A pointer to a [CFArrayCallBacks](cfarraycallbacks.md) structure initialized with the callbacks for the array to use on each value in the array. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple array creations.

  If the array contains CFType objects only, then pass [kCFTypeArrayCallBacks](kcftypearraycallbacks.md) to use the default callback functions.

  This parameter may be `NULL`, which is treated as if a valid structure of version `0` with all fields `NULL` had been passed in.

  If any of the fields are not valid pointers to functions of the correct type, or this parameter is not a valid pointer to a `CFArrayCallBacks` structure, the behavior is undefined. If any value put into the array is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

<a id="return-value"></a>

## Return Value

A new mutable array, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray(\_:\_:\_:)](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue(\_:\_:)](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutableCopy(\_:\_:\_:)](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices(\_:\_:\_:)](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex(\_:\_:\_:)](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues(\_:)](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex(\_:\_:)](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues(\_:\_:\_:\_:)](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex(\_:\_:\_:)](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues(\_:\_:\_:\_:)](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.

# CFArrayCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new empty mutable array.

## Declaration

```objectivec
extern CFMutableArrayRefCFArrayCreateMutable(CFAllocatorRef allocator, CFIndex capacity, const CFArrayCallBacks *callBacks);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new array and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `capacity`: The maximum number of values that can be contained by the new array. The array starts empty and can grow to this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.
- `callBacks`: A pointer to a [CFArrayCallBacks](cfarraycallbacks.md) structure initialized with the callbacks for the array to use on each value in the array. A copy of the contents of the callbacks structure is made, so that a pointer to a structure on the stack can be passed in or can be reused for multiple array creations.

  If the array contains CFType objects only, then pass [kCFTypeArrayCallBacks](kcftypearraycallbacks.md) to use the default callback functions.

  This parameter may be `NULL`, which is treated as if a valid structure of version `0` with all fields `NULL` had been passed in.

  If any of the fields are not valid pointers to functions of the correct type, or this parameter is not a valid pointer to a `CFArrayCallBacks` structure, the behavior is undefined. If any value put into the array is not one understood by one of the callback functions, the behavior when that callback function is used is undefined.

<a id="return-value"></a>

## Return Value

A new mutable array, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFMutableArray Miscellaneous Functions

- [CFArrayAppendArray](cfarrayappendarray%28______%29.md): Adds the values from one array to another array.
- [CFArrayAppendValue](cfarrayappendvalue%28____%29.md): Adds a value to an array giving it the new largest index.
- [CFArrayCreateMutableCopy](cfarraycreatemutablecopy%28______%29.md): Creates a new mutable array with the values from another array.
- [CFArrayExchangeValuesAtIndices](cfarrayexchangevaluesatindices%28______%29.md): Exchanges the values at two indices of an array.
- [CFArrayInsertValueAtIndex](cfarrayinsertvalueatindex%28______%29.md): Inserts a value into an array at a given index.
- [CFArrayRemoveAllValues](cfarrayremoveallvalues%28__%29.md): Removes all the values from an array, making it empty.
- [CFArrayRemoveValueAtIndex](cfarrayremovevalueatindex%28____%29.md): Removes the value at a given index from an array.
- [CFArrayReplaceValues](cfarrayreplacevalues%28________%29.md): Replaces a range of values in an array.
- [CFArraySetValueAtIndex](cfarraysetvalueatindex%28______%29.md): Changes the value at a given index in an array.
- [CFArraySortValues](cfarraysortvalues%28________%29.md): Sorts the values in an array using a given comparison function.
