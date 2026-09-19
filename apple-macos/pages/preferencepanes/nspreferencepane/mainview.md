> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/preferencepanes/nspreferencepane/mainview

# mainView (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The main view of the preference pane.

## Declaration

```swift
var mainView: NSView { get set }
```

<a id="Discussion"></a>

## Discussion

Subclasses should not need to override this unless they override [loadMainView()](loadmainview%28%29.md) or [assignMainView()](assignmainview%28%29.md).

## See Also

### Getting the Bundle Information

- [bundle](bundle.md): The preference pane’s bundle.
- [mainNibName](mainnibname.md): The name of the preference pane’s nib file.

# mainView (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The main view of the preference pane.

## Declaration

```objectivec
@property (strong, nonnull) NSView * mainView;
```

<a id="Discussion"></a>

## Discussion

Subclasses should not need to override this unless they override [loadMainView](loadmainview%28%29.md) or [assignMainView](assignmainview%28%29.md).

## See Also

### Getting the Bundle Information

- [bundle](bundle.md): The preference pane’s bundle.
- [mainNibName](mainnibname.md): The name of the preference pane’s nib file.
