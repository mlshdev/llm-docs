> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputmode/currentinputmodedidchangenotification](https://developer.apple.com/documentation/uikit/uitextinputmode/currentinputmodedidchangenotification)

# currentInputModeDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the current input mode changes.

## Declaration

```swift
nonisolated class let currentInputModeDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The posting object is a [UITextInputMode](../uitextinputmode.md) instance.

# UITextInputCurrentInputModeDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the current input mode changes.

## Declaration

```objectivec
extern NSNotificationName const UITextInputCurrentInputModeDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The posting object is a [UITextInputMode](../uitextinputmode.md) instance.
