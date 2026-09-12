> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberarrangedview](https://developer.apple.com/documentation/appkit/nsscrubberarrangedview)

# NSScrubberArrangedView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract base class for the views whose layout is managed by a scrubber.

## Declaration

```swift
class NSScrubberArrangedView
```

## Topics

### Managing selection and highlighting

- [isHighlighted](nsscrubberarrangedview/ishighlighted.md): A Boolean value that specifies whether the view is currently highlighted.
- [isSelected](nsscrubberarrangedview/isselected.md): A Boolean value that specifies whether the current view is selected.

### Controlling the layout

- [apply(\_:)](nsscrubberarrangedview/apply%28__%29.md): Updates the layout of the arranged view to respect the provided layout attributes.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Inherited By

- [NSScrubberItemView](nsscrubberitemview.md)
- [NSScrubberSelectionView](nsscrubberselectionview.md)

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
- [NSScrubberImageItemView](nsscrubberimageitemview.md): A concrete view subclass for displaying images in a scrubber items.
- [NSScrubberSelectionStyle](nsscrubberselectionstyle.md): An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
- [NSScrubberSelectionView](nsscrubberselectionview.md): An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.

# NSScrubberArrangedView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract base class for the views whose layout is managed by a scrubber.

## Declaration

```objectivec
@interface NSScrubberArrangedView : NSView
```

## Topics

### Managing selection and highlighting

- [highlighted](nsscrubberarrangedview/ishighlighted.md): A Boolean value that specifies whether the view is currently highlighted.
- [selected](nsscrubberarrangedview/isselected.md): A Boolean value that specifies whether the current view is selected.

### Controlling the layout

- [applyLayoutAttributes:](nsscrubberarrangedview/apply%28__%29.md): Updates the layout of the arranged view to respect the provided layout attributes.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Inherited By

- [NSScrubberItemView](nsscrubberitemview.md)
- [NSScrubberSelectionView](nsscrubberselectionview.md)

## See Also

### Scrubber items

- [NSScrubberItemView](nsscrubberitemview.md): An item at a specific index position in the scrubber.
- [NSScrubberImageItemView](nsscrubberimageitemview.md): A concrete view subclass for displaying images in a scrubber items.
- [NSScrubberSelectionStyle](nsscrubberselectionstyle.md): An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
- [NSScrubberSelectionView](nsscrubberselectionview.md): An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.
