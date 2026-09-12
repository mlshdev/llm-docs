> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitynavigablestatictext](https://developer.apple.com/documentation/appkit/nsaccessibilitynavigablestatictext)

# NSAccessibilityNavigableStaticText (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as navigable static text.

## Declaration

```swift
protocol NSAccessibilityNavigableStaticText : NSAccessibilityStaticText
```

<a id="overview"></a>

## Overview

Use this protocol when you want to represent larger blocks of text. The protocol allows users to navigate through the text a line at a time or a word at a time using an assistive app. For shorter pieces of text (for example, labels or headers), use the [NSAccessibilityStaticText](nsaccessibilitystatictext.md) protocol instead.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityFrame(for:)](nsaccessibilitynavigablestatictext/accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLine(for:)](nsaccessibilitynavigablestatictext/accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRange(forLine:)](nsaccessibilitynavigablestatictext/accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityString(for:)](nsaccessibilitynavigablestatictext/accessibilitystring%28for_%29.md): Returns the substring for the specified range.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSComboBox](nscombobox.md)
- [NSSearchField](nssearchfield.md)
- [NSSecureTextField](nssecuretextfield.md)
- [NSTextField](nstextfield.md)
- [NSTextView](nstextview.md)
- [NSTokenField](nstokenfield.md)

## See Also

### Text

- [NSAccessibilityStaticText](nsaccessibilitystatictext.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as static text.

# NSAccessibilityNavigableStaticText (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as navigable static text.

## Declaration

```objectivec
@protocol NSAccessibilityNavigableStaticText <NSAccessibilityStaticText>
```

<a id="overview"></a>

## Overview

Use this protocol when you want to represent larger blocks of text. The protocol allows users to navigate through the text a line at a time or a word at a time using an assistive app. For shorter pieces of text (for example, labels or headers), use the [NSAccessibilityStaticText](nsaccessibilitystatictext.md) protocol instead.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityFrameForRange:](nsaccessibilitynavigablestatictext/accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLineForIndex:](nsaccessibilitynavigablestatictext/accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRangeForLine:](nsaccessibilitynavigablestatictext/accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityStringForRange:](nsaccessibilitynavigablestatictext/accessibilitystring%28for_%29.md): Returns the substring for the specified range.

## Relationships

### Inherits From

- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)

### Conforming Types

- [NSTextField](nstextfield.md)
- [NSTextView](nstextview.md)

## See Also

### Text

- [NSAccessibilityStaticText](nsaccessibilitystatictext.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as static text.
