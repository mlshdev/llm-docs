> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcontactslensspecification/diameter](https://developer.apple.com/documentation/healthkit/hkcontactslensspecification/diameter)

# diameter (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Part of the contact’s fit, it measures the diameter of the lens, measured in mm.

## Declaration

```swift
@NSCopying var diameter: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

The property’s range is 9 to 15 mm.

## See Also

### Accessing the specification’s data

- [baseCurve](basecurve.md): Part of the contact’s fit, it measures the curve of the back side of the contact, measured in mm.

# diameter (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Part of the contact’s fit, it measures the diameter of the lens, measured in mm.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * diameter;
```

<a id="Discussion"></a>

## Discussion

The property’s range is 9 to 15 mm.

## See Also

### Accessing the specification’s data

- [baseCurve](basecurve.md): Part of the contact’s fit, it measures the curve of the back side of the contact, measured in mm.
