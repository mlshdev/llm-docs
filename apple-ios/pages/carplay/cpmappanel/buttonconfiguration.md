> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel/buttonconfiguration

# buttonConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The button information and travel estimates to display in the panel.

## Declaration

```swift
var buttonConfiguration: CPMapPanelButtonConfiguration? { get }
```

<a id="discussion"></a>

## Discussion

You specify this information initially when you create the panel, but can also update it by assigning a new value to this property. The property stores the buttons and other map-related information to display in the panel.

The system pins the information in this type to the bottom of the map panel, keeping it visible at all times.

# buttonConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The button information and travel estimates to display in the panel.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPMapPanelButtonConfiguration * buttonConfiguration;
```

<a id="discussion"></a>

## Discussion

You specify this information initially when you create the panel, but can also update it by assigning a new value to this property. The property stores the buttons and other map-related information to display in the panel.

The system pins the information in this type to the bottom of the map panel, keeping it visible at all times.
