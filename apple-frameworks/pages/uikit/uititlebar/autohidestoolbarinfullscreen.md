> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uititlebar/autohidestoolbarinfullscreen](https://developer.apple.com/documentation/uikit/uititlebar/autohidestoolbarinfullscreen)

# autoHidesToolbarInFullScreen (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

A Boolean value that determines whether the toolbar automatically hides in full-screen windows.

## Declaration

```swift
var autoHidesToolbarInFullScreen: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to automatically hide the toolbar when the window enters full-screen mode. While hidden, the user can view the toolbar and menu bar by moving the pointer to the top of the screen. Moving the pointer away from the top of the screen hides the toolbar and menu bar.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the toolbar

- [toolbar](toolbar.md): The toolbar displayed beneath or integrated with the title bar.
- [toolbarStyle](toolbarstyle.md): The style of the toolbar determining its appearance and location related to the title bar.
- [UITitlebarToolbarStyle](../uititlebartoolbarstyle.md): Styles that determine the toolbar’s appearance and location related to the title bar.

# autoHidesToolbarInFullScreen (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

A Boolean value that determines whether the toolbar automatically hides in full-screen windows.

## Declaration

```objectivec
@property (nonatomic) BOOL autoHidesToolbarInFullScreen;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to automatically hide the toolbar when the window enters full-screen mode. While hidden, the user can view the toolbar and menu bar by moving the pointer to the top of the screen. Moving the pointer away from the top of the screen hides the toolbar and menu bar.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the toolbar

- [toolbar](toolbar.md): The toolbar displayed beneath or integrated with the title bar.
- [toolbarStyle](toolbarstyle.md): The style of the toolbar determining its appearance and location related to the title bar.
- [UITitlebarToolbarStyle](../uititlebartoolbarstyle.md): Styles that determine the toolbar’s appearance and location related to the title bar.
