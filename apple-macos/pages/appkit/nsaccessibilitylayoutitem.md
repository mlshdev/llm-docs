> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitylayoutitem](https://developer.apple.com/documentation/appkit/nsaccessibilitylayoutitem)

# NSAccessibilityLayoutItem (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout item.

## Declaration

```swift
protocol NSAccessibilityLayoutItem : NSAccessibilityGroup
```

<a id="overview"></a>

## Overview

Use this protocol when you want to create a layout item, a repositionable and resizeable item inside a layout area.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [setAccessibilityFrame(\_:)](nsaccessibilitylayoutitem/setaccessibilityframe%28__%29.md): Sets the accessibility element’s frame.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout Elements

- [NSAccessibilityLayoutArea](nsaccessibilitylayoutarea.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout area.

# NSAccessibilityLayoutItem (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout item.

## Declaration

```objectivec
@protocol NSAccessibilityLayoutItem <NSAccessibilityGroup>
```

<a id="overview"></a>

## Overview

Use this protocol when you want to create a layout item, a repositionable and resizeable item inside a layout area.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [setAccessibilityFrame:](nsaccessibilitylayoutitem/setaccessibilityframe%28__%29.md): Sets the accessibility element’s frame.

## Relationships

### Inherits From

- [NSAccessibilityGroup](nsaccessibilitygroup.md)

## See Also

### Layout Elements

- [NSAccessibilityLayoutArea](nsaccessibilitylayoutarea.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout area.
