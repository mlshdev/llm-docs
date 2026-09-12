> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/secondunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/secondunit(with:))

# secondUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring time, using second units with the provided prefix.

## Declaration

```swift
class func secondUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring time based on seconds and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of seconds. Common uses include creating millisecond units, as shown below.

**Swift**

```swift
let ms = HKUnit.secondUnitWithMetricPrefix(.Milli)
```

**Objective-C**

```objc
HKUnit *ms = [HKUnit secondUnitWithMetricPrefix:HKMetricPrefixMilli];
```

## See Also

### Constructing time units

- [second()](second%28%29.md): Returns a HealthKit unit for measuring time in seconds.
- [minute()](minute%28%29.md): Returns a HealthKit unit for measuring time in minutes.
- [hour()](hour%28%29.md): Returns a HealthKit unit for measuring time in hours.
- [day()](day%28%29.md): Returns a HealthKit unit for measuring time in days.

# secondUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring time, using second units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) secondUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring time based on seconds and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of seconds. Common uses include creating millisecond units, as shown below.

**Swift**

```swift
let ms = HKUnit.secondUnitWithMetricPrefix(.Milli)
```

**Objective-C**

```objc
HKUnit *ms = [HKUnit secondUnitWithMetricPrefix:HKMetricPrefixMilli];
```

## See Also

### Constructing time units

- [secondUnit](second%28%29.md): Returns a HealthKit unit for measuring time in seconds.
- [minuteUnit](minute%28%29.md): Returns a HealthKit unit for measuring time in minutes.
- [hourUnit](hour%28%29.md): Returns a HealthKit unit for measuring time in hours.
- [dayUnit](day%28%29.md): Returns a HealthKit unit for measuring time in days.
