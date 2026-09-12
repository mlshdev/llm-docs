> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglasseffectcontainerview](https://developer.apple.com/documentation/appkit/nsglasseffectcontainerview)

# NSGlassEffectContainerView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A view that efficiently merges descendant glass effect views together when they are within a specified proximity to each other.

## Declaration

```swift
class NSGlassEffectContainerView
```

<a id="overview"></a>

## Overview

> **Tip**

> Using a glass effect container view can improve performance by reducing the number of passes required to render similar glass effect views.

## Topics

### Instance Properties

- [contentView](nsglasseffectcontainerview/contentview.md): The view that contains descendant views to merge together when in proximity to each other.
- [spacing](nsglasseffectcontainerview/spacing.md): The proximity at which the glass effect container view begins merging eligible descendent glass effect views.

## Relationships

### Inherits From

- [NSView](nsview.md)

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
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Liquid Glass effects

- [NSGlassEffectView](nsglasseffectview.md): A view that embeds its content view in a dynamic glass effect.
- [NSGlassEffectView.Style](nsglasseffectview/style-swift.enum.md)

# NSGlassEffectContainerView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A view that efficiently merges descendant glass effect views together when they are within a specified proximity to each other.

## Declaration

```objectivec
@interface NSGlassEffectContainerView : NSView
```

<a id="overview"></a>

## Overview

> **Tip**

> Using a glass effect container view can improve performance by reducing the number of passes required to render similar glass effect views.

## Topics

### Instance Properties

- [contentView](nsglasseffectcontainerview/contentview.md): The view that contains descendant views to merge together when in proximity to each other.
- [spacing](nsglasseffectcontainerview/spacing.md): The proximity at which the glass effect container view begins merging eligible descendent glass effect views.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Liquid Glass effects

- [NSGlassEffectView](nsglasseffectview.md): A view that embeds its content view in a dynamic glass effect.
- [NSGlassEffectViewStyle](nsglasseffectview/style-swift.enum.md)
