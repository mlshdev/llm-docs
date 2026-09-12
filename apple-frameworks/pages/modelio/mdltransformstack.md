> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransformstack](https://developer.apple.com/documentation/modelio/mdltransformstack)

# MDLTransformStack (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class MDLTransformStack
```

## Topics

### Initializers

- [init()](mdltransformstack/init%28%29.md)

### Instance Properties

- [keyTimes](mdltransformstack/keytimes.md)
- [transformOps](mdltransformstack/transformops.md)

### Instance Methods

- [addMatrixOp(\_:inverse:)](mdltransformstack/addmatrixop%28__inverse_%29.md)
- [addOrientOp(\_:inverse:)](mdltransformstack/addorientop%28__inverse_%29.md)
- [addRotateOp(\_:order:inverse:)](mdltransformstack/addrotateop%28__order_inverse_%29.md)
- [addRotateXOp(\_:inverse:)](mdltransformstack/addrotatexop%28__inverse_%29.md)
- [addRotateYOp(\_:inverse:)](mdltransformstack/addrotateyop%28__inverse_%29.md)
- [addRotateZOp(\_:inverse:)](mdltransformstack/addrotatezop%28__inverse_%29.md)
- [addScaleOp(\_:inverse:)](mdltransformstack/addscaleop%28__inverse_%29.md)
- [addTranslateOp(\_:inverse:)](mdltransformstack/addtranslateop%28__inverse_%29.md)
- [animatedValue(withName:)](mdltransformstack/animatedvalue%28withname_%29.md)
- [count()](mdltransformstack/count%28%29.md)
- [double4x4(atTime:)](mdltransformstack/double4x4%28attime_%29.md)
- [float4x4(atTime:)](mdltransformstack/float4x4%28attime_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLComponent](mdlcomponent.md)
- [MDLTransformComponent](mdltransformcomponent.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MDLTransformStack (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MDLTransformStack : NSObject
```

## Topics

### Instance Properties

- [keyTimes](mdltransformstack/keytimes.md)
- [transformOps](mdltransformstack/transformops.md)

### Instance Methods

- [addMatrixOp:inverse:](mdltransformstack/addmatrixop%28__inverse_%29.md)
- [addOrientOp:inverse:](mdltransformstack/addorientop%28__inverse_%29.md)
- [addRotateOp:order:inverse:](mdltransformstack/addrotateop%28__order_inverse_%29.md)
- [addRotateXOp:inverse:](mdltransformstack/addrotatexop%28__inverse_%29.md)
- [addRotateYOp:inverse:](mdltransformstack/addrotateyop%28__inverse_%29.md)
- [addRotateZOp:inverse:](mdltransformstack/addrotatezop%28__inverse_%29.md)
- [addScaleOp:inverse:](mdltransformstack/addscaleop%28__inverse_%29.md)
- [addTranslateOp:inverse:](mdltransformstack/addtranslateop%28__inverse_%29.md)
- [animatedValueWithName:](mdltransformstack/animatedvalue%28withname_%29.md)
- [count](mdltransformstack/count%28%29.md)
- [double4x4AtTime:](mdltransformstack/double4x4%28attime_%29.md)
- [float4x4AtTime:](mdltransformstack/float4x4%28attime_%29.md)
- [init](mdltransformstack/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLTransformComponent](mdltransformcomponent.md)
- [NSCopying](../foundation/nscopying.md)
