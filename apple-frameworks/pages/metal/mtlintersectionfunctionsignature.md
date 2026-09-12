> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctionsignature](https://developer.apple.com/documentation/metal/mtlintersectionfunctionsignature)

# MTLIntersectionFunctionSignature (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Constants for specifying different types of custom intersection functions.

## Declaration

```swift
struct MTLIntersectionFunctionSignature
```

<a id="overview"></a>

## Overview

For more information on declaring intersection functions in MSL, see [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## Topics

### Initializing the intersection function signature

- [init(rawValue:)](mtlintersectionfunctionsignature/init%28rawvalue_%29.md): Returns a new signature description from a specified raw value.

### Specifying the intersection function signature

- [instancing](mtlintersectionfunctionsignature/instancing.md): A flag indicating that function signature uses instancing.
- [triangleData](mtlintersectionfunctionsignature/triangledata.md): A flag indicating that function signature uses triangle data.
- [worldSpaceData](mtlintersectionfunctionsignature/worldspacedata.md): A flag indicating that function signature uses world space data.

### Type Properties

- [curveData](mtlintersectionfunctionsignature/curvedata.md)
- [extendedLimits](mtlintersectionfunctionsignature/extendedlimits.md)
- [instanceMotion](mtlintersectionfunctionsignature/instancemotion.md)
- [intersectionFunctionBuffer](mtlintersectionfunctionsignature/intersectionfunctionbuffer.md)
- [maxLevels](mtlintersectionfunctionsignature/maxlevels.md)
- [primitiveMotion](mtlintersectionfunctionsignature/primitivemotion.md)
- [userData](mtlintersectionfunctionsignature/userdata.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionBufferArguments](mtlintersectionfunctionbufferarguments.md)

# MTLIntersectionFunctionSignature (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Constants for specifying different types of custom intersection functions.

## Declaration

```objectivec
enum MTLIntersectionFunctionSignature : NSUInteger;
```

<a id="overview"></a>

## Overview

For more information on declaring intersection functions in MSL, see [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## Topics

### Specifying the intersection function signature

- [MTLIntersectionFunctionSignatureNone](mtlintersectionfunctionsignature/mtlintersectionfunctionsignaturenone.md): A constant indicating that the function uses the default signature.
- [MTLIntersectionFunctionSignatureInstancing](mtlintersectionfunctionsignature/instancing.md): A flag indicating that function signature uses instancing.
- [MTLIntersectionFunctionSignatureTriangleData](mtlintersectionfunctionsignature/triangledata.md): A flag indicating that function signature uses triangle data.
- [MTLIntersectionFunctionSignatureWorldSpaceData](mtlintersectionfunctionsignature/worldspacedata.md): A flag indicating that function signature uses world space data.

### Enumeration Cases

- [MTLIntersectionFunctionSignatureCurveData](mtlintersectionfunctionsignature/curvedata.md)
- [MTLIntersectionFunctionSignatureExtendedLimits](mtlintersectionfunctionsignature/extendedlimits.md)
- [MTLIntersectionFunctionSignatureInstanceMotion](mtlintersectionfunctionsignature/instancemotion.md)
- [MTLIntersectionFunctionSignatureIntersectionFunctionBuffer](mtlintersectionfunctionsignature/intersectionfunctionbuffer.md)
- [MTLIntersectionFunctionSignatureMaxLevels](mtlintersectionfunctionsignature/maxlevels.md)
- [MTLIntersectionFunctionSignaturePrimitiveMotion](mtlintersectionfunctionsignature/primitivemotion.md)
- [MTLIntersectionFunctionSignatureUserData](mtlintersectionfunctionsignature/userdata.md)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionBufferArguments](mtlintersectionfunctionbufferarguments.md)
