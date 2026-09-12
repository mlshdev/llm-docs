> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberselectionview](https://developer.apple.com/documentation/appkit/nsscrubberselectionview)

# NSScrubberSelectionView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.

## Declaration

```swift
class NSScrubberSelectionView
```

<a id="overview"></a>

## Overview

Create a subclass to customize the selection or highlight appearance of an item in your scrubber control. You need to return an instance of your subclass from the [makeSelectionView()](nsscrubberselectionstyle/makeselectionview%28%29.md) method on [NSScrubberSelectionStyle](nsscrubberselectionstyle.md).

## Relationships

### Inherits From

- [NSScrubberArrangedView](nsscrubberarrangedview.md)

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
- [NSScrubberImageItemView](nsscrubberimageitemview.md): A concrete view subclass for displaying images in a scrubber items.
- [NSScrubberSelectionStyle](nsscrubberselectionstyle.md): An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.

# NSScrubberSelectionView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.

## Declaration

```objectivec
@interface NSScrubberSelectionView : NSScrubberArrangedView
```

<a id="overview"></a>

## Overview

Create a subclass to customize the selection or highlight appearance of an item in your scrubber control. You need to return an instance of your subclass from the [makeSelectionView](nsscrubberselectionstyle/makeselectionview%28%29.md) method on [NSScrubberSelectionStyle](nsscrubberselectionstyle.md).

## Relationships

### Inherits From

- [NSScrubberArrangedView](nsscrubberarrangedview.md)

## See Also

### Scrubber items

- [NSScrubberItemView](nsscrubberitemview.md): An item at a specific index position in the scrubber.
- [NSScrubberArrangedView](nsscrubberarrangedview.md): An abstract base class for the views whose layout is managed by a scrubber.
- [NSScrubberImageItemView](nsscrubberimageitemview.md): A concrete view subclass for displaying images in a scrubber items.
- [NSScrubberSelectionStyle](nsscrubberselectionstyle.md): An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.
