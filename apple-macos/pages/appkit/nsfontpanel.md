> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontpanel](https://developer.apple.com/documentation/appkit/nsfontpanel)

# NSFontPanel (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The Font panel—a user interface object that displays a list of available fonts, letting the user preview them and change the font used to display text.

## Declaration

```swift
class NSFontPanel
```

<a id="overview"></a>

## Overview

Actual changes to the font panel are made through conversion messages sent to the shared [NSFontManager](nsfontmanager.md) instance. There’s only one Font panel for each app.

## Topics

### Getting the Font Panel

- [shared](nsfontpanel/shared.md): Returns the single `NSFontPanel` instance for the application, creating it if necessary.
- [sharedFontPanelExists](nsfontpanel/sharedfontpanelexists.md): A Boolean value that indicates whether the shared Font panel has been created.

### Enabling Font Changes

- [isEnabled](nsfontpanel/isenabled.md): A Boolean that shows whether the receiver’s Set button is enabled.
- [reloadDefaultFontFamilies()](nsfontpanel/reloaddefaultfontfamilies%28%29.md): Triggers a reload to the default state, so that the delegate is called.

### Updating the Font Panel

- [setPanelFont(\_:isMultiple:)](nsfontpanel/setpanelfont%28__ismultiple_%29.md): Sets the selected font in the receiver to the specified font.

### Converting Fonts

- [convert(\_:)](nsfontpanel/convert%28__%29.md): Converts the specified font using the settings in the receiver, with the aid of the shared `NSFontManager` if necessary.

### Working in Modal Loops

- [worksWhenModal](nsfontpanel/workswhenmodal.md): A Boolean that indicates whether the receiver allows fonts to be changed in modal windows and panels.

### Setting an Accessory View

- [accessoryView](nsfontpanel/accessoryview.md): The specified view as the receiver’s accessory view, allowing you to add custom controls to your application’s Font panel without having to create a subclass.

### Structures

- [NSFontPanel.ModeMask](nsfontpanel/modemask.md)

## Relationships

### Inherits From

- [NSPanel](nspanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Font Panels

- [NSFontPanel.ModeMask](nsfontpanel/modemask.md)
- [NSFontPanelValidation](nsfontpanelvalidation.md): A set of methods you use to tell the Font panel to display some or all of its elements.
- [NSFontChanging](nsfontchanging.md)

# NSFontPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The Font panel—a user interface object that displays a list of available fonts, letting the user preview them and change the font used to display text.

## Declaration

```objectivec
@interface NSFontPanel : NSPanel
```

<a id="overview"></a>

## Overview

Actual changes to the font panel are made through conversion messages sent to the shared [NSFontManager](nsfontmanager.md) instance. There’s only one Font panel for each app.

## Topics

### Getting the Font Panel

- [sharedFontPanel](nsfontpanel/shared.md): Returns the single `NSFontPanel` instance for the application, creating it if necessary.
- [sharedFontPanelExists](nsfontpanel/sharedfontpanelexists.md): A Boolean value that indicates whether the shared Font panel has been created.

### Enabling Font Changes

- [enabled](nsfontpanel/isenabled.md): A Boolean that shows whether the receiver’s Set button is enabled.
- [reloadDefaultFontFamilies](nsfontpanel/reloaddefaultfontfamilies%28%29.md): Triggers a reload to the default state, so that the delegate is called.

### Updating the Font Panel

- [setPanelFont:isMultiple:](nsfontpanel/setpanelfont%28__ismultiple_%29.md): Sets the selected font in the receiver to the specified font.

### Converting Fonts

- [panelConvertFont:](nsfontpanel/convert%28__%29.md): Converts the specified font using the settings in the receiver, with the aid of the shared `NSFontManager` if necessary.

### Working in Modal Loops

- [worksWhenModal](nsfontpanel/workswhenmodal.md): A Boolean that indicates whether the receiver allows fonts to be changed in modal windows and panels.

### Setting an Accessory View

- [accessoryView](nsfontpanel/accessoryview.md): The specified view as the receiver’s accessory view, allowing you to add custom controls to your application’s Font panel without having to create a subclass.

### Structures

- [NSFontPanelModeMask](nsfontpanel/modemask.md)

## Relationships

### Inherits From

- [NSPanel](nspanel.md)

## See Also

### Font Panels

- [NSFontPanelModeMask](nsfontpanel/modemask.md)
- [NSFontPanelValidation](nsfontpanelvalidation.md): A set of methods you use to tell the Font panel to display some or all of its elements.
- [NSFontChanging](nsfontchanging.md)
