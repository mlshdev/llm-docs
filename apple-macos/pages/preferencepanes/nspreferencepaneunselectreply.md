> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepaneunselectreply](https://developer.apple.com/documentation/preferencepanes/nspreferencepaneunselectreply)

# NSPreferencePaneUnselectReply (Swift)

**Framework:** Preference Panes  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Constants that indicate the preference pane’s availability to be deselected.

## Declaration

```swift
enum NSPreferencePaneUnselectReply
```

## Topics

### Replies

- [NSPreferencePaneUnselectReply.unselectCancel](nspreferencepaneunselectreply/unselectcancel.md): Cancel the deselection.
- [NSPreferencePaneUnselectReply.unselectNow](nspreferencepaneunselectreply/unselectnow.md): Continue the deselection.
- [NSPreferencePaneUnselectReply.unselectLater](nspreferencepaneunselectreply/unselectlater.md): Delay the deselection until the preference pane invokes [reply(toShouldUnselect:)](nspreferencepane/reply%28toshouldunselect_%29.md).

### Initializers

- [init(rawValue:)](nspreferencepaneunselectreply/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect()](nspreferencepane/willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect()](nspreferencepane/didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect()](nspreferencepane/willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect()](nspreferencepane/didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [isSelected](nspreferencepane/isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](nspreferencepane/shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [reply(toShouldUnselect:)](nspreferencepane/reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.

# NSPreferencePaneUnselectReply (Objective-C)

**Framework:** Preference Panes  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Constants that indicate the preference pane’s availability to be deselected.

## Declaration

```objectivec
enum NSPreferencePaneUnselectReply : NSUInteger;
```

## Topics

### Replies

- [NSUnselectCancel](nspreferencepaneunselectreply/unselectcancel.md): Cancel the deselection.
- [NSUnselectNow](nspreferencepaneunselectreply/unselectnow.md): Continue the deselection.
- [NSUnselectLater](nspreferencepaneunselectreply/unselectlater.md): Delay the deselection until the preference pane invokes [replyToShouldUnselect:](nspreferencepane/reply%28toshouldunselect_%29.md).

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect](nspreferencepane/willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect](nspreferencepane/didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect](nspreferencepane/willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect](nspreferencepane/didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [selected](nspreferencepane/isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](nspreferencepane/shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [replyToShouldUnselect:](nspreferencepane/reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.
