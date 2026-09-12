> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/device](https://developer.apple.com/documentation/metal/mtlfunction/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device object that created the shader function.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

You can only use this function object with this [MTLDevice](../mtldevice.md).

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Identifying shader functions

- [label](label.md): A string that identifies the shader function.
- [functionType](functiontype.md): The shader function’s type.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device object that created the shader function.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

You can only use this function object with this [MTLDevice](../mtldevice.md).

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Identifying shader functions

- [label](label.md): A string that identifies the shader function.
- [functionType](functiontype.md): The shader function’s type.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
