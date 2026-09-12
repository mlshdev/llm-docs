> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/mainviewdidload()](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/mainviewdidload())

# mainViewDidLoad() (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies the preference pane that the main view is set up and prepared to be displayed.

## Declaration

```swift
func mainViewDidLoad()
```

<a id="Discussion"></a>

## Discussion

Invoked by the default implementation of [loadMainView()](loadmainview%28%29.md) after the main nib file has been loaded and the main view of the preference pane has been set. The default implementation does nothing. Override this method to initialize the main view with the current preference settings.

## See Also

### Loading the Main View

- [loadMainView()](loadmainview%28%29.md): Loads the preference pane’s user interface into its main view.
- [assignMainView()](assignmainview%28%29.md): Locates and assigns the preference pane’s main view from the nib file loaded by [loadMainView()](loadmainview%28%29.md).

# mainViewDidLoad (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies the preference pane that the main view is set up and prepared to be displayed.

## Declaration

```objectivec
- (void) mainViewDidLoad;
```

<a id="Discussion"></a>

## Discussion

Invoked by the default implementation of [loadMainView](loadmainview%28%29.md) after the main nib file has been loaded and the main view of the preference pane has been set. The default implementation does nothing. Override this method to initialize the main view with the current preference settings.

## See Also

### Loading the Main View

- [loadMainView](loadmainview%28%29.md): Loads the preference pane’s user interface into its main view.
- [assignMainView](assignmainview%28%29.md): Locates and assigns the preference pane’s main view from the nib file loaded by [loadMainView](loadmainview%28%29.md).
