> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/preferredscreenorigin](https://developer.apple.com/documentation/appkit/nsviewcontroller/preferredscreenorigin)

# preferredScreenOrigin (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, the preferred screen origin.

## Declaration

```swift
var preferredScreenOrigin: NSPoint { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to position the lower-left corner of the app extension’s  primary view in screen space. To specify the desired primary view size for an app extension’s view controller, use the [preferredContentSize](preferredcontentsize.md) property.

## See Also

### Related Documentation

- [preferredContentSize](preferredcontentsize.md): The desired size of the view controller’s view, in screen units.

### Configuring an App Extension View Controller

- [extensionContext](extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransition(to:)](viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](sourceitemview.md)

# preferredScreenOrigin (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

For a view controller that is part of an app extension, the preferred screen origin.

## Declaration

```objectivec
@property NSPoint preferredScreenOrigin;
```

<a id="Discussion"></a>

## Discussion

Set this property to position the lower-left corner of the app extension’s  primary view in screen space. To specify the desired primary view size for an app extension’s view controller, use the [preferredContentSize](preferredcontentsize.md) property.

## See Also

### Related Documentation

- [preferredContentSize](preferredcontentsize.md): The desired size of the view controller’s view, in screen units.

### Configuring an App Extension View Controller

- [extensionContext](extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredMaximumSize](preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransitionToSize:](viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](sourceitemview.md)
