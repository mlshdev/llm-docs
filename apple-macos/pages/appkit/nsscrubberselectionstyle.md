> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberselectionstyle](https://developer.apple.com/documentation/appkit/nsscrubberselectionstyle)

# NSScrubberSelectionStyle (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.

## Declaration

```swift
@MainActor class NSScrubberSelectionStyle
```

<a id="overview"></a>

## Overview

Choose a selection style ([outlineOverlay](nsscrubberselectionstyle/outlineoverlay.md) or [roundedBackground](nsscrubberselectionstyle/roundedbackground.md)), or create a custom selection style by subclassing [NSScrubberSelectionStyle](nsscrubberselectionstyle.md) and overriding [makeSelectionView()](nsscrubberselectionstyle/makeselectionview%28%29.md).

## Topics

### Using built-in styles

- [outlineOverlay](nsscrubberselectionstyle/outlineoverlay.md): A built-in selection style that draws the outline of the scrubber item.
- [roundedBackground](nsscrubberselectionstyle/roundedbackground.md): A built-in selection style that draws a rounded rectangle as the background of the scrubber item.

### Creating a selection style

- [init()](nsscrubberselectionstyle/init%28%29.md): Initializes a new scrubber selection style.
- [init(coder:)](nsscrubberselectionstyle/init%28coder_%29.md): Initializes a scrubber selection style when included from a nib or Storyboard.
- [makeSelectionView()](nsscrubberselectionstyle/makeselectionview%28%29.md): Provides an opportunity to create a customized scrubber selection style.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Scrubber items

- [NSScrubberItemView](nsscrubberitemview.md): An item at a specific index position in the scrubber.
- [NSScrubberArrangedView](nsscrubberarrangedview.md): An abstract base class for the views whose layout is managed by a scrubber.
- [NSScrubberImageItemView](nsscrubberimageitemview.md): A concrete view subclass for displaying images in a scrubber items.
- [NSScrubberSelectionView](nsscrubberselectionview.md): An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.

# NSScrubberSelectionStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.

## Declaration

```objectivec
@interface NSScrubberSelectionStyle : NSObject
```

<a id="overview"></a>

## Overview

Choose a selection style ([outlineOverlayStyle](nsscrubberselectionstyle/outlineoverlay.md) or [roundedBackgroundStyle](nsscrubberselectionstyle/roundedbackground.md)), or create a custom selection style by subclassing [NSScrubberSelectionStyle](nsscrubberselectionstyle.md) and overriding [makeSelectionView](nsscrubberselectionstyle/makeselectionview%28%29.md).

## Topics

### Using built-in styles

- [outlineOverlayStyle](nsscrubberselectionstyle/outlineoverlay.md): A built-in selection style that draws the outline of the scrubber item.
- [roundedBackgroundStyle](nsscrubberselectionstyle/roundedbackground.md): A built-in selection style that draws a rounded rectangle as the background of the scrubber item.

### Creating a selection style

- [init](nsscrubberselectionstyle/init%28%29.md): Initializes a new scrubber selection style.
- [initWithCoder:](nsscrubberselectionstyle/init%28coder_%29.md): Initializes a scrubber selection style when included from a nib or Storyboard.
- [makeSelectionView](nsscrubberselectionstyle/makeselectionview%28%29.md): Provides an opportunity to create a customized scrubber selection style.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Scrubber items

- [NSScrubberItemView](nsscrubberitemview.md): An item at a specific index position in the scrubber.
- [NSScrubberArrangedView](nsscrubberarrangedview.md): An abstract base class for the views whose layout is managed by a scrubber.
- [NSScrubberImageItemView](nsscrubberimageitemview.md): A concrete view subclass for displaying images in a scrubber items.
- [NSScrubberSelectionView](nsscrubberselectionview.md): An abstract base class for specifying the appearance of a highlighted or selected item in a scrubber.
- [NSScrubberTextItemView](nsscrubbertextitemview.md): A concrete view subclass for displaying text for an item in a scrubber.
