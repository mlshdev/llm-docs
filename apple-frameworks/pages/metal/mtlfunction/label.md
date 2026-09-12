> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/label](https://developer.apple.com/documentation/metal/mtlfunction/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A string that identifies the shader function.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying shader functions

- [device](device.md): The device object that created the shader function.
- [functionType](functiontype.md): The shader function’s type.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A string that identifies the shader function.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying shader functions

- [device](device.md): The device object that created the shader function.
- [functionType](functiontype.md): The shader function’s type.
- [name](name.md): The function’s name.
- [MTLFunctionType](../mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
