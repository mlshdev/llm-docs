> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/presentingviewcontroller(for:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/presentingviewcontroller(for:))

# presentingViewController(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Provides the view controller that presents the interface objects.

## Declaration

```swift
@MainActor func presentingViewController(for interaction: ImageAnalysisInteraction) -> UIViewController?
```

## Parameters

- `interaction`: The associated interaction object for the presented view.

<a id="return-value"></a>

## Return Value

The view controller that presents the interaction object’s highlights, menus, and other elements.

<a id="discussion"></a>

## Discussion

The default return value is the window’s root view controller.

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [presentingViewController(for:)](presentingviewcontroller%28for_%29-3gzbq.md): A default implementation that provides the interaction view’s root view controller.

## See Also

### Providing interface details

- [contentView(for:)](contentview%28for_%29.md): Provides the view that contains the image.
- [contentsRect(for:)](contentsrect%28for_%29.md): Returns the rectangle, in unit coordinates, that contains the image within the view.
