> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkdialogcontroller/parentwindow](https://developer.apple.com/documentation/gamekit/gkdialogcontroller/parentwindow)

# parentWindow (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The window that displays the dashboard.

## Declaration

```swift
@IBOutlet weak var parentWindow: NSWindow? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property before presenting a view controller. The window must be at least 800 x 600.

# parentWindow (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The window that displays the dashboard.

## Declaration

```objectivec
@property (weak, nullable) NSWindow * parentWindow;
```

<a id="Discussion"></a>

## Discussion

Set this property before presenting a view controller. The window must be at least 800 x 600.
