> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptrippreviewtextconfiguration](https://developer.apple.com/documentation/carplay/cptrippreviewtextconfiguration)

# CPTripPreviewTextConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A configuration object for changing the button titles on a trip preview.

## Declaration

```swift
class CPTripPreviewTextConfiguration
```

## Topics

### Creating a Text Configuration Object

- [init(startButtonTitle:additionalRoutesButtonTitle:overviewButtonTitle:)](cptrippreviewtextconfiguration/init%28startbuttontitle_additionalroutesbuttontitle_overviewbuttontitle_%29.md): Creates a trip preview text configuration object.

### Setting Button Titles

- [startButtonTitle](cptrippreviewtextconfiguration/startbuttontitle.md): The title displayed on the start button.
- [additionalRoutesButtonTitle](cptrippreviewtextconfiguration/additionalroutesbuttontitle.md): The title displayed on the routes button.
- [overviewButtonTitle](cptrippreviewtextconfiguration/overviewbuttontitle.md): The title displayed on the overview button.

### Initializers

- [init(coder:)](cptrippreviewtextconfiguration/init%28coder_%29.md)

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

## See Also

### Displaying Trip Previews

- [showTripPreviews(\_:textConfiguration:)](cpmaptemplate/showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [showTripPreviews(\_:selectedTrip:textConfiguration:)](cpmaptemplate/showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews()](cpmaptemplate/hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreview(for:textConfiguration:)](cpmaptemplate/showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.

# CPTripPreviewTextConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A configuration object for changing the button titles on a trip preview.

## Declaration

```objectivec
@interface CPTripPreviewTextConfiguration : NSObject
```

## Topics

### Creating a Text Configuration Object

- [initWithStartButtonTitle:additionalRoutesButtonTitle:overviewButtonTitle:](cptrippreviewtextconfiguration/init%28startbuttontitle_additionalroutesbuttontitle_overviewbuttontitle_%29.md): Creates a trip preview text configuration object.

### Setting Button Titles

- [startButtonTitle](cptrippreviewtextconfiguration/startbuttontitle.md): The title displayed on the start button.
- [additionalRoutesButtonTitle](cptrippreviewtextconfiguration/additionalroutesbuttontitle.md): The title displayed on the routes button.
- [overviewButtonTitle](cptrippreviewtextconfiguration/overviewbuttontitle.md): The title displayed on the overview button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Displaying Trip Previews

- [showTripPreviews:textConfiguration:](cpmaptemplate/showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [showTripPreviews:selectedTrip:textConfiguration:](cpmaptemplate/showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews](cpmaptemplate/hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreviewForTrip:textConfiguration:](cpmaptemplate/showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
