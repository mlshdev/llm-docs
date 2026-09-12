> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionconstantvalues](https://developer.apple.com/documentation/metal/mtlfunctionconstantvalues)

# MTLFunctionConstantValues (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A set of constant values that specialize a graphics or compute GPU function.

## Declaration

```swift
class MTLFunctionConstantValues
```

<a id="overview"></a>

## Overview

An [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance sets constant values for function constants. You declare function constants with the `[[ function_constant(index) ]]` attribute in MSL (Metal Shading Language) source code. See the [Metal Shading Language specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) for more information.

With an [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance, you can set each constant value individually with an index or a name, or set multiple constant values with an index range.

You can apply a single [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance to multiple [MTLFunction](mtlfunction.md) instances of any kind, such as a vertex function and a fragment function. When you create a specialized function, subsequent changes to its constant values have no effect. However, you can reset, add, or modify a constant value in your [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance and reuse it to create another [MTLFunction](mtlfunction.md) instance.

> **Tip**

>  See [Using function specialization to build pipeline variants](using-function-specialization-to-build-pipeline-variants.md) for a sample code project that applies function constant values.

## Topics

### Setting constant values

- [setConstantValue(\_:type:index:)](mtlfunctionconstantvalues/setconstantvalue%28__type_index_%29.md): Sets a value for a function constant at a specific index.
- [setConstantValue(\_:type:withName:)](mtlfunctionconstantvalues/setconstantvalue%28__type_withname_%29.md): Sets a value for a function constant with a specific name.
- [setConstantValues(\_:type:range:)](mtlfunctionconstantvalues/setconstantvalues%28__type_range_%29.md): Sets values for a group of function constants within a specific index range.

### Resetting constant values

- [reset()](mtlfunctionconstantvalues/reset%28%29.md): Deletes all previously set constant values.

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

### Compile-time variant functions

- [MTLFunctionConstant](mtlfunctionconstant.md): A constant that specializes the behavior of a shader.

# MTLFunctionConstantValues (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A set of constant values that specialize a graphics or compute GPU function.

## Declaration

```objectivec
@interface MTLFunctionConstantValues : NSObject
```

<a id="overview"></a>

## Overview

An [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance sets constant values for function constants. You declare function constants with the `[[ function_constant(index) ]]` attribute in MSL (Metal Shading Language) source code. See the [Metal Shading Language specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) for more information.

With an [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance, you can set each constant value individually with an index or a name, or set multiple constant values with an index range.

You can apply a single [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance to multiple [MTLFunction](mtlfunction.md) instances of any kind, such as a vertex function and a fragment function. When you create a specialized function, subsequent changes to its constant values have no effect. However, you can reset, add, or modify a constant value in your [MTLFunctionConstantValues](mtlfunctionconstantvalues.md) instance and reuse it to create another [MTLFunction](mtlfunction.md) instance.

> **Tip**

>  See [Using function specialization to build pipeline variants](using-function-specialization-to-build-pipeline-variants.md) for a sample code project that applies function constant values.

## Topics

### Setting constant values

- [setConstantValue:type:atIndex:](mtlfunctionconstantvalues/setconstantvalue%28__type_index_%29.md): Sets a value for a function constant at a specific index.
- [setConstantValue:type:withName:](mtlfunctionconstantvalues/setconstantvalue%28__type_withname_%29.md): Sets a value for a function constant with a specific name.
- [setConstantValues:type:withRange:](mtlfunctionconstantvalues/setconstantvalues_type_withrange_.md): Sets values for a group of function constants within a specific index range.

### Resetting constant values

- [reset](mtlfunctionconstantvalues/reset%28%29.md): Deletes all previously set constant values.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Compile-time variant functions

- [MTLFunctionConstant](mtlfunctionconstant.md): A constant that specializes the behavior of a shader.
