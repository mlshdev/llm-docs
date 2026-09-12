> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridevehicle/registrationplate](https://developer.apple.com/documentation/intents/inridevehicle/registrationplate)

# registrationPlate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The text on the license plate or registration plate of the vehicle.

## Declaration

```swift
var registrationPlate: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Examples might include “1JBO007” or “SL68 APL” depending on the format used in the specific country or region where the driver registered the car.

## See Also

### Specifying the Vehicle Description

- [manufacturer](manufacturer.md): The name of the vehicle’s manufacturer.
- [model](model.md): The model of the vehicle.

# registrationPlate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The text on the license plate or registration plate of the vehicle.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * registrationPlate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * registrationPlate;
```

<a id="Discussion"></a>

## Discussion

Examples might include “1JBO007” or “SL68 APL” depending on the format used in the specific country or region where the driver registered the car.

## See Also

### Specifying the Vehicle Description

- [manufacturer](manufacturer.md): The name of the vehicle’s manufacturer.
- [model](model.md): The model of the vehicle.
