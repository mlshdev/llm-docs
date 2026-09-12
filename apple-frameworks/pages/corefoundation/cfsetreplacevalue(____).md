> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetreplacevalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetreplacevalue(_:_:))

# CFSetReplaceValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a value in a CFMutableSet object.

## Declaration

```swift
func CFSetReplaceValue(_ theSet: CFMutableSet!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theSet`: The set to modify.
- `value`: The value to replace in `theSet`. If this value does not already exist in `theSet`, the function does nothing. You may pass the value itself instead of a pointer if it is pointer-size or less. The equal callback provided when `theSet` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theSet`, is not understood by the equal callback, the behavior is undefined.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue(\_:\_:)](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable(\_:\_:\_:)](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues(\_:)](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue(\_:\_:)](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetSetValue(\_:\_:)](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.

# CFSetReplaceValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a value in a CFMutableSet object.

## Declaration

```objectivec
extern void CFSetReplaceValue(CFMutableSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to modify.
- `value`: The value to replace in `theSet`. If this value does not already exist in `theSet`, the function does nothing. You may pass the value itself instead of a pointer if it is pointer-size or less. The equal callback provided when `theSet` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theSet`, is not understood by the equal callback, the behavior is undefined.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetSetValue](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.
