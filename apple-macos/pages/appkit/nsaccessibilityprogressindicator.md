> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprogressindicator](https://developer.apple.com/documentation/appkit/nsaccessibilityprogressindicator)

# NSAccessibilityProgressIndicator (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a progress indicator.

## Declaration

```swift
protocol NSAccessibilityProgressIndicator : NSAccessibilityGroup
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a progress indicator—a view that provides visual feedback to the user about the status of an ongoing task—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityValue()](nsaccessibilityprogressindicator/accessibilityvalue%28%29.md): Returns the progress indicator’s value.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSProgressIndicator](nsprogressindicator.md)

## See Also

### Loading

- [NSAccessibilityElementLoading](nsaccessibilityelementloading.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.

# NSAccessibilityProgressIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a progress indicator.

## Declaration

```objectivec
@protocol NSAccessibilityProgressIndicator <NSAccessibilityGroup>
```

<a id="overview"></a>

## Overview

Use this protocol when you want a user interface element to behave like a progress indicator—a view that provides visual feedback to the user about the status of an ongoing task—in the accessibility hierarchy.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityValue](nsaccessibilityprogressindicator/accessibilityvalue%28%29.md): Returns the progress indicator’s value.

## Relationships

### Inherits From

- [NSAccessibilityGroup](nsaccessibilitygroup.md)

### Conforming Types

- [NSProgressIndicator](nsprogressindicator.md)

## See Also

### Loading

- [NSAccessibilityElementLoading](nsaccessibilityelementloading.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.
