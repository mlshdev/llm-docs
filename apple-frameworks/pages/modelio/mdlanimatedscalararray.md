> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlanimatedscalararray](https://developer.apple.com/documentation/modelio/mdlanimatedscalararray)

# MDLAnimatedScalarArray (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class MDLAnimatedScalarArray
```

## Topics

### Initializers

- [init(elementCount:)](mdlanimatedscalararray/init%28elementcount_%29.md)

### Instance Properties

- [doubleArray](mdlanimatedscalararray/doublearray.md)
- [elementCount](mdlanimatedscalararray/elementcount.md)
- [floatArray](mdlanimatedscalararray/floatarray.md)

### Instance Methods

- [doubleArray(atTime:)](mdlanimatedscalararray/doublearray%28attime_%29.md)
- [floatArray(atTime:)](mdlanimatedscalararray/floatarray%28attime_%29.md)
- [reset(doubleArray:atTimes:)](mdlanimatedscalararray/reset%28doublearray_attimes_%29.md)
- [reset(floatArray:atTimes:)](mdlanimatedscalararray/reset%28floatarray_attimes_%29.md)
- [set(doubleArray:atTime:)](mdlanimatedscalararray/set%28doublearray_attime_%29.md)
- [set(floatArray:atTime:)](mdlanimatedscalararray/set%28floatarray_attime_%29.md)

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

# MDLAnimatedScalarArray (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MDLAnimatedScalarArray : MDLAnimatedValue
```

## Topics

### Instance Properties

- [elementCount](mdlanimatedscalararray/elementcount.md)

### Instance Methods

- [getDoubleArray:maxCount:](mdlanimatedscalararray/getdoublearray_maxcount_.md)
- [getDoubleArray:maxCount:atTime:](mdlanimatedscalararray/getdoublearray_maxcount_attime_.md)
- [getFloatArray:maxCount:](mdlanimatedscalararray/getfloatarray_maxcount_.md)
- [getFloatArray:maxCount:atTime:](mdlanimatedscalararray/getfloatarray_maxcount_attime_.md)
- [initWithElementCount:](mdlanimatedscalararray/init%28elementcount_%29.md)
- [resetWithDoubleArray:count:atTimes:count:](mdlanimatedscalararray/resetwithdoublearray_count_attimes_count_.md)
- [resetWithFloatArray:count:atTimes:count:](mdlanimatedscalararray/resetwithfloatarray_count_attimes_count_.md)
- [setDoubleArray:count:atTime:](mdlanimatedscalararray/setdoublearray_count_attime_.md)
- [setFloatArray:count:atTime:](mdlanimatedscalararray/setfloatarray_count_attime_.md)

## Relationships

### Inherits From

- [MDLAnimatedValue](mdlanimatedvalue.md)
