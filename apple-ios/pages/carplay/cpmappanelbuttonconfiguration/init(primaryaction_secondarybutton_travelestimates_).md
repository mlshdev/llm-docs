> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelbuttonconfiguration/init(primaryaction:secondarybutton:travelestimates:)

# init(primaryAction:secondaryButton:travelEstimates:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes the map panel button configuration with the specified action buttons and travel estimates.

## Declaration

```swift
init(primaryAction: CPTextButton, secondaryButton: CPButton?, travelEstimates: CPTravelEstimates)
```

## Parameters

- `primaryAction`: The text button for the primary action.
- `secondaryButton`: An optional button you can use to handle a secondary action. The configuration object stores a copy of the provided button in the [secondaryButton](secondarybutton.md) property.
- `travelEstimates`: The travel estimates to display with the buttons. The configuration object stores a copy of the provided travel estimates.

<a id="return-value"></a>

## Return Value

A new map panel button configuration object.

# initWithPrimaryAction:secondaryButton:travelEstimates: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes the map panel button configuration with the specified action buttons and travel estimates.

## Declaration

```objectivec
- (instancetype) initWithPrimaryAction:(CPTextButton *) primaryAction secondaryButton:(CPButton *) secondaryButton travelEstimates:(CPTravelEstimates *) travelEstimates;
```

## Parameters

- `primaryAction`: The text button for the primary action.
- `secondaryButton`: An optional button you can use to handle a secondary action. The configuration object stores a copy of the provided button in the [secondaryButton](secondarybutton.md) property.
- `travelEstimates`: The travel estimates to display with the buttons. The configuration object stores a copy of the provided travel estimates.

<a id="return-value"></a>

## Return Value

A new map panel button configuration object.
