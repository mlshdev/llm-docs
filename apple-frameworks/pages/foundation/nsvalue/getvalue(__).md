> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/getvalue(_:)](https://developer.apple.com/documentation/foundation/nsvalue/getvalue(_:))

# getValue(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Copies the value into the specified buffer.

## Declaration

```swift
func getValue(_ value: UnsafeMutableRawPointer)
```

## Parameters

- `value`: A buffer into which to copy the value. The buffer must be large enough to hold the value.

## See Also

### Working with Raw Values

- [init(bytes:objCType:)](init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [init(\_:withObjCType:)](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [objCType](objctype.md): A C string containing the Objective-C type of the data contained in the value object.

# getValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Copies the value into the specified buffer.

## Declaration

```objectivec
- (void) getValue:(void *) value;
```

## Parameters

- `value`: A buffer into which to copy the value. The buffer must be large enough to hold the value.

## See Also

### Working with Raw Values

- [initWithBytes:objCType:](init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [valueWithBytes:objCType:](valuewithbytes_objctype_.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [value:withObjCType:](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [objCType](objctype.md): A C string containing the Objective-C type of the data contained in the value object.
