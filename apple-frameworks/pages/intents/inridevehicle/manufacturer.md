> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridevehicle/manufacturer

# manufacturer (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The name of the vehicle’s manufacturer.

## Declaration

```swift
var manufacturer: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Examples might include “Honda” or “Ford”.

## See Also

### Specifying the Vehicle Description

- [registrationPlate](registrationplate.md): The text on the license plate or registration plate of the vehicle.
- [model](model.md): The model of the vehicle.

# manufacturer (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The name of the vehicle’s manufacturer.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * manufacturer;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * manufacturer;
```

<a id="Discussion"></a>

## Discussion

Examples might include “Honda” or “Ford”.

## See Also

### Specifying the Vehicle Description

- [registrationPlate](registrationplate.md): The text on the license plate or registration plate of the vehicle.
- [model](model.md): The model of the vehicle.
