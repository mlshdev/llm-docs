> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitybutton](https://developer.apple.com/documentation/appkit/nsaccessibilitybutton)

# NSAccessibilityButton (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a button.

## Declaration

```swift
protocol NSAccessibilityButton : NSAccessibilityElementProtocol
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a button—a control that triggers an action when the user clicks it—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel()](nsaccessibilitybutton/accessibilitylabel%28%29.md): Returns a short description of the button.
- [accessibilityPerformPress()](nsaccessibilitybutton/accessibilityperformpress%28%29.md): Simulates clicking the button.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md)
- [NSAccessibilityRadioButton](nsaccessibilityradiobutton.md)
- [NSAccessibilitySwitch](nsaccessibilityswitch.md)

### Conforming Types

- [NSButton](nsbutton.md)
- [NSPopUpButton](nspopupbutton.md)
- [NSStatusBarButton](nsstatusbarbutton.md)
- [NSSwitch](nsswitch.md)

## See Also

### Buttons

- [NSAccessibilityRadioButton](nsaccessibilityradiobutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a radio button.
- [NSAccessibilitySwitch](nsaccessibilityswitch.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a switch.
- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a checkbox.

# NSAccessibilityButton (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a button.

## Declaration

```objectivec
@protocol NSAccessibilityButton <NSAccessibilityElement>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a button—a control that triggers an action when the user clicks it—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityLabel](nsaccessibilitybutton/accessibilitylabel%28%29.md): Returns a short description of the button.
- [accessibilityPerformPress](nsaccessibilitybutton/accessibilityperformpress%28%29.md): Simulates clicking the button.

## Relationships

### Inherits From

- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)

### Inherited By

- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md)
- [NSAccessibilityRadioButton](nsaccessibilityradiobutton.md)
- [NSAccessibilitySwitch](nsaccessibilityswitch.md)

### Conforming Types

- [NSButton](nsbutton.md)

## See Also

### Buttons

- [NSAccessibilityRadioButton](nsaccessibilityradiobutton.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a radio button.
- [NSAccessibilitySwitch](nsaccessibilityswitch.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a switch.
- [NSAccessibilityCheckBox](nsaccessibilitycheckbox.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a checkbox.
