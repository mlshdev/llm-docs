> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/objctype](https://developer.apple.com/documentation/foundation/nsvalue/objctype)

# objCType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A C string containing the Objective-C type of the data contained in the value object.

## Declaration

```swift
var objCType: UnsafePointer<CChar> { get }
```

<a id="Discussion"></a>

## Discussion

This property provides the same string produced by the `@encode()` compiler directive.

## See Also

### Working with Raw Values

- [init(bytes:objCType:)](init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [init(\_:withObjCType:)](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue(\_:)](getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.

# objCType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A C string containing the Objective-C type of the data contained in the value object.

## Declaration

```objectivec
@property (readonly) const char * objCType;
```

<a id="Discussion"></a>

## Discussion

This property provides the same string produced by the `@encode()` compiler directive.

## See Also

### Working with Raw Values

- [initWithBytes:objCType:](init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [valueWithBytes:objCType:](valuewithbytes_objctype_.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [value:withObjCType:](init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue:](getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.
