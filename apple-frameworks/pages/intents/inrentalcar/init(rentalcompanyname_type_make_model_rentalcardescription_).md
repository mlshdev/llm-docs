> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrentalcar/init(rentalcompanyname:type:make:model:rentalcardescription:)](https://developer.apple.com/documentation/intents/inrentalcar/init(rentalcompanyname:type:make:model:rentalcardescription:))

# init(rentalCompanyName:type:make:model:rentalCarDescription:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new rental car object with the specified contents and attributes.

## Declaration

```swift
init(rentalCompanyName: String, type: String?, make: String?, model: String?, rentalCarDescription: String?)
```

## Parameters

- `rentalCompanyName`: The name of the rental car company.
- `type`: The type of rental car. For example, “Economy Class”.
- `make`: The name of the rental car maker.
- `model`: The name of the rental car model.
- `rentalCarDescription`: A description of the rental car.

<a id="return-value"></a>

## Return Value

A new [INRentalCar](../inrentalcar.md) object or `nil` if one can’t be created.

# initWithRentalCompanyName:type:make:model:rentalCarDescription: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new rental car object with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithRentalCompanyName:(NSString *) rentalCompanyName type:(NSString *) type make:(NSString *) make model:(NSString *) model rentalCarDescription:(NSString *) rentalCarDescription;
```

## Parameters

- `rentalCompanyName`: The name of the rental car company.
- `type`: The type of rental car. For example, “Economy Class”.
- `make`: The name of the rental car maker.
- `model`: The name of the rental car model.
- `rentalCarDescription`: A description of the rental car.

<a id="return-value"></a>

## Return Value

A new [INRentalCar](../inrentalcar.md) object or `nil` if one can’t be created.
