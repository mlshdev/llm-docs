> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctiontype](https://developer.apple.com/documentation/metal/mtlfunctiontype)

# MTLFunctionType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The type of a top-level Metal Shading Language (MSL) function.

## Declaration

```swift
enum MTLFunctionType
```

## Topics

### Function types

- [MTLFunctionType.vertex](mtlfunctiontype/vertex.md): A vertex function you can use in a render pipeline state object.
- [MTLFunctionType.fragment](mtlfunctiontype/fragment.md): A fragment function you can use in a render pipeline state object.
- [MTLFunctionType.kernel](mtlfunctiontype/kernel.md): A kernel you can use in a compute pipeline state object.
- [MTLFunctionType.intersection](mtlfunctiontype/intersection.md): A function you can use in an intersection function table.
- [MTLFunctionType.visible](mtlfunctiontype/visible.md): A function you can use in a visible function table.

### Enumeration Cases

- [MTLFunctionType.mesh](mtlfunctiontype/mesh.md)
- [MTLFunctionType.object](mtlfunctiontype/object.md)

### Initializers

- [init(rawValue:)](mtlfunctiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying shader functions

- [device](mtlfunction/device.md): The device object that created the shader function.
- [label](mtlfunction/label.md): A string that identifies the shader function.
- [functionType](mtlfunction/functiontype.md): The shader function’s type.
- [name](mtlfunction/name.md): The function’s name.
- [options](mtlfunction/options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

# MTLFunctionType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The type of a top-level Metal Shading Language (MSL) function.

## Declaration

```objectivec
enum MTLFunctionType : NSUInteger;
```

## Topics

### Function types

- [MTLFunctionTypeVertex](mtlfunctiontype/vertex.md): A vertex function you can use in a render pipeline state object.
- [MTLFunctionTypeFragment](mtlfunctiontype/fragment.md): A fragment function you can use in a render pipeline state object.
- [MTLFunctionTypeKernel](mtlfunctiontype/kernel.md): A kernel you can use in a compute pipeline state object.
- [MTLFunctionTypeIntersection](mtlfunctiontype/intersection.md): A function you can use in an intersection function table.
- [MTLFunctionTypeVisible](mtlfunctiontype/visible.md): A function you can use in a visible function table.

### Enumeration Cases

- [MTLFunctionTypeMesh](mtlfunctiontype/mesh.md)
- [MTLFunctionTypeObject](mtlfunctiontype/object.md)

## See Also

### Identifying shader functions

- [device](mtlfunction/device.md): The device object that created the shader function.
- [label](mtlfunction/label.md): A string that identifies the shader function.
- [functionType](mtlfunction/functiontype.md): The shader function’s type.
- [name](mtlfunction/name.md): The function’s name.
- [options](mtlfunction/options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
