> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/preferredmaximumsize](https://developer.apple.com/documentation/appkit/nsviewcontroller/preferredmaximumsize)

# preferredMaximumSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.

## Declaration

```swift
var preferredMaximumSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

An app extension should return the maximum dimensions that are potentially useful for its root view, based on the items the service has been sent.  By default, the value of this property is a large or infinite size.

## See Also

### Related Documentation

- [preferredContentSize](preferredcontentsize.md): The desired size of the view controller’s view, in screen units.

### Configuring an App Extension View Controller

- [extensionContext](extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransition(to:)](viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](sourceitemview.md)

# preferredMaximumSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.

## Declaration

```objectivec
@property (readonly) NSSize preferredMaximumSize;
```

<a id="Discussion"></a>

## Discussion

An app extension should return the maximum dimensions that are potentially useful for its root view, based on the items the service has been sent.  By default, the value of this property is a large or infinite size.

## See Also

### Related Documentation

- [preferredContentSize](preferredcontentsize.md): The desired size of the view controller’s view, in screen units.

### Configuring an App Extension View Controller

- [extensionContext](extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredScreenOrigin](preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransitionToSize:](viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](sourceitemview.md)
