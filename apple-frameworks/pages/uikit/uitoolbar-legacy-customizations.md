> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar-legacy-customizations](https://developer.apple.com/documentation/uikit/uitoolbar-legacy-customizations)

# Legacy customizations (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Customize appearance information directly on the toolbar object.

<a id="overview"></a>

## Overview

In iOS 13 and later, customize your toolbar using the [standardAppearance](uitoolbar/standardappearance.md) and [compactAppearance](uitoolbar/compactappearance.md) properties. You may continue to use these legacy accessors to customize your toolbar’s appearance directly, but you must update the appearance for different bar configurations yourself.

## Topics

### Setting the bar’s style

- [barStyle](uitoolbar/barstyle.md): The toolbar style that specifies its appearance.
- [UIBarStyle](uibarstyle.md): Defines the stylistic appearance of different types of views.

### Configuring bar button items

- [tintColor](uitoolbar/tintcolor.md): The tint color to apply to the bar button items.

### Changing the background

- [barTintColor](uitoolbar/bartintcolor.md): The tint color to apply to the toolbar background.
- [backgroundImage(forToolbarPosition:barMetrics:)](uitoolbar/backgroundimage%28fortoolbarposition_barmetrics_%29.md): Returns the image to use for the background in a given position and with given metrics.
- [setBackgroundImage(\_:forToolbarPosition:barMetrics:)](uitoolbar/setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.

### Adding a shadow

- [shadowImage(forToolbarPosition:)](uitoolbar/shadowimage%28fortoolbarposition_%29.md): Returns the image to use for the toolbar shadow in a given position.
- [setShadowImage(\_:forToolbarPosition:)](uitoolbar/setshadowimage%28__fortoolbarposition_%29.md): Sets the image to use for the toolbar shadow in a given position.

## See Also

### Customizing appearance

- [standardAppearance](uitoolbar/standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](uitoolbar/compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [scrollEdgeAppearance](uitoolbar/scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [compactScrollEdgeAppearance](uitoolbar/compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [isTranslucent](uitoolbar/istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.

# Legacy customizations (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Customize appearance information directly on the toolbar object.

<a id="overview"></a>

## Overview

In iOS 13 and later, customize your toolbar using the [standardAppearance](uitoolbar/standardappearance.md) and [compactAppearance](uitoolbar/compactappearance.md) properties. You may continue to use these legacy accessors to customize your toolbar’s appearance directly, but you must update the appearance for different bar configurations yourself.

## Topics

### Setting the bar’s style

- [barStyle](uitoolbar/barstyle.md): The toolbar style that specifies its appearance.
- [UIBarStyle](uibarstyle.md): Defines the stylistic appearance of different types of views.

### Configuring bar button items

- [tintColor](uitoolbar/tintcolor.md): The tint color to apply to the bar button items.

### Changing the background

- [barTintColor](uitoolbar/bartintcolor.md): The tint color to apply to the toolbar background.
- [backgroundImageForToolbarPosition:barMetrics:](uitoolbar/backgroundimage%28fortoolbarposition_barmetrics_%29.md): Returns the image to use for the background in a given position and with given metrics.
- [setBackgroundImage:forToolbarPosition:barMetrics:](uitoolbar/setbackgroundimage%28__fortoolbarposition_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.

### Adding a shadow

- [shadowImageForToolbarPosition:](uitoolbar/shadowimage%28fortoolbarposition_%29.md): Returns the image to use for the toolbar shadow in a given position.
- [setShadowImage:forToolbarPosition:](uitoolbar/setshadowimage%28__fortoolbarposition_%29.md): Sets the image to use for the toolbar shadow in a given position.

### Deprecated

- [UIToolbarPosition](uitoolbarposition.md): Constants to identify the position of a toolbar for appearance customization.

## See Also

### Customizing appearance

- [standardAppearance](uitoolbar/standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](uitoolbar/compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [scrollEdgeAppearance](uitoolbar/scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [compactScrollEdgeAppearance](uitoolbar/compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [translucent](uitoolbar/istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
