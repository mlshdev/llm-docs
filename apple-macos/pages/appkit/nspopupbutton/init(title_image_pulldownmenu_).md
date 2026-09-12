> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/init(title:image:pulldownmenu:)](https://developer.apple.com/documentation/appkit/nspopupbutton/init(title:image:pulldownmenu:))

# init(title:image:pullDownMenu:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a standard pull-down button with a title, optional image, and menu.

## Declaration

```swift
@backDeployed(before: macOS 15.0)
@MainActor @preconcurrency convenience init(title: String, image: NSImage? = nil, pullDownMenu: NSMenu)
```

## Parameters

- `title`: The localized title string that is displayed on the button.
- `image`: The icon that is displayed on the button.
- `pullDownMenu`: The pull-down menu to present when interacting with the button.

<a id="return-value"></a>

## Return Value

An initialized pull-down button object.

<a id="discussion"></a>

## Discussion

Pull-down buttons created using this method have the `usesItemFromMenu` property set to `false`.
