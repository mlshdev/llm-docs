> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver](https://developer.apple.com/documentation/screensaver)

# Screen Saver (Swift)

**Framework:** Screen Saver  
**Kind:** Framework  
**Availability:** macOS 10.0+

Animate screen savers, and interact with the screen saver infrastructure.

<a id="overview"></a>

## Overview

The Screen Saver framework defines the interface for custom modules to interact with the Screen Effects user interface feature. Write screen savers in Objective-C, and implement your module’s user interface using Cocoa. Use the available functions to produce random values and centering rectangles.

To create a screen saver, create a bundle directory with the `.saver` suffix and install it in one of the `Library/Screen Savers` directories on the system. In your bundle’s executable, include a [ScreenSaverView](screensaver/screensaverview.md) subclass. That view defines the interface you use to generate your screen saver content. If your screen saver stores any preference information, use the [ScreenSaverDefaults](screensaver/screensaverdefaults.md) class instead of the standard [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) class.

Because screen savers are plug-ins for the screen saver engine, the screen saver binary must support the same hardware architecture of the running engine. As with any application, the screen saver engine uses the native architecture of the host computer. For full compatibility, make sure your screen saver supports both the `x86_64` and `arm64` architectures.

<a id="How-the-system-runs-your-screen-saver"></a>

### How the system runs your screen saver

When macOS starts your screen saver, the system:

1. Fades the screen to black.
2. Instantiates your [ScreenSaverView](screensaver/screensaverview.md) subclass and calls its [init(frame:isPreview:)](screensaver/screensaverview/init%28frame_ispreview_%29.md) method.
3. Creates a window and installs your [ScreenSaverView](screensaver/screensaverview.md) subclass in it.
4. Activates the window and sets its order.
5. Calls your view’s [draw(\_:)](screensaver/screensaverview/draw%28__%29.md) method so you can draw your initial state.
6. Fades in the screen to reveal your window in the front.
7. Calls your view’s [startAnimation()](screensaver/screensaverview/startanimation%28%29.md) method, which you use to set up any animation-related state information.
8. Calls your view’s [animateOneFrame()](screensaver/screensaverview/animateoneframe%28%29.md) method repeatedly.

When the user takes some action, the system calls your view’s [stopAnimation()](screensaver/screensaverview/stopanimation%28%29.md) method to stop your screen saver. Use that method to clean up any state information you establish in your [startAnimation()](screensaver/screensaverview/startanimation%28%29.md) method.

> **Note**

>  The [stopAnimation()](screensaver/screensaverview/stopanimation%28%29.md) or [startAnimation()](screensaver/screensaverview/startanimation%28%29.md) methods don’t immediately start or stop the animations. The system can still call your [animateOneFrame()](screensaver/screensaverview/animateoneframe%28%29.md) method after calling [stopAnimation()](screensaver/screensaverview/stopanimation%28%29.md).

## Topics

### Interface

- [ScreenSaverView](screensaver/screensaverview.md): An abstract class that defines the interface for subclassers to interact with the screen saver infrastructure.
- [ScreenSaverDefaults](screensaver/screensaverdefaults.md): A class that defines a set of methods for saving and restoring user defaults for screen savers.

### Utilities

- [SSRandomIntBetween(\_:\_:)](screensaver/ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomFloatBetween(\_:\_:)](screensaver/ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSRandomPointForSizeWithinRect(\_:\_:)](screensaver/ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
- [SSCenteredRectInRect(\_:\_:)](screensaver/sscenteredrectinrect%28____%29.md): Returns a rectangle.

# Screen Saver (Objective-C)

**Framework:** Screen Saver  
**Kind:** Framework  
**Availability:** macOS 10.0+

Animate screen savers, and interact with the screen saver infrastructure.

<a id="overview"></a>

## Overview

The Screen Saver framework defines the interface for custom modules to interact with the Screen Effects user interface feature. Write screen savers in Objective-C, and implement your module’s user interface using Cocoa. Use the available functions to produce random values and centering rectangles.

To create a screen saver, create a bundle directory with the `.saver` suffix and install it in one of the `Library/Screen Savers` directories on the system. In your bundle’s executable, include a [ScreenSaverView](screensaver/screensaverview.md) subclass. That view defines the interface you use to generate your screen saver content. If your screen saver stores any preference information, use the [ScreenSaverDefaults](screensaver/screensaverdefaults.md) class instead of the standard [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) class.

Because screen savers are plug-ins for the screen saver engine, the screen saver binary must support the same hardware architecture of the running engine. As with any application, the screen saver engine uses the native architecture of the host computer. For full compatibility, make sure your screen saver supports both the `x86_64` and `arm64` architectures.

<a id="How-the-system-runs-your-screen-saver"></a>

### How the system runs your screen saver

When macOS starts your screen saver, the system:

1. Fades the screen to black.
2. Instantiates your [ScreenSaverView](screensaver/screensaverview.md) subclass and calls its [initWithFrame:isPreview:](screensaver/screensaverview/init%28frame_ispreview_%29.md) method.
3. Creates a window and installs your [ScreenSaverView](screensaver/screensaverview.md) subclass in it.
4. Activates the window and sets its order.
5. Calls your view’s [drawRect:](screensaver/screensaverview/draw%28__%29.md) method so you can draw your initial state.
6. Fades in the screen to reveal your window in the front.
7. Calls your view’s [startAnimation](screensaver/screensaverview/startanimation%28%29.md) method, which you use to set up any animation-related state information.
8. Calls your view’s [animateOneFrame](screensaver/screensaverview/animateoneframe%28%29.md) method repeatedly.

When the user takes some action, the system calls your view’s [stopAnimation](screensaver/screensaverview/stopanimation%28%29.md) method to stop your screen saver. Use that method to clean up any state information you establish in your [startAnimation](screensaver/screensaverview/startanimation%28%29.md) method.

> **Note**

>  The [stopAnimation](screensaver/screensaverview/stopanimation%28%29.md) or [startAnimation](screensaver/screensaverview/startanimation%28%29.md) methods don’t immediately start or stop the animations. The system can still call your [animateOneFrame](screensaver/screensaverview/animateoneframe%28%29.md) method after calling [stopAnimation](screensaver/screensaverview/stopanimation%28%29.md).

## Topics

### Interface

- [ScreenSaverView](screensaver/screensaverview.md): An abstract class that defines the interface for subclassers to interact with the screen saver infrastructure.
- [ScreenSaverDefaults](screensaver/screensaverdefaults.md): A class that defines a set of methods for saving and restoring user defaults for screen savers.

### Utilities

- [SSRandomIntBetween](screensaver/ssrandomintbetween%28____%29.md): Returns a random integer value.
- [SSRandomFloatBetween](screensaver/ssrandomfloatbetween%28____%29.md): Returns a random float value.
- [SSRandomPointForSizeWithinRect](screensaver/ssrandompointforsizewithinrect%28____%29.md): Returns a random point.
- [SSCenteredRectInRect](screensaver/sscenteredrectinrect%28____%29.md): Returns a rectangle.
