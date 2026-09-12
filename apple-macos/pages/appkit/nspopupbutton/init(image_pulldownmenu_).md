> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/init(image:pulldownmenu:)](https://developer.apple.com/documentation/appkit/nspopupbutton/init(image:pulldownmenu:))

# init(image:pullDownMenu:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a standard pull-down button with a title, optional image, and menu.

## Declaration

```swift
@backDeployed(before: macOS 15.0)
@MainActor @preconcurrency convenience init(image: NSImage, pullDownMenu: NSMenu)
```

## Parameters

- `image`: The icon that is displayed on the button.
- `pullDownMenu`: The pull-down menu to present when interacting with the button.

<a id="return-value"></a>

## Return Value

An initialized pull-down button object.

<a id="discussion"></a>

## Discussion

Pull-down buttons created using this method have the `usesItemFromMenu` property set to `false`.
