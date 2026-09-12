> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/isselected](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/isselected)

# isSelected (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

A Boolean value that indicates whether the preference pane is currently selected.

## Declaration

```swift
var isSelected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if preference pane is currently selected by user, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect()](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect()](didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect()](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect()](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [shouldUnselect](shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [reply(toShouldUnselect:)](reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.

# selected (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

A Boolean value that indicates whether the preference pane is currently selected.

## Declaration

```objectivec
@property (readonly, getter=isSelected) BOOL selected;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if preference pane is currently selected by user, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect](didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [shouldUnselect](shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [replyToShouldUnselect:](reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.
