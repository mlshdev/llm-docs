> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/siemenunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/siemenunit(with:))

# siemenUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring electrical conductance, using siemen units with the provided prefix.

## Declaration

```swift
class func siemenUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring electrical conductance based on siemens and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of siemens. HealthKit often records electrodermal activity in microsiemens, as shown below.

**Swift**

```swift
let mcS = HKUnit.siemenUnitWithMetricPrefix(.Micro)
```

**Objective-C**

```objc
HKUnit *mcS = [HKUnit siemenUnitWithMetricPrefix:HKMetricPrefixMicro];
```

## See Also

### Constructing electrical conductance units

- [siemen()](siemen%28%29.md): Returns a HealthKit unit for measuring electrical conductance in siemens.

# siemenUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring electrical conductance, using siemen units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) siemenUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring electrical conductance based on siemens and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of siemens. HealthKit often records electrodermal activity in microsiemens, as shown below.

**Swift**

```swift
let mcS = HKUnit.siemenUnitWithMetricPrefix(.Micro)
```

**Objective-C**

```objc
HKUnit *mcS = [HKUnit siemenUnitWithMetricPrefix:HKMetricPrefixMicro];
```

## See Also

### Constructing electrical conductance units

- [siemenUnit](siemen%28%29.md): Returns a HealthKit unit for measuring electrical conductance in siemens.
