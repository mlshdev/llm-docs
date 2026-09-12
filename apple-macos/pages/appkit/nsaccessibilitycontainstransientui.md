> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycontainstransientui](https://developer.apple.com/documentation/appkit/nsaccessibilitycontainstransientui)

# NSAccessibilityContainsTransientUI (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to support dynamic UI changes.

## Declaration

```swift
protocol NSAccessibilityContainsTransientUI : NSAccessibilityElementProtocol
```

<a id="overview"></a>

## Overview

Use this protocol to support accessibility in a UI that changes dynamically—usually in response to mouse-hover events.

Use this protocol in addition to another role-based protocol. See [Custom Controls](custom-controls.md).

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityPerformShowAlternateUI()](nsaccessibilitycontainstransientui/accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI()](nsaccessibilitycontainstransientui/accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [isAccessibilityAlternateUIVisible()](nsaccessibilitycontainstransientui/isaccessibilityalternateuivisible%28%29.md): Returns a Boolean value that determines whether the accessibility element’s alternative UI is currently visible.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSAccessibilityContainsTransientUI (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to support dynamic UI changes.

## Declaration

```objectivec
@protocol NSAccessibilityContainsTransientUI <NSAccessibilityElement>
```

<a id="overview"></a>

## Overview

Use this protocol to support accessibility in a UI that changes dynamically—usually in response to mouse-hover events.

Use this protocol in addition to another role-based protocol. See [Custom Controls](custom-controls.md).

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityPerformShowAlternateUI](nsaccessibilitycontainstransientui/accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI](nsaccessibilitycontainstransientui/accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [isAccessibilityAlternateUIVisible](nsaccessibilitycontainstransientui/isaccessibilityalternateuivisible%28%29.md): Returns a Boolean value that determines whether the accessibility element’s alternative UI is currently visible.

## Relationships

### Inherits From

- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
