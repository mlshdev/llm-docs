> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityimage](https://developer.apple.com/documentation/appkit/nsaccessibilityimage)

# NSAccessibilityImage (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as an image.

## Declaration

```swift
protocol NSAccessibilityImage : NSAccessibilityElementProtocol
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like an image\_ \_in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel()](nsaccessibilityimage/accessibilitylabel%28%29.md): Returns a short description of the image’s label.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSImageView](nsimageview.md)

## See Also

### Images and Color

- [NSAccessibilityColor](nsaccessibilitycolor.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a color.

# NSAccessibilityImage (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as an image.

## Declaration

```objectivec
@protocol NSAccessibilityImage <NSAccessibilityElement>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like an image\_ \_in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel](nsaccessibilityimage/accessibilitylabel%28%29.md): Returns a short description of the image’s label.

## Relationships

### Inherits From

- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)

### Conforming Types

- [NSImageView](nsimageview.md)

## See Also

### Images and Color

- [NSAccessibilityColor](nsaccessibilitycolor.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a color.
