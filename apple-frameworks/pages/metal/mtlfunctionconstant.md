> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionconstant](https://developer.apple.com/documentation/metal/mtlfunctionconstant)

# MTLFunctionConstant (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A constant that specializes the behavior of a shader.

## Declaration

```swift
class MTLFunctionConstant
```

<a id="overview"></a>

## Overview

Don’t create an [MTLFunctionConstant](mtlfunctionconstant.md) instance directly. Instead, the list of function constants for a function by querying the `functionConstants` property of an [MTLFunction](mtlfunction.md) instance.

An [MTLFunctionConstant](mtlfunctionconstant.md) instance should only be obtained from a nonspecialized function created with the [makeFunction(name:)](mtllibrary/makefunction%28name_%29.md) method. You only need an [MTLFunctionConstant](mtlfunctionconstant.md) instance if you don’t have sufficient information to create an [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance used to create a specialized function with the [makeFunction(name:constantValues:)](mtllibrary/makefunction%28name_constantvalues_%29.md) or [makeFunction(name:constantValues:completionHandler:)](mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md) method.

## Topics

### Reading the function constant’s properties

- [name](mtlfunctionconstant/name.md): The name of the function constant.
- [type](mtlfunctionconstant/type.md): The data type of the function constant.
- [index](mtlfunctionconstant/index.md): The index of the function constant.
- [required](mtlfunctionconstant/required.md): A Boolean value indicating whether the function constant needs to be provided to specialize the function.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Compile-time variant functions

- [MTLFunctionConstantValues](mtlfunctionconstantvalues.md): A set of constant values that specialize a graphics or compute GPU function.

# MTLFunctionConstant (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A constant that specializes the behavior of a shader.

## Declaration

```objectivec
@interface MTLFunctionConstant : NSObject
```

<a id="overview"></a>

## Overview

Don’t create an [MTLFunctionConstant](mtlfunctionconstant.md) instance directly. Instead, the list of function constants for a function by querying the `functionConstants` property of an [MTLFunction](mtlfunction.md) instance.

An [MTLFunctionConstant](mtlfunctionconstant.md) instance should only be obtained from a nonspecialized function created with the [newFunctionWithName:](mtllibrary/makefunction%28name_%29.md) method. You only need an [MTLFunctionConstant](mtlfunctionconstant.md) instance if you don’t have sufficient information to create an [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance used to create a specialized function with the [newFunctionWithName:constantValues:error:](mtllibrary/makefunction%28name_constantvalues_%29.md) or [newFunctionWithName:constantValues:completionHandler:](mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md) method.

## Topics

### Reading the function constant’s properties

- [name](mtlfunctionconstant/name.md): The name of the function constant.
- [type](mtlfunctionconstant/type.md): The data type of the function constant.
- [index](mtlfunctionconstant/index.md): The index of the function constant.
- [required](mtlfunctionconstant/required.md): A Boolean value indicating whether the function constant needs to be provided to specialize the function.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Compile-time variant functions

- [MTLFunctionConstantValues](mtlfunctionconstantvalues.md): A set of constant values that specialize a graphics or compute GPU function.
