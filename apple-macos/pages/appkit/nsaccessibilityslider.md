> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityslider](https://developer.apple.com/documentation/appkit/nsaccessibilityslider)

# NSAccessibilitySlider (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a slider.

## Declaration

```swift
protocol NSAccessibilitySlider : NSAccessibilityElementProtocol
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a slider—a control that represents a continuous range of numerical values with a knob that represents the currently selected value—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel()](nsaccessibilityslider/accessibilitylabel%28%29.md): Returns a short description of the slider.
- [accessibilityPerformDecrement()](nsaccessibilityslider/accessibilityperformdecrement%28%29.md): Decrements the slider’s value.
- [accessibilityPerformIncrement()](nsaccessibilityslider/accessibilityperformincrement%28%29.md): Increments the slider’s value.
- [accessibilityValue()](nsaccessibilityslider/accessibilityvalue%28%29.md): Returns the slider’s value.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSSlider](nsslider.md)

## See Also

### Value Controls

- [NSAccessibilityStepper](nsaccessibilitystepper.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a stepper.

# NSAccessibilitySlider (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a slider.

## Declaration

```objectivec
@protocol NSAccessibilitySlider <NSAccessibilityElement>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a slider—a control that represents a continuous range of numerical values with a knob that represents the currently selected value—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel](nsaccessibilityslider/accessibilitylabel%28%29.md): Returns a short description of the slider.
- [accessibilityPerformDecrement](nsaccessibilityslider/accessibilityperformdecrement%28%29.md): Decrements the slider’s value.
- [accessibilityPerformIncrement](nsaccessibilityslider/accessibilityperformincrement%28%29.md): Increments the slider’s value.
- [accessibilityValue](nsaccessibilityslider/accessibilityvalue%28%29.md): Returns the slider’s value.

## Relationships

### Inherits From

- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)

### Conforming Types

- [NSSlider](nsslider.md)

## See Also

### Value Controls

- [NSAccessibilityStepper](nsaccessibilitystepper.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a stepper.
