> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview](https://developer.apple.com/documentation/screensaver/screensaverview)

# ScreenSaverView (Swift)

**Framework:** Screen Saver  
**Kind:** Class  
**Availability:** macOS 10.0+

An abstract class that defines the interface for subclassers to interact with the screen saver infrastructure.

## Declaration

```swift
class ScreenSaverView
```

<a id="overview"></a>

## Overview

[ScreenSaverView](screensaverview.md) provides the interface for your screen saver, including the content you animate onscreen and an optional configuration sheet. Create your own custom subclass and add it to your screen saver bundle. Use your subclass to create the animations that you want to appear onscreen, and to specify additional animation details.

> **Note**

>  When someone previews your screen saver in System Preferences, the system instantiates your [ScreenSaverView](screensaverview.md) subclass.

You can draw from your view’s [draw(\_:)](screensaverview/draw%28__%29.md) method, or you can draw directly from the [animateOneFrame()](screensaverview/animateoneframe%28%29.md) method. If you prefer to use the [draw(\_:)](screensaverview/draw%28__%29.md) method, use the [animateOneFrame()](screensaverview/animateoneframe%28%29.md) method to call the [setNeedsDisplay(\_:)](../appkit/nsview/setneedsdisplay%28__%29.md) method and specify the portions of your view that require updates.

## Topics

### Creating a screen saver view

- [init(frame:isPreview:)](screensaverview/init%28frame_ispreview_%29.md): Creates a newly allocated screen saver view with the specified frame rectangle and preview information.

### Getting the preferred window behavior

- [backingStoreType()](screensaverview/backingstoretype%28%29.md): Returns the type of backing store you want for your screen saver’s window.
- [performGammaFade()](screensaverview/performgammafade%28%29.md): Indicates whether to perform a gradual screen fade when the system starts and stops your screen saver’s animation.

### Setting and getting the animation time interval

- [animationTimeInterval](screensaverview/animationtimeinterval.md): The time interval between animation frames.

### Animating the screen saver

- [startAnimation()](screensaverview/startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [animateOneFrame()](screensaverview/animateoneframe%28%29.md): Advances the screen saver’s animation by a single frame.
- [stopAnimation()](screensaverview/stopanimation%28%29.md): Deactivates the timer that advances the animation.
- [isAnimating](screensaverview/isanimating.md): A Boolean value that indicates whether the screen saver is animating.

### Drawing the view

- [draw(\_:)](screensaverview/draw%28__%29.md): Draws the screen saver view.
- [isPreview](screensaverview/ispreview.md): A Boolean value that indicates whether the screen saver view is set to a size suitable for previewing its content.

### Accessing the configuration sheet

- [hasConfigureSheet](screensaverview/hasconfiguresheet.md): A Boolean value that indicates whether the screen saver has an associated configuration sheet.
- [configureSheet](screensaverview/configuresheet.md): The window that contains the controls to configure the screen saver.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)

## See Also

### Interface

- [ScreenSaverDefaults](screensaverdefaults.md): A class that defines a set of methods for saving and restoring user defaults for screen savers.

# ScreenSaverView (Objective-C)

**Framework:** Screen Saver  
**Kind:** Class  
**Availability:** macOS 10.0+

An abstract class that defines the interface for subclassers to interact with the screen saver infrastructure.

## Declaration

```objectivec
@interface ScreenSaverView : NSView
```

<a id="overview"></a>

## Overview

[ScreenSaverView](screensaverview.md) provides the interface for your screen saver, including the content you animate onscreen and an optional configuration sheet. Create your own custom subclass and add it to your screen saver bundle. Use your subclass to create the animations that you want to appear onscreen, and to specify additional animation details.

> **Note**

>  When someone previews your screen saver in System Preferences, the system instantiates your [ScreenSaverView](screensaverview.md) subclass.

You can draw from your view’s [drawRect:](screensaverview/draw%28__%29.md) method, or you can draw directly from the [animateOneFrame](screensaverview/animateoneframe%28%29.md) method. If you prefer to use the [drawRect:](screensaverview/draw%28__%29.md) method, use the [animateOneFrame](screensaverview/animateoneframe%28%29.md) method to call the [setNeedsDisplayInRect:](../appkit/nsview/setneedsdisplay%28__%29.md) method and specify the portions of your view that require updates.

## Topics

### Creating a screen saver view

- [initWithFrame:isPreview:](screensaverview/init%28frame_ispreview_%29.md): Creates a newly allocated screen saver view with the specified frame rectangle and preview information.

### Getting the preferred window behavior

- [backingStoreType](screensaverview/backingstoretype%28%29.md): Returns the type of backing store you want for your screen saver’s window.
- [performGammaFade](screensaverview/performgammafade%28%29.md): Indicates whether to perform a gradual screen fade when the system starts and stops your screen saver’s animation.

### Setting and getting the animation time interval

- [animationTimeInterval](screensaverview/animationtimeinterval.md): The time interval between animation frames.

### Animating the screen saver

- [startAnimation](screensaverview/startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [animateOneFrame](screensaverview/animateoneframe%28%29.md): Advances the screen saver’s animation by a single frame.
- [stopAnimation](screensaverview/stopanimation%28%29.md): Deactivates the timer that advances the animation.
- [animating](screensaverview/isanimating.md): A Boolean value that indicates whether the screen saver is animating.

### Drawing the view

- [drawRect:](screensaverview/draw%28__%29.md): Draws the screen saver view.
- [preview](screensaverview/ispreview.md): A Boolean value that indicates whether the screen saver view is set to a size suitable for previewing its content.

### Accessing the configuration sheet

- [hasConfigureSheet](screensaverview/hasconfiguresheet.md): A Boolean value that indicates whether the screen saver has an associated configuration sheet.
- [configureSheet](screensaverview/configuresheet.md): The window that contains the controls to configure the screen saver.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Interface

- [ScreenSaverDefaults](screensaverdefaults.md): A class that defines a set of methods for saving and restoring user defaults for screen savers.
