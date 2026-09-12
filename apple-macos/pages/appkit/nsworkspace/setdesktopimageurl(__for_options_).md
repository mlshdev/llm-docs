> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/setdesktopimageurl(_:for:options:)](https://developer.apple.com/documentation/appkit/nsworkspace/setdesktopimageurl(_:for:options:))

# setDesktopImageURL(\_:for:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the desktop image for the given screen to the image at the specified URL.

## Declaration

```swift
func setDesktopImageURL(_ url: URL, for screen: NSScreen, options: [NSWorkspace.DesktopImageOptionKey : Any] = [:]) throws
```

## Parameters

- `url`: A file URL to the image. The URL must not be `nil`.
- `screen`: The screen on which to set the desktop image.
- `options`: The options dictionary may contain any of the keys in [NSWorkspace.DesktopImageOptionKey](desktopimageoptionkey.md), which control how the image is scaled on the screen.

<a id="Discussion"></a>

## Discussion

Instead of presenting a user interface for picking the options, choose appropriate defaults and allow the user to adjust them in the System Preference Pane.

You must call this method from your app’s main thread.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Desktop Image

- [desktopImageURL(for:)](desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [desktopImageOptions(for:)](desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
- [NSWorkspace.DesktopImageOptionKey](desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.

# setDesktopImageURL:forScreen:options:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the desktop image for the given screen to the image at the specified URL.

## Declaration

```objectivec
- (BOOL) setDesktopImageURL:(NSURL *) url forScreen:(NSScreen *) screen options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `url`: A file URL to the image. The URL must not be `nil`.
- `screen`: The screen on which to set the desktop image.
- `options`: The options dictionary may contain any of the keys in [NSWorkspaceDesktopImageOptionKey](desktopimageoptionkey.md), which control how the image is scaled on the screen.
- `error`: An error object indicating the success or failure of the action. Specify a variable to store the error object. The method sets this variable to `nil` on success, or to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object if a problem occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method set the desktop image; otherwise [false](https://developer.apple.com/documentation/swift/false). If the method returns [false](https://developer.apple.com/documentation/swift/false), the `error` parameter provides additional information.

<a id="Discussion"></a>

## Discussion

Instead of presenting a user interface for picking the options, choose appropriate defaults and allow the user to adjust them in the System Preference Pane.

You must call this method from your app’s main thread.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Desktop Image

- [desktopImageURLForScreen:](desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [desktopImageOptionsForScreen:](desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
- [NSWorkspaceDesktopImageOptionKey](desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.
