> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionconstant/required](https://developer.apple.com/documentation/metal/mtlfunctionconstant/required)

# required (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the function constant needs to be provided to specialize the function.

## Declaration

```swift
var required: Bool { get }
```

<a id="discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if a constant value needs to be provided for the function constant. A function constant is optional only if it is referenced in a call to the built-in `is_function_constant_defined(name)` function.

Refer to the [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364) for more information.

## See Also

### Reading the function constant’s properties

- [name](name.md): The name of the function constant.
- [type](type.md): The data type of the function constant.
- [index](index.md): The index of the function constant.

# required (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the function constant needs to be provided to specialize the function.

## Declaration

```objectivec
@property (readonly) BOOL required;
```

<a id="discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if a constant value needs to be provided for the function constant. A function constant is optional only if it is referenced in a call to the built-in `is_function_constant_defined(name)` function.

Refer to the [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364) for more information.

## See Also

### Reading the function constant’s properties

- [name](name.md): The name of the function constant.
- [type](type.md): The data type of the function constant.
- [index](index.md): The index of the function constant.
