> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager](https://developer.apple.com/documentation/appkit/nsfontmanager)

# NSFontManager (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The center of activity for the font-conversion system.

## Declaration

```swift
class NSFontManager
```

<a id="overview"></a>

## Overview

The font manager records the currently selected font, updates the Font panel and Font menu to reflect the selected font, initiates font changes, and converts fonts in response to requests from text-bearing objects. In a more prosaic role, [NSFontManager](nsfontmanager.md) can be queried for the fonts available to the application and for the particular attributes of a font, such as whether it’s condensed or extended.

You typically set up a font manager and the Font menu using Interface Builder. However, you can also do so programmatically by getting the shared font manager instance and having it create the standard Font menu at runtime:

```objc
NSFontManager *fontManager = [NSFontManager sharedFontManager];
NSMenu *fontMenu = [fontManager fontMenu:YES];
```

You can then add the Font menu to your app’s main menu. After the Font menu is installed, your app automatically gains the functionality of both the Font menu and the Font panel.

Font collections are managed by [NSFontManager](nsfontmanager.md).

## Topics

### Getting the Shared Font Manager

- [shared](nsfontmanager/shared.md): Returns the shared instance of the font manager for the application, creating it if necessary.

### Changing the Default Font Conversion Classes

- [setFontManagerFactory(\_:)](nsfontmanager/setfontmanagerfactory%28__%29.md): Sets the class that creates the shared font manager object.
- [setFontPanelFactory(\_:)](nsfontmanager/setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

### Getting Available Fonts

- [availableFonts](nsfontmanager/availablefonts.md): The names of the fonts available in the system (not the [NSFont](nsfont.md) objects themselves).
- [availableFontFamilies](nsfontmanager/availablefontfamilies.md): The names of the font families available in the system.
- [availableFontNames(with:)](nsfontmanager/availablefontnames%28with_%29.md): Returns the names of the fonts available in the system whose traits are described exactly by the given font trait mask (not the `NSFont` objects themselves).
- [availableMembers(ofFontFamily:)](nsfontmanager/availablemembers%28offontfamily_%29.md): Returns an array with one entry for each available member of a font family.

### Setting and Examining the Selected Font

- [setSelectedFont(\_:isMultiple:)](nsfontmanager/setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](nsfontmanager/selectedfont.md): The currently selected font object.
- [isMultiple](nsfontmanager/ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction()](nsfontmanager/sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedName(forFamily:face:)](nsfontmanager/localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.

### Sending Action Methods

- [addFontTrait(\_:)](nsfontmanager/addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait(\_:)](nsfontmanager/removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont(\_:)](nsfontmanager/modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel(\_:)](nsfontmanager/modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel(\_:)](nsfontmanager/orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel(\_:)](nsfontmanager/orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](nsfontaction.md): Actions that modify a font.

### Converting Fonts Automatically

- [convert(\_:)](nsfontmanager/convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convert(\_:toFace:)](nsfontmanager/convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convert(\_:toFamily:)](nsfontmanager/convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](nsfontmanager/convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](nsfontmanager/convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convert(\_:toSize:)](nsfontmanager/convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight(\_:of:)](nsfontmanager/convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](nsfontmanager/currentfontaction.md): The current font conversion action.
- [convertFontTraits(\_:)](nsfontmanager/convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

### Getting a Particular Font

- [font(withFamily:traits:weight:size:)](nsfontmanager/font%28withfamily_traits_weight_size_%29.md): Attempts to load a font with the specified characteristics.

### Examining Fonts

- [traits(of:)](nsfontmanager/traits%28of_%29.md): Returns the traits of the given font.
- [fontNamed(\_:hasTraits:)](nsfontmanager/fontnamed%28__hastraits_%29.md): Indicates whether the given font has all the specified traits.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [weight(of:)](nsfontmanager/weight%28of_%29.md): Returns an approximation of the specified font’s weight.

### Managing the Font Panel and Font Menu

- [isEnabled](nsfontmanager/isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [fontPanel(\_:)](nsfontmanager/fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontMenu(\_:)](nsfontmanager/setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
- [fontMenu(\_:)](nsfontmanager/fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.

### Accessing the Action Property

- [action](nsfontmanager/action.md): The action sent to the first responder when the user selects a new font from the Font panel or chooses a command from the Font menu.
- [target](nsfontmanager/target.md): The object that receives action messages related to the font manager.

### Setting Attributes

- [setSelectedAttributes(\_:isMultiple:)](nsfontmanager/setselectedattributes%28__ismultiple_%29.md): Informs the Font panel that the specified font attributes changed for the selected text.
- [convertAttributes(\_:)](nsfontmanager/convertattributes%28__%29.md): Converts attributes in response to an object initiating an attribute change, typically the Font panel or Font menu.

### Deprecated

- [Deprecated Symbols](nsfontmanager-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Management

- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.

# NSFontManager (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The center of activity for the font-conversion system.

## Declaration

```objectivec
@interface NSFontManager : NSObject
```

<a id="overview"></a>

## Overview

The font manager records the currently selected font, updates the Font panel and Font menu to reflect the selected font, initiates font changes, and converts fonts in response to requests from text-bearing objects. In a more prosaic role, [NSFontManager](nsfontmanager.md) can be queried for the fonts available to the application and for the particular attributes of a font, such as whether it’s condensed or extended.

You typically set up a font manager and the Font menu using Interface Builder. However, you can also do so programmatically by getting the shared font manager instance and having it create the standard Font menu at runtime:

```objc
NSFontManager *fontManager = [NSFontManager sharedFontManager];
NSMenu *fontMenu = [fontManager fontMenu:YES];
```

You can then add the Font menu to your app’s main menu. After the Font menu is installed, your app automatically gains the functionality of both the Font menu and the Font panel.

Font collections are managed by [NSFontManager](nsfontmanager.md).

## Topics

### Getting the Shared Font Manager

- [sharedFontManager](nsfontmanager/shared.md): Returns the shared instance of the font manager for the application, creating it if necessary.

### Changing the Default Font Conversion Classes

- [setFontManagerFactory:](nsfontmanager/setfontmanagerfactory%28__%29.md): Sets the class that creates the shared font manager object.
- [setFontPanelFactory:](nsfontmanager/setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

### Getting Available Fonts

- [availableFonts](nsfontmanager/availablefonts.md): The names of the fonts available in the system (not the [NSFont](nsfont.md) objects themselves).
- [availableFontFamilies](nsfontmanager/availablefontfamilies.md): The names of the font families available in the system.
- [availableFontNamesWithTraits:](nsfontmanager/availablefontnames%28with_%29.md): Returns the names of the fonts available in the system whose traits are described exactly by the given font trait mask (not the `NSFont` objects themselves).
- [availableMembersOfFontFamily:](nsfontmanager/availablemembers%28offontfamily_%29.md): Returns an array with one entry for each available member of a font family.

### Setting and Examining the Selected Font

- [setSelectedFont:isMultiple:](nsfontmanager/setselectedfont%28__ismultiple_%29.md): Records the specified font as the currently selected font and updates the Font panel.
- [selectedFont](nsfontmanager/selectedfont.md): The currently selected font object.
- [multiple](nsfontmanager/ismultiple.md): A Boolean value that indicates whether the currently selected font has multiple fonts.
- [sendAction](nsfontmanager/sendaction%28%29.md): A Boolean value that indicates whether a responder handled the font manager’s action message.
- [localizedNameForFamily:face:](nsfontmanager/localizedname%28forfamily_face_%29.md): Returns a localized string with the name of the specified font family and face, if one exists.

### Sending Action Methods

- [addFontTrait:](nsfontmanager/addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait:](nsfontmanager/removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont:](nsfontmanager/modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel:](nsfontmanager/modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel:](nsfontmanager/orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel:](nsfontmanager/orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](nsfontaction.md): Actions that modify a font.

### Converting Fonts Automatically

- [convertFont:](nsfontmanager/convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.
- [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:): Deprecated. Informs responders of a font change.

### Converting Fonts Manually

- [convertFont:toFace:](nsfontmanager/convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convertFont:toFamily:](nsfontmanager/convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](nsfontmanager/convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](nsfontmanager/convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertFont:toSize:](nsfontmanager/convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight:ofFont:](nsfontmanager/convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](nsfontmanager/currentfontaction.md): The current font conversion action.
- [convertFontTraits:](nsfontmanager/convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

### Getting a Particular Font

- [fontWithFamily:traits:weight:size:](nsfontmanager/font%28withfamily_traits_weight_size_%29.md): Attempts to load a font with the specified characteristics.

### Examining Fonts

- [traitsOfFont:](nsfontmanager/traits%28of_%29.md): Returns the traits of the given font.
- [fontNamed:hasTraits:](nsfontmanager/fontnamed%28__hastraits_%29.md): Indicates whether the given font has all the specified traits.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [weightOfFont:](nsfontmanager/weight%28of_%29.md): Returns an approximation of the specified font’s weight.

### Managing the Font Panel and Font Menu

- [enabled](nsfontmanager/isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [fontPanel:](nsfontmanager/fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontMenu:](nsfontmanager/setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
- [fontMenu:](nsfontmanager/fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.

### Accessing the Action Property

- [action](nsfontmanager/action.md): The action sent to the first responder when the user selects a new font from the Font panel or chooses a command from the Font menu.
- [target](nsfontmanager/target.md): The object that receives action messages related to the font manager.

### Setting Attributes

- [setSelectedAttributes:isMultiple:](nsfontmanager/setselectedattributes%28__ismultiple_%29.md): Informs the Font panel that the specified font attributes changed for the selected text.
- [convertAttributes:](nsfontmanager/convertattributes%28__%29.md): Converts attributes in response to an object initiating an attribute change, typically the Font panel or Font menu.

### Deprecated

- [Deprecated Symbols](nsfontmanager-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSMenuItemValidation](nsmenuitemvalidation.md)

## See Also

### Management

- [NSFontCollection](nsfontcollection.md): A font collection, which is a group of font descriptors taken together as a single object.
- [NSMutableFontCollection](nsmutablefontcollection.md): A mutable collection of font descriptors taken together as a single object.
- [NSFontCollectionOptions](nsfontcollectionoptions.md): Constants that support font collection management.
