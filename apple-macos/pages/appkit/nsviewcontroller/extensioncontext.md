> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/extensioncontext](https://developer.apple.com/documentation/appkit/nsviewcontroller/extensioncontext)

# extensionContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, the app extension context.

## Declaration

```swift
var extensionContext: NSExtensionContext? { get }
```

<a id="Discussion"></a>

## Discussion

If the view controller is *not* part of an app extension, the value of this property is `nil`.

By checking for `nil` you can employ this method to determine whether the view controller is part of an app or an app extension, for the purpose of conditionalizing your view controller implementation. Refer to [NSExtensionContext](https://developer.apple.com/documentation/foundation/nsextensioncontext) for information about the extension context.

## See Also

### Configuring an App Extension View Controller

- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransition(to:)](viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](sourceitemview.md)

# extensionContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, the app extension context.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSExtensionContext * extensionContext;
```

<a id="Discussion"></a>

## Discussion

If the view controller is *not* part of an app extension, the value of this property is `nil`.

By checking for `nil` you can employ this method to determine whether the view controller is part of an app or an app extension, for the purpose of conditionalizing your view controller implementation. Refer to [NSExtensionContext](https://developer.apple.com/documentation/foundation/nsextensioncontext) for information about the extension context.

## See Also

### Configuring an App Extension View Controller

- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransitionToSize:](viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](sourceitemview.md)
