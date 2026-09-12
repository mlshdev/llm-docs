> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/options](https://developer.apple.com/documentation/metal/mtlfunction/options)

# options (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The options that Metal used to compile this function.

## Declaration

```swift
var options: MTLFunctionOptions { get }
```

## See Also

### Identifying shader functions

- [device](device.md): The device object that created the shader function.
- [label](label.md): A string that identifies the shader function.
- [functionType](functiontype.md): The shader function’s type.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

# options (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The options that Metal used to compile this function.

## Declaration

```objectivec
@property (readonly) MTLFunctionOptions options;
```

## See Also

### Identifying shader functions

- [device](device.md): The device object that created the shader function.
- [label](label.md): A string that identifies the shader function.
- [functionType](functiontype.md): The shader function’s type.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
