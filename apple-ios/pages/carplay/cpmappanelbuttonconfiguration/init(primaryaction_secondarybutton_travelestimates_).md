> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmappanelbuttonconfiguration/init(primaryaction:secondarybutton:travelestimates:)](https://developer.apple.com/documentation/carplay/cpmappanelbuttonconfiguration/init(primaryaction:secondarybutton:travelestimates:))

# init(primaryAction:secondaryButton:travelEstimates:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map panel button configuration with a primary action, optional travel estimates, and an optional secondary button.

## Declaration

```swift
init(primaryAction: CPTextButton, secondaryButton: CPButton?, travelEstimates: CPTravelEstimates)
```

## Parameters

- `primaryAction`: The primary text button for the panel.
- `secondaryButton`: An optional secondary button. Note: only the image property of this button is used. Any title provided will be dropped.
- `travelEstimates`: The travel estimates to display alongside the primary button.

<a id="return-value"></a>

## Return Value

A new @c CPMapPanelButtonConfiguration instance.

# initWithPrimaryAction:secondaryButton:travelEstimates: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a map panel button configuration with a primary action, optional travel estimates, and an optional secondary button.

## Declaration

```objectivec
- (instancetype) initWithPrimaryAction:(CPTextButton *) primaryAction secondaryButton:(CPButton *) secondaryButton travelEstimates:(CPTravelEstimates *) travelEstimates;
```

## Parameters

- `primaryAction`: The primary text button for the panel.
- `secondaryButton`: An optional secondary button. Note: only the image property of this button is used. Any title provided will be dropped.
- `travelEstimates`: The travel estimates to display alongside the primary button.

<a id="return-value"></a>

## Return Value

A new @c CPMapPanelButtonConfiguration instance.
