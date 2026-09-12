> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitylayoutarea](https://developer.apple.com/documentation/appkit/nsaccessibilitylayoutarea)

# NSAccessibilityLayoutArea (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout area.

## Declaration

```swift
protocol NSAccessibilityLayoutArea : NSAccessibilityGroup
```

<a id="overview"></a>

## Overview

Use this protocol when you want to create a canvas that contains layout items.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityChildren()](nsaccessibilitylayoutarea/accessibilitychildren%28%29.md): Returns the accessibility element’s children in the accessibility hierarchy.
- [accessibilityFocusedUIElement](nsaccessibilitylayoutarea/accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityLabel()](nsaccessibilitylayoutarea/accessibilitylabel%28%29.md): Returns a short description of the layout area.
- [accessibilitySelectedChildren()](nsaccessibilitylayoutarea/accessibilityselectedchildren%28%29.md): Returns the layout area’s currently selected children.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout Elements

- [NSAccessibilityLayoutItem](nsaccessibilitylayoutitem.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout item.

# NSAccessibilityLayoutArea (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout area.

## Declaration

```objectivec
@protocol NSAccessibilityLayoutArea <NSAccessibilityGroup>
```

<a id="overview"></a>

## Overview

Use this protocol when you want to create a canvas that contains layout items.

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityChildren](nsaccessibilitylayoutarea/accessibilitychildren%28%29.md): Returns the accessibility element’s children in the accessibility hierarchy.
- [accessibilityFocusedUIElement](nsaccessibilitylayoutarea/accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityLabel](nsaccessibilitylayoutarea/accessibilitylabel%28%29.md): Returns a short description of the layout area.
- [accessibilitySelectedChildren](nsaccessibilitylayoutarea/accessibilityselectedchildren%28%29.md): Returns the layout area’s currently selected children.

## Relationships

### Inherits From

- [NSAccessibilityGroup](nsaccessibilitygroup.md)

## See Also

### Layout Elements

- [NSAccessibilityLayoutItem](nsaccessibilitylayoutitem.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a layout item.
