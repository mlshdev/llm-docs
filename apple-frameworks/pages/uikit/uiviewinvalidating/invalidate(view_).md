> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewinvalidating/invalidate(view:)](https://developer.apple.com/documentation/uikit/uiviewinvalidating/invalidate(view:))

# invalidate(view:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

Indicates to the system that an aspect of a view is invalid and triggers the necessary update.

## Declaration

```swift
func invalidate(view: UIView)
```

## Parameters

- `view`: The view that requires invalidating.

<a id="Discussion"></a>

## Discussion

A type that conforms to [UIViewInvalidating](../uiviewinvalidating.md) implements this method to perform any actions necessary to notify the system that an aspect of your view is invalid. For more info, see [UIView.Invalidating](../uiview/invalidating.md).

## See Also

### Invalidating the view

- [UIView.Invalidations](../uiview/invalidations.md): Changes that cause an aspect of a view to be invalid and require an update.
