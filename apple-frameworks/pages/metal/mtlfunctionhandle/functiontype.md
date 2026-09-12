> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionhandle/functiontype](https://developer.apple.com/documentation/metal/mtlfunctionhandle/functiontype)

# functionType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The shader function’s type.

## Declaration

```swift
var functionType: MTLFunctionType { get }
```

<a id="discussion"></a>

## Discussion

A function’s type determines what kind of pipeline state objects you can create from it.

## See Also

### Querying handle properties

- [device](device.md): The device object that created the shader function.
- [name](name.md): The function’s name.

# functionType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The shader function’s type.

## Declaration

```objectivec
@property (readonly) MTLFunctionType functionType;
```

<a id="discussion"></a>

## Discussion

A function’s type determines what kind of pipeline state objects you can create from it.

## See Also

### Querying handle properties

- [device](device.md): The device object that created the shader function.
- [name](name.md): The function’s name.
