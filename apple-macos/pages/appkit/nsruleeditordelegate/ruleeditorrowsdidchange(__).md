> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditordelegate/ruleeditorrowsdidchange(_:)](https://developer.apple.com/documentation/appkit/nsruleeditordelegate/ruleeditorrowsdidchange(_:))

# ruleEditorRowsDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the receiver that a rule editor’s rows changed.

## Declaration

```swift
@MainActor optional func ruleEditorRowsDidChange(_ notification: Notification)
```

## Parameters

- `notification`: A notification named[rowsDidChangeNotification](../nsruleeditor/rowsdidchangenotification.md).

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, [NSRuleEditor](../nsruleeditor.md) automatically registers its delegate to receive [rowsDidChangeNotification](../nsruleeditor/rowsdidchangenotification.md) notifications.

# ruleEditorRowsDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the receiver that a rule editor’s rows changed.

## Declaration

```objectivec
- (void) ruleEditorRowsDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named[NSRuleEditorRowsDidChangeNotification](../nsruleeditor/rowsdidchangenotification.md).

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, [NSRuleEditor](../nsruleeditor.md) automatically registers its delegate to receive [NSRuleEditorRowsDidChangeNotification](../nsruleeditor/rowsdidchangenotification.md) notifications.
