> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctiondescriptor](https://developer.apple.com/documentation/metal/mtlfunctiondescriptor)

# MTLFunctionDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A description of a function object to create.

## Declaration

```swift
class MTLFunctionDescriptor
```

## Mentioned In

- [Compiling binary archives from a custom configuration script](compiling-binary-archives-from-a-custom-configuration-script.md)

## Topics

### Specifying the function configuration

- [name](mtlfunctiondescriptor/name.md): The name of the function to fetch from the library.
- [specializedName](mtlfunctiondescriptor/specializedname.md): A new name for the created function object.
- [constantValues](mtlfunctiondescriptor/constantvalues.md): The set of constant values assigned to the function constants.
- [options](mtlfunctiondescriptor/options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](mtlfunctiondescriptor/binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [makeFunction(descriptor:completionHandler:)](mtllibrary/makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [makeFunction(descriptor:)](mtllibrary/makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

### Shader functions

- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

# MTLFunctionDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A description of a function object to create.

## Declaration

```objectivec
@interface MTLFunctionDescriptor : NSObject
```

## Mentioned In

- [Compiling binary archives from a custom configuration script](compiling-binary-archives-from-a-custom-configuration-script.md)

## Topics

### Creating a function descriptor

- [functionDescriptor](mtlfunctiondescriptor/functiondescriptor.md): Creates a default function descriptor.

### Specifying the function configuration

- [name](mtlfunctiondescriptor/name.md): The name of the function to fetch from the library.
- [specializedName](mtlfunctiondescriptor/specializedname.md): A new name for the created function object.
- [constantValues](mtlfunctiondescriptor/constantvalues.md): The set of constant values assigned to the function constants.
- [options](mtlfunctiondescriptor/options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](mtlfunctiondescriptor/binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Related Documentation

- [newFunctionWithDescriptor:completionHandler:](mtllibrary/makefunction%28descriptor_completionhandler_%29.md): Asynchronously creates an object representing a shader function, using the specified descriptor.
- [newFunctionWithDescriptor:error:](mtllibrary/makefunction%28descriptor_%29.md): Synchronously creates an object representing a shader function, using the specified descriptor.

### Shader functions

- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
