> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipconfiguration](https://developer.apple.com/documentation/uikit/uitooltipconfiguration)

# UIToolTipConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object that a tooltip interaction delegate uses to describe the tooltip settings.

## Declaration

```swift
@MainActor class UIToolTipConfiguration
```

<a id="overview"></a>

## Overview

Use a tooltip configuration to specify:

- The text that appears in the tooltip.
- The region that the pointer must hover over to trigger the appearance of the tooltip.

A [UIToolTipInteraction](uitooltipinteraction.md) object asks for a configuration from its [delegate](uitooltipinteraction/delegate.md) by calling the delegate method [toolTipInteraction(\_:configurationAt:)](uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md).

## Topics

### Creating a tooltip configuration

- [init(toolTip:)](uitooltipconfiguration/init%28tooltip_%29.md): Creates a tooltip configuration and sets the tooltip text.
- [init(toolTip:in:)](uitooltipconfiguration/init%28tooltip_in_%29.md): Creates a tooltip configuration, and sets the tooltip text and hover region within the view or control.

### Accessing the configuration settings

- [toolTip](uitooltipconfiguration/tooltip.md): The text to display in the tooltip.
- [sourceRect](uitooltipconfiguration/sourcerect-8zvo1.md): The region of the view or control where the pointer must hover to trigger the appearance of the tooltip.

### Initializers

- [init(toolTip:inRect:)](uitooltipconfiguration/init%28tooltip_inrect_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Providing a tooltip configuration

- [toolTipInteraction(\_:configurationAt:)](uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md): Asks the delegate for a tooltip configuration that describes the tooltip settings.

# UIToolTipConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object that a tooltip interaction delegate uses to describe the tooltip settings.

## Declaration

```objectivec
@interface UIToolTipConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use a tooltip configuration to specify:

- The text that appears in the tooltip.
- The region that the pointer must hover over to trigger the appearance of the tooltip.

A [UIToolTipInteraction](uitooltipinteraction.md) object asks for a configuration from its [delegate](uitooltipinteraction/delegate.md) by calling the delegate method [toolTipInteraction:configurationAtPoint:](uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md).

## Topics

### Creating a tooltip configuration

- [configurationWithToolTip:](uitooltipconfiguration/init%28tooltip_%29.md): Creates a tooltip configuration and sets the tooltip text.
- [configurationWithToolTip:inRect:](uitooltipconfiguration/init%28tooltip_in_%29.md): Creates a tooltip configuration, and sets the tooltip text and hover region within the view or control.

### Accessing the configuration settings

- [toolTip](uitooltipconfiguration/tooltip.md): The text to display in the tooltip.
- [sourceRect](uitooltipconfiguration/sourcerect-iltv.md): The region of the view or control where the pointer must hover to trigger the appearance of the tooltip.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Providing a tooltip configuration

- [toolTipInteraction:configurationAtPoint:](uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md): Asks the delegate for a tooltip configuration that describes the tooltip settings.
