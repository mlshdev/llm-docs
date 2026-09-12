> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/functiontype](https://developer.apple.com/documentation/metal/mtlfunction/functiontype)

# functionType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The shader function’s type.

## Declaration

```swift
var functionType: MTLFunctionType { get }
```

<a id="discussion"></a>

## Discussion

A function’s type determines what kind of pipeline state objects you can create from it and whether you can use it as a callable function in a function table.

## See Also

### Identifying shader functions

- [device](device.md): The device object that created the shader function.
- [label](label.md): A string that identifies the shader function.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

# functionType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The shader function’s type.

## Declaration

```objectivec
@property (readonly) MTLFunctionType functionType;
```

<a id="discussion"></a>

## Discussion

A function’s type determines what kind of pipeline state objects you can create from it and whether you can use it as a callable function in a function table.

## See Also

### Identifying shader functions

- [device](device.md): The device object that created the shader function.
- [label](label.md): A string that identifies the shader function.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
