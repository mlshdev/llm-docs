> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/style](https://developer.apple.com/documentation/appkit/nsalert/style)

# NSAlert.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The set of alert styles to style alerts in your app.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

Currently, there’s no visual difference between informational and warning alerts. You should only use the critical (or “caution”) alert style if warranted. For design guidance on alert styles, see [Human Interface Guidelines \> Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts#macOS). The default alert style is [NSAlert.Style.warning](style/warning.md).

## Topics

### Enumeration Cases

- [NSAlert.Style.critical](style/critical.md): An alert style to inform someone about a critical event.
- [NSAlert.Style.warning](style/warning.md): An alert style to warn someone about a current or impending event.
- [NSAlert.Style.informational](style/informational.md): An alert style to inform someone about a current or impending event.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring alerts

- [layout()](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.

# NSAlertStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The set of alert styles to style alerts in your app.

## Declaration

```objectivec
enum NSAlertStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

Currently, there’s no visual difference between informational and warning alerts. You should only use the critical (or “caution”) alert style if warranted. For design guidance on alert styles, see [Human Interface Guidelines \> Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts#macOS). The default alert style is [NSAlertStyleWarning](style/warning.md).

## Topics

### Enumeration Cases

- [NSAlertStyleCritical](style/critical.md): An alert style to inform someone about a critical event.
- [NSAlertStyleWarning](style/warning.md): An alert style to warn someone about a current or impending event.
- [NSAlertStyleInformational](style/informational.md): An alert style to inform someone about a current or impending event.

### Deprecated Symbols

- [NSCriticalAlertStyle](../nscriticalalertstyle.md): Deprecated.
- [NSWarningAlertStyle](../nswarningalertstyle.md): Deprecated. An alert used to warn the user about a current or impending event. The purpose is more than informational but not critical. This is the default alert style.
- [NSInformationalAlertStyle](../nsinformationalalertstyle.md): Deprecated. An alert used to inform the user about a current or impending event.

## See Also

### Configuring alerts

- [layout](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [accessoryView](accessoryview.md): The alert’s accessory view.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.
