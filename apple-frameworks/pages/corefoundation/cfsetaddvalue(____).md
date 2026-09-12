> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetaddvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetaddvalue(_:_:))

# CFSetAddValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a value to a CFMutableSet object.

## Declaration

```swift
func CFSetAddValue(_ theSet: CFMutableSet!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theSet`: The set to modify.
- `value`: A CFType object or a pointer value to add to `theSet` (or the value itself, if it fits into the size of a pointer).

  `value` is retained by `theSet` using the retain callback provided when `theSet` was created. If `value` is not of the type expected by the retain callback, the behavior is undefined. If `value` already exists in the collection, this function returns without doing anything.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetCreateMutable(\_:\_:\_:)](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues(\_:)](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue(\_:\_:)](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue(\_:\_:)](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue(\_:\_:)](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.

# CFSetAddValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a value to a CFMutableSet object.

## Declaration

```objectivec
extern void CFSetAddValue(CFMutableSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to modify.
- `value`: A CFType object or a pointer value to add to `theSet` (or the value itself, if it fits into the size of a pointer).

  `value` is retained by `theSet` using the retain callback provided when `theSet` was created. If `value` is not of the type expected by the retain callback, the behavior is undefined. If `value` already exists in the collection, this function returns without doing anything.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetCreateMutable](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.
