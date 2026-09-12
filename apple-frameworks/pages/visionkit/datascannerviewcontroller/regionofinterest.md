> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/regionofinterest](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/regionofinterest)

# regionOfInterest

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The area of the live video in view coordinates that the data scanner searches for items.

## Declaration

```swift
@MainActor var regionOfInterest: CGRect? { get set }
```

<a id="discussion"></a>

## Discussion

If you add interface objects to the live video (using the [overlayContainerView](overlaycontainerview.md) property) that might hide items from a person, set this property to restrict the scanning area. The default value is the bounds of the view.

## See Also

### Customizing the interface

- [overlayContainerView](overlaycontainerview.md): A view that the data scanner displays over its view without interfering with the Live Text interface.
