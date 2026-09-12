> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/shouldunselect](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/shouldunselect)

# shouldUnselect (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

A Boolean value that indicates whether the preference pane is able to be deselected.

## Declaration

```swift
var shouldUnselect: NSPreferencePaneUnselectReply { get }
```

<a id="Discussion"></a>

## Discussion

The possible values are described in Help Menu Support. The default implementation always returns [NSPreferencePaneUnselectReply.unselectNow](../nspreferencepaneunselectreply/unselectnow.md). Override this method if your pane needs to cancel or delay a deselect action. If you override this method to return [NSPreferencePaneUnselectReply.unselectLater](../nspreferencepaneunselectreply/unselectlater.md), you must invoke [reply(toShouldUnselect:)](reply%28toshouldunselect_%29.md) when you have determined whether or not the deselection can occur.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect()](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect()](didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect()](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect()](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [isSelected](isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [reply(toShouldUnselect:)](reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.

# shouldUnselect (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

A Boolean value that indicates whether the preference pane is able to be deselected.

## Declaration

```objectivec
@property (readonly) NSPreferencePaneUnselectReply shouldUnselect;
```

<a id="Discussion"></a>

## Discussion

The possible values are described in Help Menu Support. The default implementation always returns [NSUnselectNow](../nspreferencepaneunselectreply/unselectnow.md). Override this method if your pane needs to cancel or delay a deselect action. If you override this method to return [NSUnselectLater](../nspreferencepaneunselectreply/unselectlater.md), you must invoke [replyToShouldUnselect:](reply%28toshouldunselect_%29.md) when you have determined whether or not the deselection can occur.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [didSelect](didselect%28%29.md): Notifies the preference pane that the main app has just displayed the preference pane’s main view.
- [willUnselect](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [selected](isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [replyToShouldUnselect:](reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.
