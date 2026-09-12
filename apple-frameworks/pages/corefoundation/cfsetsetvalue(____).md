> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetsetvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsetsetvalue(_:_:))

# CFSetSetValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a value in a CFMutableSet object.

## Declaration

```swift
func CFSetSetValue(_ theSet: CFMutableSet!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theSet`: The set to modify.
- `value`: The value to be set in `theSet`. If this value already exists in `theSet`, it is replaced. You may pass the value itself instead of a pointer to it if the value is pointer-size or less. If `theSet` is fixed-size and setting the value would increase its size beyond its capacity, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theSet`, the value that is replaced by `value` may not have the same pointer equality.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue(\_:\_:)](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable(\_:\_:\_:)](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy(\_:\_:\_:)](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues(\_:)](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue(\_:\_:)](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue(\_:\_:)](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.

# CFSetSetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a value in a CFMutableSet object.

## Declaration

```objectivec
extern void CFSetSetValue(CFMutableSetRef theSet, const void *value);
```

## Parameters

- `theSet`: The set to modify.
- `value`: The value to be set in `theSet`. If this value already exists in `theSet`, it is replaced. You may pass the value itself instead of a pointer to it if the value is pointer-size or less. If `theSet` is fixed-size and setting the value would increase its size beyond its capacity, the behavior is undefined.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theSet`, the value that is replaced by `value` may not have the same pointer equality.

## See Also

### CFMutableSet Miscellaneous Functions

- [CFSetAddValue](cfsetaddvalue%28____%29.md): Adds a value to a CFMutableSet object.
- [CFSetCreateMutable](cfsetcreatemutable%28______%29.md): Creates an empty CFMutableSet object.
- [CFSetCreateMutableCopy](cfsetcreatemutablecopy%28______%29.md): Creates a new mutable set with the values from another set.
- [CFSetRemoveAllValues](cfsetremoveallvalues%28__%29.md): Removes all values from a CFMutableSet object.
- [CFSetRemoveValue](cfsetremovevalue%28____%29.md): Removes a value from a CFMutableSet object.
- [CFSetReplaceValue](cfsetreplacevalue%28____%29.md): Replaces a value in a CFMutableSet object.
