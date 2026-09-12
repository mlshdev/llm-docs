> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewinvalidating/invalidate(view:)](https://developer.apple.com/documentation/appkit/nsviewinvalidating/invalidate(view:))

# invalidate(view:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ · Swift 5.1+

Indicates to the system that an aspect of a view is invalid and triggers the necessary update.

## Declaration

```swift
func invalidate(view: NSView)
```

## Parameters

- `view`: The view that requires invalidating.

<a id="Discussion"></a>

## Discussion

A type that conforms to `UIViewInvalidating` implements this method to perform any actions necessary to notify the system that an aspect of your view is invalid. For more info, see [NSView.Invalidating](../nsview/invalidating.md).
