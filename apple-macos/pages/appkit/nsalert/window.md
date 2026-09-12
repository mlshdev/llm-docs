> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/window](https://developer.apple.com/documentation/appkit/nsalert/window)

# window (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app-modal panel or document-modal sheet that corresponds to the alert.

## Declaration

```swift
var window: NSWindow { get }
```

<a id="Discussion"></a>

## Discussion

The alert’s window is of type [NSPanel](../nspanel.md). Use this property when you want to dismiss an alert created with the [beginSheetModal(for:completionHandler:)](beginsheetmodal%28for_completionhandler_%29.md) method within that method’s completion handler block.

# window (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app-modal panel or document-modal sheet that corresponds to the alert.

## Declaration

```objectivec
@property (strong, readonly) NSWindow * window;
```

<a id="Discussion"></a>

## Discussion

The alert’s window is of type [NSPanel](../nspanel.md). Use this property when you want to dismiss an alert created with the [beginSheetModalForWindow:completionHandler:](beginsheetmodal%28for_completionhandler_%29.md) method within that method’s completion handler block.
