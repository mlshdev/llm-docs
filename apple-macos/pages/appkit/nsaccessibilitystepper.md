> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitystepper](https://developer.apple.com/documentation/appkit/nsaccessibilitystepper)

# NSAccessibilityStepper (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a stepper.

## Declaration

```swift
protocol NSAccessibilityStepper : NSAccessibilityElementProtocol
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a stepper—a control with up and down arrow buttons for incrementing or decrementing a value—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel()](nsaccessibilitystepper/accessibilitylabel%28%29.md): Returns a short description of the stepper.
- [accessibilityPerformDecrement()](nsaccessibilitystepper/accessibilityperformdecrement%28%29.md): Decrements the stepper’s value.
- [accessibilityPerformIncrement()](nsaccessibilitystepper/accessibilityperformincrement%28%29.md): Increments the stepper’s value.
- [accessibilityValue()](nsaccessibilitystepper/accessibilityvalue%28%29.md): Returns the stepper’s value.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSStepper](nsstepper.md)

## See Also

### Value Controls

- [NSAccessibilitySlider](nsaccessibilityslider.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a slider.

# NSAccessibilityStepper (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a stepper.

## Declaration

```objectivec
@protocol NSAccessibilityStepper <NSAccessibilityElement>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a stepper—a control with up and down arrow buttons for incrementing or decrementing a value—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel](nsaccessibilitystepper/accessibilitylabel%28%29.md): Returns a short description of the stepper.
- [accessibilityPerformDecrement](nsaccessibilitystepper/accessibilityperformdecrement%28%29.md): Decrements the stepper’s value.
- [accessibilityPerformIncrement](nsaccessibilitystepper/accessibilityperformincrement%28%29.md): Increments the stepper’s value.
- [accessibilityValue](nsaccessibilitystepper/accessibilityvalue%28%29.md): Returns the stepper’s value.

## Relationships

### Inherits From

- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)

### Conforming Types

- [NSStepper](nsstepper.md)

## See Also

### Value Controls

- [NSAccessibilitySlider](nsaccessibilityslider.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a slider.
