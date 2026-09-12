> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/reply(toshouldunselect:)](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/reply(toshouldunselect:))

# reply(toShouldUnselect:) (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies the main application of the preference pane’s ability to be deselected.

## Declaration

```swift
func reply(toShouldUnselect shouldUnselect: Bool)
```

<a id="Discussion"></a>

## Discussion

If you override [shouldUnselect](shouldunselect.md) to return [NSPreferencePaneUnselectReply.unselectLater](../nspreferencepaneunselectreply/unselectlater.md), you must invoke [reply(toShouldUnselect:)](reply%28toshouldunselect_%29.md) when you have determined whether or not the preference pane can be deselected.

You should not override this method.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect()](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect()](didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect()](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect()](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [isSelected](isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.

# replyToShouldUnselect: (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies the main application of the preference pane’s ability to be deselected.

## Declaration

```objectivec
- (void) replyToShouldUnselect:(BOOL) shouldUnselect;
```

<a id="Discussion"></a>

## Discussion

If you override [shouldUnselect](shouldunselect.md) to return [NSUnselectLater](../nspreferencepaneunselectreply/unselectlater.md), you must invoke [replyToShouldUnselect:](reply%28toshouldunselect_%29.md) when you have determined whether or not the preference pane can be deselected.

You should not override this method.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect](didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [selected](isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
