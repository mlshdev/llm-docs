> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitystatictext](https://developer.apple.com/documentation/appkit/nsaccessibilitystatictext)

# NSAccessibilityStaticText (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as static text.

## Declaration

```swift
protocol NSAccessibilityStaticText : NSAccessibilityElementProtocol
```

<a id="overview"></a>

## Overview

Use this protocol when you want to represent short pieces of text, such as headers or labels. For longer blocks of text, use the [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md) protocol.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityAttributedString(for:)](nsaccessibilitystatictext/accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityValue()](nsaccessibilitystatictext/accessibilityvalue%28%29.md): Returns the text that the accessibility element displays.
- [accessibilityVisibleCharacterRange()](nsaccessibilitystatictext/accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)

### Conforming Types

- [NSComboBox](nscombobox.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSTextField](nstextfield.md)
- [NSTextView](nstextview.md)
- [NSTokenField](nstokenfield.md)

## See Also

### Text

- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as navigable static text.

# NSAccessibilityStaticText (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as static text.

## Declaration

```objectivec
@protocol NSAccessibilityStaticText <NSAccessibilityElement>
```

<a id="overview"></a>

## Overview

Use this protocol when you want to represent short pieces of text, such as headers or labels. For longer blocks of text, use the [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md) protocol.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityAttributedStringForRange:](nsaccessibilitystatictext/accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityValue](nsaccessibilitystatictext/accessibilityvalue%28%29.md): Returns the text that the accessibility element displays.
- [accessibilityVisibleCharacterRange](nsaccessibilitystatictext/accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.

## Relationships

### Inherits From

- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)

### Inherited By

- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)

## See Also

### Text

- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as navigable static text.
