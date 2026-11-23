> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpdashboardbutton

# CPDashboardButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A shortcut button for placement on the CarPlay Dashboard.

## Declaration

```swift
class CPDashboardButton
```

## Topics

### Creating a dashboard button

- [init(titleVariants:subtitleVariants:image:handler:)](cpdashboardbutton/init%28titlevariants_subtitlevariants_image_handler_%29.md): Creates a dashboard button that displays a title, an optional subtitle, and an image.
- [init(coder:)](cpdashboardbutton/init%28coder_%29.md)

### Accessing the button configuration

- [titleVariants](cpdashboardbutton/titlevariants.md): The array of title variants for the button.
- [subtitleVariants](cpdashboardbutton/subtitlevariants.md): The array of subtitle variants for the button.
- [image](cpdashboardbutton/image.md): The image the button displays.

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

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

# CPDashboardButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A shortcut button for placement on the CarPlay Dashboard.

## Declaration

```objectivec
@interface CPDashboardButton : NSObject
```

## Topics

### Creating a dashboard button

- [initWithTitleVariants:subtitleVariants:image:handler:](cpdashboardbutton/init%28titlevariants_subtitlevariants_image_handler_%29.md): Creates a dashboard button that displays a title, an optional subtitle, and an image.

### Accessing the button configuration

- [titleVariants](cpdashboardbutton/titlevariants.md): The array of title variants for the button.
- [subtitleVariants](cpdashboardbutton/subtitlevariants.md): The array of subtitle variants for the button.
- [image](cpdashboardbutton/image.md): The image the button displays.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.
