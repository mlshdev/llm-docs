> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmapbutton

# CPMapButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button that represents an action that a map template displays on the CarPlay screen.

## Declaration

```swift
@MainActor class CPMapButton
```

## Topics

### Creating a map button

- [init(handler:)](cpmapbutton/init%28handler_%29.md): Creates a new map button.

### Managing the images

- [image](cpmapbutton/image.md): The image to display on the button.
- [focusedImage](cpmapbutton/focusedimage.md): The image to display when focus is on the button.

### Configuring the button

- [isEnabled](cpmapbutton/isenabled.md): A Boolean value that enables and disables the map button.
- [isHidden](cpmapbutton/ishidden.md): A Boolean value that hides and shows the map button.

### Initializers

- [init(coder:)](cpmapbutton/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapPanel](cpmappanel.md): An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.
- [CPChargingStationConnection](cpchargingstationconnection.md): Details about the equipment at an electric vehicle charging station.

# CPMapButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A button that represents an action that a map template displays on the CarPlay screen.

## Declaration

```objectivec
@interface CPMapButton : NSObject
```

## Topics

### Creating a map button

- [initWithHandler:](cpmapbutton/init%28handler_%29.md): Creates a new map button.

### Managing the images

- [image](cpmapbutton/image.md): The image to display on the button.
- [focusedImage](cpmapbutton/focusedimage.md): The image to display when focus is on the button.

### Configuring the button

- [enabled](cpmapbutton/isenabled.md): A Boolean value that enables and disables the map button.
- [hidden](cpmapbutton/ishidden.md): A Boolean value that hides and shows the map button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapPanel](cpmappanel.md): An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.
- [CPChargingStationConnection](cpchargingstationconnection.md): Details about the equipment at an electric vehicle charging station.
