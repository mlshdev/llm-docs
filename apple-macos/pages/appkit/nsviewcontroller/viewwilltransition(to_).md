> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/viewwilltransition(to:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/viewwilltransition(to:))

# viewWillTransition(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, called when its view is about to be resized.

## Declaration

```swift
func viewWillTransition(to newSize: NSSize)
```

## Parameters

- `newSize`: The new size for the view controller’s view.

<a id="Discussion"></a>

## Discussion

Override this method if you want to change layout in response to the change in size, potentially in an animated way.

## See Also

### Configuring an App Extension View Controller

- [extensionContext](extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [sourceItemView](sourceitemview.md)

# viewWillTransitionToSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, called when its view is about to be resized.

## Declaration

```objectivec
- (void) viewWillTransitionToSize:(NSSize) newSize;
```

## Parameters

- `newSize`: The new size for the view controller’s view.

<a id="Discussion"></a>

## Discussion

Override this method if you want to change layout in response to the change in size, potentially in an animated way.

## See Also

### Configuring an App Extension View Controller

- [extensionContext](extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [sourceItemView](sourceitemview.md)
