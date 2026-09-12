> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityradiobutton](https://developer.apple.com/documentation/appkit/nsaccessibilityradiobutton)

# NSAccessibilityRadioButton (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a radio button.

## Declaration

```swift
protocol NSAccessibilityRadioButton : NSAccessibilityButton
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a radio button—a control for constraining a selection to a single element from several elements—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityValue()](nsaccessibilityradiobutton/accessibilityvalue%28%29.md): Returns the radio button’s value.

## Relationships

### Inherits From

- [NSAccessibilityButton](nsaccessibilitybutton.md)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Buttons

- [NSAccessibilityButton](nsaccessibilitybutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a button.
- [NSAccessibilitySwitch](nsaccessibilityswitch.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a switch.
- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a checkbox.

# NSAccessibilityRadioButton (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a radio button.

## Declaration

```objectivec
@protocol NSAccessibilityRadioButton <NSAccessibilityButton>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a radio button—a control for constraining a selection to a single element from several elements—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityValue](nsaccessibilityradiobutton/accessibilityvalue%28%29.md): Returns the radio button’s value.

## Relationships

### Inherits From

- [NSAccessibilityButton](nsaccessibilitybutton.md)

## See Also

### Buttons

- [NSAccessibilityButton](nsaccessibilitybutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a button.
- [NSAccessibilitySwitch](nsaccessibilityswitch.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a switch.
- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a checkbox.
