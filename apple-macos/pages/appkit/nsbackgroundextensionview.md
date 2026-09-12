> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbackgroundextensionview](https://developer.apple.com/documentation/appkit/nsbackgroundextensionview)

# NSBackgroundExtensionView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A view that extends content to fill its own bounds.

## Declaration

```swift
class NSBackgroundExtensionView
```

<a id="overview"></a>

## Overview

A background extension view can be laid out to extend outside the safe area, such as under the titlebar, sidebar, or inspector. By default it lays out its content to stay within the safe area, and uses modifications of the content along the edges to fill the container view.

## Topics

### Instance Properties

- [automaticallyPlacesContentView](nsbackgroundextensionview/automaticallyplacescontentview.md): Controls the automatic safe area placement of the `contentView` within the container.
- [contentView](nsbackgroundextensionview/contentview.md): The content view to extend to fill the `NSBackgroundExtensionView`.

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

# NSBackgroundExtensionView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 26.0+

A view that extends content to fill its own bounds.

## Declaration

```objectivec
@interface NSBackgroundExtensionView : NSView
```

<a id="overview"></a>

## Overview

A background extension view can be laid out to extend outside the safe area, such as under the titlebar, sidebar, or inspector. By default it lays out its content to stay within the safe area, and uses modifications of the content along the edges to fill the container view.

## Topics

### Instance Properties

- [automaticallyPlacesContentView](nsbackgroundextensionview/automaticallyplacescontentview.md): Controls the automatic safe area placement of the `contentView` within the container.
- [contentView](nsbackgroundextensionview/contentview.md): The content view to extend to fill the `NSBackgroundExtensionView`.

## Relationships

### Inherits From

- [NSView](nsview.md)
