> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewrepresentation/viewcontroller-uej

# PlaygroundLiveViewRepresentation.viewController(\_:)

**Framework:** Playground Support  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+ · Xcode 12.0+

An AppKit view controller whose view is displayed as the live view.

## Declaration

```swift
case viewController(NSViewController)
```

<a id="discussion"></a>

## Discussion

This view controller must be the root of a view controller hierarchy (it must not have a parent view controller), and its view must not have a superview.

## See Also

### Displaying AppKit Views

- [PlaygroundLiveViewRepresentation.view(\_:)](view-ues.md): An AppKit view that's displayed as the live view.
