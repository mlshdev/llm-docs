> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlanimatedvector3array](https://developer.apple.com/documentation/modelio/mdlanimatedvector3array)

# MDLAnimatedVector3Array (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class MDLAnimatedVector3Array
```

## Topics

### Initializers

- [init(elementCount:)](mdlanimatedvector3array/init%28elementcount_%29.md)

### Instance Properties

- [double3Array](mdlanimatedvector3array/double3array.md)
- [elementCount](mdlanimatedvector3array/elementcount.md)
- [float3Array](mdlanimatedvector3array/float3array.md)

### Instance Methods

- [double3Array(atTime:)](mdlanimatedvector3array/double3array%28attime_%29.md)
- [float3Array(atTime:)](mdlanimatedvector3array/float3array%28attime_%29.md)
- [reset(double3Array:atTimes:)](mdlanimatedvector3array/reset%28double3array_attimes_%29.md)
- [reset(float3Array:atTimes:)](mdlanimatedvector3array/reset%28float3array_attimes_%29.md)
- [set(double3Array:atTime:)](mdlanimatedvector3array/set%28double3array_attime_%29.md)
- [set(float3Array:atTime:)](mdlanimatedvector3array/set%28float3array_attime_%29.md)

## Relationships

### Inherits From

- [MDLAnimatedValue](mdlanimatedvalue.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MDLAnimatedVector3Array (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MDLAnimatedVector3Array : MDLAnimatedValue
```

## Topics

### Instance Properties

- [elementCount](mdlanimatedvector3array/elementcount.md)

### Instance Methods

- [getDouble3Array:maxCount:](mdlanimatedvector3array/getdouble3array_maxcount_.md)
- [getDouble3Array:maxCount:atTime:](mdlanimatedvector3array/getdouble3array_maxcount_attime_.md)
- [getFloat3Array:maxCount:](mdlanimatedvector3array/getfloat3array_maxcount_.md)
- [getFloat3Array:maxCount:atTime:](mdlanimatedvector3array/getfloat3array_maxcount_attime_.md)
- [initWithElementCount:](mdlanimatedvector3array/init%28elementcount_%29.md)
- [resetWithDouble3Array:count:atTimes:count:](mdlanimatedvector3array/resetwithdouble3array_count_attimes_count_.md)
- [resetWithFloat3Array:count:atTimes:count:](mdlanimatedvector3array/resetwithfloat3array_count_attimes_count_.md)
- [setDouble3Array:count:atTime:](mdlanimatedvector3array/setdouble3array_count_attime_.md)
- [setFloat3Array:count:atTime:](mdlanimatedvector3array/setfloat3array_count_attime_.md)

## Relationships

### Inherits From

- [MDLAnimatedValue](mdlanimatedvalue.md)
