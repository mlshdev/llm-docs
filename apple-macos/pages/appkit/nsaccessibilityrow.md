> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityrow](https://developer.apple.com/documentation/appkit/nsaccessibilityrow)

# NSAccessibilityRow (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a row for a table, list, or outline view.

## Declaration

```swift
protocol NSAccessibilityRow : NSAccessibilityGroup
```

<a id="overview"></a>

## Overview

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityDisclosureLevel()](nsaccessibilityrow/accessibilitydisclosurelevel%28%29.md): Returns the indention level for the row.
- [accessibilityIndex()](nsaccessibilityrow/accessibilityindex%28%29.md): Returns the index for the row.

## Relationships

### Inherits From

- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityGroup](nsaccessibilitygroup.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTableRowView](nstablerowview.md)

## See Also

### Lists

- [NSAccessibilityTable](nsaccessibilitytable.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a table view.
- [NSAccessibilityList](nsaccessibilitylist.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a list view.
- [NSAccessibilityOutline](nsaccessibilityoutline.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as an outline view.

# NSAccessibilityRow (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a row for a table, list, or outline view.

## Declaration

```objectivec
@protocol NSAccessibilityRow <NSAccessibilityGroup>
```

<a id="overview"></a>

## Overview

You can further enhance the adopting element by implementing any of the information properties or action methods that the [NSAccessibility](nsaccessibilityprotocol.md) protocol declares.

> **Explicit Implementation Required**

>  Any class that adopts this protocol must implement all of its methods, and the required methods of any protocol it inherits from. The compiler may require you to override some methods that your ancestors have already implemented. Simply follow the compiler’s warnings, and reimplement these methods as necessary.

## Topics

### Supporting Accessibility

- [accessibilityDisclosureLevel](nsaccessibilityrow/accessibilitydisclosurelevel%28%29.md): Returns the indention level for the row.
- [accessibilityIndex](nsaccessibilityrow/accessibilityindex%28%29.md): Returns the index for the row.

## Relationships

### Inherits From

- [NSAccessibilityGroup](nsaccessibilitygroup.md)

### Conforming Types

- [NSTableRowView](nstablerowview.md)

## See Also

### Lists

- [NSAccessibilityTable](nsaccessibilitytable.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a table view.
- [NSAccessibilityList](nsaccessibilitylist.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as a list view.
- [NSAccessibilityOutline](nsaccessibilityoutline.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to act as an outline view.
