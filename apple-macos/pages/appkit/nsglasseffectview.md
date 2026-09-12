> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglasseffectview](https://developer.apple.com/documentation/appkit/nsglasseffectview)

# NSGlassEffectView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A view that embeds its content view in a dynamic glass effect.

## Declaration

```swift
class NSGlassEffectView
```

## Topics

### Instance Properties

- [contentView](nsglasseffectview/contentview.md): The view to embed in glass.
- [cornerRadius](nsglasseffectview/cornerradius.md): The amount of curvature for all corners of the glass.
- [effectIsInteractive](nsglasseffectview/effectisinteractive.md): Enables interactive glass behavior, which adds a visual response to user interactions.
- [style](nsglasseffectview/style-swift.property.md): The style of glass this view uses.
- [tintColor](nsglasseffectview/tintcolor.md): The color the glass effect view uses to tint the background and glass effect toward.

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

- [NSGlassEffectView.Style](nsglasseffectview/style-swift.enum.md)
- [NSGlassEffectContainerView](nsglasseffectcontainerview.md): A view that efficiently merges descendant glass effect views together when they are within a specified proximity to each other.

# NSGlassEffectView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A view that embeds its content view in a dynamic glass effect.

## Declaration

```objectivec
@interface NSGlassEffectView : NSView
```

## Topics

### Instance Properties

- [contentView](nsglasseffectview/contentview.md): The view to embed in glass.
- [cornerRadius](nsglasseffectview/cornerradius.md): The amount of curvature for all corners of the glass.
- [effectIsInteractive](nsglasseffectview/effectisinteractive.md): Enables interactive glass behavior, which adds a visual response to user interactions.
- [style](nsglasseffectview/style-swift.property.md): The style of glass this view uses.
- [tintColor](nsglasseffectview/tintcolor.md): The color the glass effect view uses to tint the background and glass effect toward.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Liquid Glass effects

- [NSGlassEffectViewStyle](nsglasseffectview/style-swift.enum.md)
- [NSGlassEffectContainerView](nsglasseffectcontainerview.md): A view that efficiently merges descendant glass effect views together when they are within a specified proximity to each other.
