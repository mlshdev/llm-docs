> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityswitch](https://developer.apple.com/documentation/appkit/nsaccessibilityswitch)

# NSAccessibilitySwitch (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a switch.

## Declaration

```swift
protocol NSAccessibilitySwitch : NSAccessibilityButton
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a switch—a control that toggles between an on state and an off state—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityPerformDecrement()](nsaccessibilityswitch/accessibilityperformdecrement%28%29.md): Decrements the switch’s value.
- [accessibilityPerformIncrement()](nsaccessibilityswitch/accessibilityperformincrement%28%29.md): Increments the switch’s value.
- [accessibilityValue()](nsaccessibilityswitch/accessibilityvalue%28%29.md): Returns the switch’s value.

## Relationships

### Inherits From

- [NSAccessibilityButton](nsaccessibilitybutton.md)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSSwitch](nsswitch.md)

## See Also

### Buttons

- [NSAccessibilityButton](nsaccessibilitybutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a button.
- [NSAccessibilityRadioButton](nsaccessibilityradiobutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a radio button.
- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a checkbox.

# NSAccessibilitySwitch (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a switch.

## Declaration

```objectivec
@protocol NSAccessibilitySwitch <NSAccessibilityButton>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a switch—a control that toggles between an on state and an off state—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityPerformDecrement](nsaccessibilityswitch/accessibilityperformdecrement%28%29.md): Decrements the switch’s value.
- [accessibilityPerformIncrement](nsaccessibilityswitch/accessibilityperformincrement%28%29.md): Increments the switch’s value.
- [accessibilityValue](nsaccessibilityswitch/accessibilityvalue%28%29.md): Returns the switch’s value.

## Relationships

### Inherits From

- [NSAccessibilityButton](nsaccessibilitybutton.md)

### Conforming Types

- [NSSwitch](nsswitch.md)

## See Also

### Buttons

- [NSAccessibilityButton](nsaccessibilitybutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a button.
- [NSAccessibilityRadioButton](nsaccessibilityradiobutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a radio button.
- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a checkbox.
