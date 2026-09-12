> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllinkedfunctions](https://developer.apple.com/documentation/metal/mtllinkedfunctions)

# MTLLinkedFunctions (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A set of related functions that Metal links to when necessary to create the function instance.

## Declaration

```swift
class MTLLinkedFunctions
```

<a id="overview"></a>

## Overview

When you create a Metal function instance using an [MTLFunctionDescriptor](mtlfunctiondescriptor.md), you specify additional functions that Metal needs to link to when it compiles and links the underlying shader code. Most often, you need to do this if your shader takes a visible function table as one or more of its arguments. For Metal to create the [MTLFunction](mtlfunction.md) instance, it needs a complete list of functions that your shader can call so that it can resolve any dependencies and generate the correct code to run on the GPU.

## Topics

### Specifying related functions

- [functions](mtllinkedfunctions/functions.md): An array of function objects to link to the new function.
- [binaryFunctions](mtllinkedfunctions/binaryfunctions.md): An array of function objects already compiled to a binary representation to link.
- [groups](mtllinkedfunctions/groups.md): An optional list of groups specifying which functions your shader can call at each call site.
- [privateFunctions](mtllinkedfunctions/privatefunctions.md): An array of function objects to link to the new function, without exporting the functions publicly.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Specifying the function configuration

- [name](mtlfunctiondescriptor/name.md): The name of the function to fetch from the library.
- [specializedName](mtlfunctiondescriptor/specializedname.md): A new name for the created function object.
- [constantValues](mtlfunctiondescriptor/constantvalues.md): The set of constant values assigned to the function constants.
- [options](mtlfunctiondescriptor/options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](mtlfunctiondescriptor/binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

# MTLLinkedFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A set of related functions that Metal links to when necessary to create the function instance.

## Declaration

```objectivec
@interface MTLLinkedFunctions : NSObject
```

<a id="overview"></a>

## Overview

When you create a Metal function instance using an [MTLFunctionDescriptor](mtlfunctiondescriptor.md), you specify additional functions that Metal needs to link to when it compiles and links the underlying shader code. Most often, you need to do this if your shader takes a visible function table as one or more of its arguments. For Metal to create the [MTLFunction](mtlfunction.md) instance, it needs a complete list of functions that your shader can call so that it can resolve any dependencies and generate the correct code to run on the GPU.

## Topics

### Creating a linked functions instance

- [linkedFunctions](mtllinkedfunctions/linkedfunctions.md): Creates an empty linked functions object.

### Specifying related functions

- [functions](mtllinkedfunctions/functions.md): An array of function objects to link to the new function.
- [binaryFunctions](mtllinkedfunctions/binaryfunctions.md): An array of function objects already compiled to a binary representation to link.
- [groups](mtllinkedfunctions/groups.md): An optional list of groups specifying which functions your shader can call at each call site.
- [privateFunctions](mtllinkedfunctions/privatefunctions.md): An array of function objects to link to the new function, without exporting the functions publicly.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Specifying the function configuration

- [name](mtlfunctiondescriptor/name.md): The name of the function to fetch from the library.
- [specializedName](mtlfunctiondescriptor/specializedname.md): A new name for the created function object.
- [constantValues](mtlfunctiondescriptor/constantvalues.md): The set of constant values assigned to the function constants.
- [options](mtlfunctiondescriptor/options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](mtlfunctiondescriptor/binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
