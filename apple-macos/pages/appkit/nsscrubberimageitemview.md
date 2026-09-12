> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberimageitemview](https://developer.apple.com/documentation/appkit/nsscrubberimageitemview)

# NSScrubberImageItemView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A concrete view subclass for displaying images in a scrubber items.

## Declaration

```swift
class NSScrubberImageItemView
```

<a id="overview"></a>

## Overview

Provide the image you want to display in the scrubber item to the [image](nsscrubberimageitemview/image.md) property. If you want finer control over the appearance of the image, you can access the underlying image view using the [imageView](nsscrubberimageitemview/imageview.md) property.

The image is scaled proportionally to fit the view’s frame. Use the [imageAlignment](nsscrubberimageitemview/imagealignment.md) property to determine how the scaled image is cropped within that frame.

## Topics

### Providing image content

- [image](nsscrubberimageitemview/image.md): The image displayed by the scrubber item.
- [imageView](nsscrubberimageitemview/imageview.md): The image view that the scrubber item uses to display its image.

### Configuring the appearance

- [imageAlignment](nsscrubberimageitemview/imagealignment.md): The alignment of the image within the scrubber item.

## Relationships

### Inherits From

- [NSScrubberItemView](nsscrubberitemview.md)

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

### Scrubber items

- [NSScrubberItemView](nsscrubberitemview.md): An item at a specific index position in the scrubber.
- [NSScrubberArrangedView](nsscrubberarrangedview.md): An abstract base class for the views whose layout is managed by a scrubber.
- [NSScrubberSelectionStyle](nsscrubberselectionstyle.md): An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
- [NSScrubberSelectionView](nsscrubberselectionview.md): An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.

# NSScrubberImageItemView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A concrete view subclass for displaying images in a scrubber items.

## Declaration

```objectivec
@interface NSScrubberImageItemView : NSScrubberItemView
```

<a id="overview"></a>

## Overview

Provide the image you want to display in the scrubber item to the [image](nsscrubberimageitemview/image.md) property. If you want finer control over the appearance of the image, you can access the underlying image view using the [imageView](nsscrubberimageitemview/imageview.md) property.

The image is scaled proportionally to fit the view’s frame. Use the [imageAlignment](nsscrubberimageitemview/imagealignment.md) property to determine how the scaled image is cropped within that frame.

## Topics

### Providing image content

- [image](nsscrubberimageitemview/image.md): The image displayed by the scrubber item.
- [imageView](nsscrubberimageitemview/imageview.md): The image view that the scrubber item uses to display its image.

### Configuring the appearance

- [imageAlignment](nsscrubberimageitemview/imagealignment.md): The alignment of the image within the scrubber item.

## Relationships

### Inherits From

- [NSScrubberItemView](nsscrubberitemview.md)

## See Also

### Scrubber items

- [NSScrubberItemView](nsscrubberitemview.md): An item at a specific index position in the scrubber.
- [NSScrubberArrangedView](nsscrubberarrangedview.md): An abstract base class for the views whose layout is managed by a scrubber.
- [NSScrubberSelectionStyle](nsscrubberselectionstyle.md): An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
- [NSScrubberSelectionView](nsscrubberselectionview.md): An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.
