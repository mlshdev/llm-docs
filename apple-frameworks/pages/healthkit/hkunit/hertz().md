> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/hertz()](https://developer.apple.com/documentation/healthkit/hkunit/hertz())

# hertz() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring frequency in hertz.

## Declaration

```swift
class func hertz() -> Self
```

<a id="Discussion"></a>

## Discussion

Hertz represent cycles per second.

## See Also

### Constructing frequency units

- [hertzUnit(with:)](hertzunit%28with_%29.md): Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.

# hertzUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring frequency in hertz.

## Declaration

```objectivec
+ (instancetype) hertzUnit;
```

<a id="Discussion"></a>

## Discussion

Hertz represent cycles per second.

## See Also

### Constructing frequency units

- [hertzUnitWithMetricPrefix:](hertzunit%28with_%29.md): Returns a HealthKit unit for measuring frequency in hertz with the provided prefix.
