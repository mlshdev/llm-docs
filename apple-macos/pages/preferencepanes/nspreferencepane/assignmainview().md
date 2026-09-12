> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/assignmainview()](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/assignmainview())

# assignMainView() (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Locates and assigns the preference pane’s main view from the nib file loaded by [loadMainView()](loadmainview%28%29.md).

## Declaration

```swift
func assignMainView()
```

<a id="Discussion"></a>

## Discussion

The default implementation sets the receiver’s main view to the content view of the window referenced by the `_window` outlet. Before returning, [assignMainView()](assignmainview%28%29.md) releases the window and sets the `_window` outlet to `nil`. Returns the main view if successful, `nil` otherwise.

Override this method if your main view is located in the nib file loaded by [loadMainView()](loadmainview%28%29.md), but is not the content view of a window in the file. Call [NSPreferencePane](../nspreferencepane.md) to set the main view of the preference pane before returning. Also call [NSPreferencePane](../nspreferencepane.md), [NSPreferencePane](../nspreferencepane.md), and [NSPreferencePane](../nspreferencepane.md) to set the initial, first, and last keyboard focus views, respectively.

## See Also

### Loading the Main View

- [loadMainView()](loadmainview%28%29.md): Loads the preference pane’s user interface into its main view.
- [mainViewDidLoad()](mainviewdidload%28%29.md): Notifies the preference pane that the main view is set up and prepared to be displayed.

# assignMainView (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Locates and assigns the preference pane’s main view from the nib file loaded by [loadMainView](loadmainview%28%29.md).

## Declaration

```objectivec
- (void) assignMainView;
```

<a id="Discussion"></a>

## Discussion

The default implementation sets the receiver’s main view to the content view of the window referenced by the `_window` outlet. Before returning, [assignMainView](assignmainview%28%29.md) releases the window and sets the `_window` outlet to `nil`. Returns the main view if successful, `nil` otherwise.

Override this method if your main view is located in the nib file loaded by [loadMainView](loadmainview%28%29.md), but is not the content view of a window in the file. Call [NSPreferencePane](../nspreferencepane.md) to set the main view of the preference pane before returning. Also call [NSPreferencePane](../nspreferencepane.md), [NSPreferencePane](../nspreferencepane.md), and [NSPreferencePane](../nspreferencepane.md) to set the initial, first, and last keyboard focus views, respectively.

## See Also

### Loading the Main View

- [loadMainView](loadmainview%28%29.md): Loads the preference pane’s user interface into its main view.
- [mainViewDidLoad](mainviewdidload%28%29.md): Notifies the preference pane that the main view is set up and prepared to be displayed.
