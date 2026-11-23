> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpgridtemplate

# CPGridTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays and manages a grid of items.

## Declaration

```swift
@MainActor class CPGridTemplate
```

<a id="overview"></a>

## Overview

Use this template to display a grid of items as buttons. When creating the grid template, provide an array of [CPGridButton](cpgridbutton.md) objects. Each button contains a title, an image, and an optional handler that the system invokes after the user taps the button on the CarPlay screen.

When there are more than eight buttons in the array, the template displays only the first eight. When there are more than four buttons, the template balances the display of the buttons betweem two rows.

## Topics

### Creating a grid template

- [init(title:gridButtons:)](cpgridtemplate/init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.
- [maximumGridButtonImageSize](cpgridtemplate/maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.

### Getting the grid title

- [title](cpgridtemplate/title.md): The title shown in the grid template’s navigation bar.
- [updateTitle(\_:)](cpgridtemplate/updatetitle%28__%29.md)

### Getting the grid buttons

- [gridButtons](cpgridtemplate/gridbuttons.md): The array of grid buttons displayed on the template.
- [updateGridButtons(\_:)](cpgridtemplate/updategridbuttons%28__%29.md)

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.

# CPGridTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays and manages a grid of items.

## Declaration

```objectivec
@interface CPGridTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

Use this template to display a grid of items as buttons. When creating the grid template, provide an array of [CPGridButton](cpgridbutton.md) objects. Each button contains a title, an image, and an optional handler that the system invokes after the user taps the button on the CarPlay screen.

When there are more than eight buttons in the array, the template displays only the first eight. When there are more than four buttons, the template balances the display of the buttons betweem two rows.

## Topics

### Creating a grid template

- [initWithTitle:gridButtons:](cpgridtemplate/init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.
- [maximumGridButtonImageSize](cpgridtemplate/maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.

### Getting the grid title

- [title](cpgridtemplate/title.md): The title shown in the grid template’s navigation bar.
- [updateTitle:](cpgridtemplate/updatetitle%28__%29.md)

### Getting the grid buttons

- [gridButtons](cpgridtemplate/gridbuttons.md): The array of grid buttons displayed on the template.
- [updateGridButtons:](cpgridtemplate/updategridbuttons%28__%29.md)

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [All templates and supporting types](all-templates-and-supporting-types.md): Explore the templates you use to build the interface of your CarPlay app.
