> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantity/init(unit:doublevalue:)](https://developer.apple.com/documentation/healthkit/hkquantity/init(unit:doublevalue:))

# init(unit:doubleValue:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a new quantity object.

## Declaration

```swift
convenience init(unit: HKUnit, doubleValue value: Double)
```

## Parameters

- `unit`: The units for the given value. This defines the set of compatible units. For example, if you create a quantity with a meter unit, it is compatible with any other length units.
- `value`: The value of this quantity, measured using the unit parameter.

<a id="return-value"></a>

## Return Value

A newly instantiated quantity instance.

<a id="Discussion"></a>

## Discussion

HealthKit uses quantity objects to store data for quantity samples. For more information on using quantity objects, see [HKQuantitySample](../hkquantitysample.md).

# quantityWithUnit:doubleValue: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a new quantity object.

## Declaration

```objectivec
+ (instancetype) quantityWithUnit:(HKUnit *) unit doubleValue:(double) value;
```

## Parameters

- `unit`: The units for the given value. This defines the set of compatible units. For example, if you create a quantity with a meter unit, it is compatible with any other length units.
- `value`: The value of this quantity, measured using the unit parameter.

<a id="return-value"></a>

## Return Value

A newly instantiated quantity instance.

<a id="Discussion"></a>

## Discussion

HealthKit uses quantity objects to store data for quantity samples. For more information on using quantity objects, see [HKQuantitySample](../hkquantitysample.md).
