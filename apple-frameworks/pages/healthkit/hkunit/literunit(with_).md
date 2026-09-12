> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/literunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/literunit(with:))

# literUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring volume, using liter units with the provided prefix.

## Declaration

```swift
class func literUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring volume based on liters and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of liters, typically milliliter units, as shown below.

**Swift**

```swift
let ml = HKUnit.literUnitWithMetricPrefix(.Milli)
let ml = HKUnit.literUnitWithMetricPrefix(.Milli)
```

**Objective-C**

```objc
HKUnit *ml = [HKUnit literUnitWithMetricPrefix:HKMetricPrefixMilli];
```

## See Also

### Constructing volume units

- [liter()](liter%28%29.md): Returns a HealthKit unit for measuring volume in liters.
- [fluidOunceUS()](fluidounceus%28%29.md): Returns a HealthKit unit for measuring volume in US fluid ounces.
- [fluidOunceImperial()](fluidounceimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial fluid ounces.
- [cupUS()](cupus%28%29.md): Returns a HealthKit unit for measuring volume in US cups.
- [cupImperial()](cupimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial cups.
- [pintUS()](pintus%28%29.md): Returns a HealthKit unit for measuring volume in US pints.
- [pintImperial()](pintimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial pints.

# literUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring volume, using liter units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) literUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring volume based on liters and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of liters, typically milliliter units, as shown below.

**Swift**

```swift
let ml = HKUnit.literUnitWithMetricPrefix(.Milli)
let ml = HKUnit.literUnitWithMetricPrefix(.Milli)
```

**Objective-C**

```objc
HKUnit *ml = [HKUnit literUnitWithMetricPrefix:HKMetricPrefixMilli];
```

## See Also

### Constructing volume units

- [literUnit](liter%28%29.md): Returns a HealthKit unit for measuring volume in liters.
- [fluidOunceUSUnit](fluidounceus%28%29.md): Returns a HealthKit unit for measuring volume in US fluid ounces.
- [fluidOunceImperialUnit](fluidounceimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial fluid ounces.
- [cupUSUnit](cupus%28%29.md): Returns a HealthKit unit for measuring volume in US cups.
- [cupImperialUnit](cupimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial cups.
- [pintUSUnit](pintus%28%29.md): Returns a HealthKit unit for measuring volume in US pints.
- [pintImperialUnit](pintimperial%28%29.md): Returns a HealthKit unit for measuring volume in imperial pints.
