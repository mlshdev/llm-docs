> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundliveviewrepresentation/view-ues](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewrepresentation/view-ues)

# PlaygroundLiveViewRepresentation.view(\_:)

**Framework:** Playground Support  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+ · Xcode 12.0+

An AppKit view that's displayed as the live view.

## Declaration

```swift
case view(NSView)
```

<a id="discussion"></a>

## Discussion

This view must be the root of a view hierarchy (it must not have a superview), and it must not be owned by a view controller.

## See Also

### Displaying AppKit Views

- [PlaygroundLiveViewRepresentation.viewController(\_:)](viewcontroller-uej.md): An AppKit view controller whose view is displayed as the live view.
