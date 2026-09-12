> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetremovevalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetremovevalue(_:_:))

# CFSetRemoveValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a value from a CFMutableSet object.

## Declaration

```swift
func CFSetRemoveValue(_ theSet: CFMutableSet!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theSet`: The set to modify.
- `value`: The value to remove from `theSet`.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue(\_:\_:)](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable(\_:\_:\_:)](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues(\_:)](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetReplaceValue(\_:\_:)](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue(\_:\_:)](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.

# CFSetRemoveValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a value from a CFMutableSet object.

## Declaration

```objectivec
extern void CFSetRemoveValue(CFMutableSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to modify.
- `value`: The value to remove from `theSet`.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetReplaceValue](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
- [CFSetSetValue](cfsetsetvalue%28____%29.md): Sets a value in a CFMutableSet object.
