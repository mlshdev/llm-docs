> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridtemplate](https://developer.apple.com/documentation/carplay/cpgridtemplate)

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

### Creating a Grid Template

- [init(title:gridButtons:)](cpgridtemplate/init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.
- [CPGridButton](cpgridbutton.md): A menu item button displayed on a grid template.

### Getting the Grid Title

- [title](cpgridtemplate/title.md): The title shown in the grid template’s navigation bar.

### Getting the Grid Buttons

- [gridButtons](cpgridtemplate/gridbuttons.md): The array of grid buttons displayed on the template.

### Instance Methods

- [updateGridButtons(\_:)](cpgridtemplate/updategridbuttons%28__%29.md)
- [updateTitle(\_:)](cpgridtemplate/updatetitle%28__%29.md)

### Type Properties

- [maximumGridButtonImageSize](cpgridtemplate/maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.

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

### General Purpose Templates

- [CPListTemplate](cplisttemplate.md): A template that displays and manages a list of items.
- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.

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

### Creating a Grid Template

- [initWithTitle:gridButtons:](cpgridtemplate/init%28title_gridbuttons_%29.md): Creates a grid template with a title and a set of buttons.
- [CPGridButton](cpgridbutton.md): A menu item button displayed on a grid template.

### Getting the Grid Title

- [title](cpgridtemplate/title.md): The title shown in the grid template’s navigation bar.

### Getting the Grid Buttons

- [gridButtons](cpgridtemplate/gridbuttons.md): The array of grid buttons displayed on the template.

### Instance Methods

- [updateGridButtons:](cpgridtemplate/updategridbuttons%28__%29.md)
- [updateTitle:](cpgridtemplate/updatetitle%28__%29.md)

### Type Properties

- [maximumGridButtonImageSize](cpgridtemplate/maximumgridbuttonimagesize.md): The expected image size for your @c CPGridButton.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### General Purpose Templates

- [CPListTemplate](cplisttemplate.md): A template that displays and manages a list of items.
- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.
