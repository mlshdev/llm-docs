> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance](https://developer.apple.com/documentation/appkit/nsappearance)

# NSAppearance (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

An object that manages standard appearance attributes for UI elements in an app.

## Declaration

```swift
class NSAppearance
```

## Mentioned In

- [Choosing a Specific Appearance for Your macOS App](choosing-a-specific-appearance-for-your-macos-app.md)

<a id="overview"></a>

## Overview

An [NSAppearance](nsappearance.md) object manages how AppKit renders your app’s UI elements. Specifically, appearance objects determine which colors and images AppKit uses when drawing windows, views, and controls. Although you can use an appearance object to determine how to draw custom views and controls, a better approach is to choose colors and images that adapt automatically to the current appearance. For example, define a color asset whose actual color value changes for light and dark appearances. You can assign specific appearances to your views in Interface Builder.

The user chooses the default appearance for the system, but you can override that appearance for all or part of your app. Apps inherit the default system appearance, windows inherit their app’s appearance, and views inherit the appearance of their nearest ancestor (either a superview or window). To force a window or view to adopt an appearance, assign a specific appearance object to its [appearance](nsappearancecustomization/appearance.md) property.

When AppKit draws a control, it automatically sets the current appearance on the current thread to the control’s appearance. The current appearance influences the drawing path and return values you get when you access system fonts and colors. The current appearance also affects the appearance of text and images, such as the text and template images in a toolbar.

## Topics

### Creating an Appearance

- [init(named:)](nsappearance/init%28named_%29.md): Creates an appearance object based on the name of one of the standard system appearances.
- [init(appearanceNamed:bundle:)](nsappearance/init%28appearancenamed_bundle_%29.md): Creates an appearance object from the named appearance file located in the specified bundle.
- [init(coder:)](nsappearance/init%28coder_%29.md)

### Getting the Appearance Name

- [name](nsappearance/name-swift.property.md): The name of the appearance.
- [NSAppearance.Name](nsappearance/name-swift.struct.md)

### Determining the Most Appropriate Appearance

- [bestMatch(from:)](nsappearance/bestmatch%28from_%29.md): Returns the appearance name that most closely matches the current appearance object.

### Getting and Setting the Current Appearance

- [currentDrawing()](nsappearance/currentdrawing%28%29.md): The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.
- [performAsCurrentDrawingAppearance(\_:)](nsappearance/performascurrentdrawingappearance%28__%29.md): Sets the appearance to be the active drawing appearance and perform the specified block.
- [current](nsappearance/current.md): Deprecated. Returns the appearance object that’s active on the current thread.

### Managing Vibrancy

- [allowsVibrancy](nsappearance/allowsvibrancy.md): Specifies whether the current appearance allows vibrancy.

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

### Appearance System

- [NSAppearanceCustomization](nsappearancecustomization.md): A set of methods for getting and setting the appearance attributes of a view.

# NSAppearance (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.9+

An object that manages standard appearance attributes for UI elements in an app.

## Declaration

```objectivec
@interface NSAppearance : NSObject
```

## Mentioned In

- [Choosing a Specific Appearance for Your macOS App](choosing-a-specific-appearance-for-your-macos-app.md)

<a id="overview"></a>

## Overview

An [NSAppearance](nsappearance.md) object manages how AppKit renders your app’s UI elements. Specifically, appearance objects determine which colors and images AppKit uses when drawing windows, views, and controls. Although you can use an appearance object to determine how to draw custom views and controls, a better approach is to choose colors and images that adapt automatically to the current appearance. For example, define a color asset whose actual color value changes for light and dark appearances. You can assign specific appearances to your views in Interface Builder.

The user chooses the default appearance for the system, but you can override that appearance for all or part of your app. Apps inherit the default system appearance, windows inherit their app’s appearance, and views inherit the appearance of their nearest ancestor (either a superview or window). To force a window or view to adopt an appearance, assign a specific appearance object to its [appearance](nsappearancecustomization/appearance.md) property.

When AppKit draws a control, it automatically sets the current appearance on the current thread to the control’s appearance. The current appearance influences the drawing path and return values you get when you access system fonts and colors. The current appearance also affects the appearance of text and images, such as the text and template images in a toolbar.

## Topics

### Creating an Appearance

- [appearanceNamed:](nsappearance/init%28named_%29.md): Creates an appearance object based on the name of one of the standard system appearances.
- [initWithAppearanceNamed:bundle:](nsappearance/init%28appearancenamed_bundle_%29.md): Creates an appearance object from the named appearance file located in the specified bundle.
- [initWithCoder:](nsappearance/init%28coder_%29.md)

### Getting the Appearance Name

- [name](nsappearance/name-swift.property.md): The name of the appearance.
- [NSAppearanceName](nsappearance/name-swift.struct.md)

### Determining the Most Appropriate Appearance

- [bestMatchFromAppearancesWithNames:](nsappearance/bestmatch%28from_%29.md): Returns the appearance name that most closely matches the current appearance object.

### Getting and Setting the Current Appearance

- [currentDrawingAppearance](nsappearance/currentdrawingappearance.md): The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.
- [performAsCurrentDrawingAppearance:](nsappearance/performascurrentdrawingappearance%28__%29.md): Sets the appearance to be the active drawing appearance and perform the specified block.
- [currentAppearance](nsappearance/current.md): Deprecated. Returns the appearance object that’s active on the current thread.

### Managing Vibrancy

- [allowsVibrancy](nsappearance/allowsvibrancy.md): Specifies whether the current appearance allows vibrancy.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Appearance System

- [NSAppearanceCustomization](nsappearancecustomization.md): A set of methods for getting and setting the appearance attributes of a view.
