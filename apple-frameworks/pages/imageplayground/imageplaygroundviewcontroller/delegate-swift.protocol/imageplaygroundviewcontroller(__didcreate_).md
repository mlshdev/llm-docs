> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol/imageplaygroundviewcontroller(_:didcreate:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol/imageplaygroundviewcontroller(_:didcreate:))

# imagePlaygroundViewController(\_:didCreate:)

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Returns the generated genmoji to the delegate.

## Declaration

```swift
@MainActor @objc optional func imagePlaygroundViewController(_ imagePlaygroundViewController: ImagePlaygroundViewController, didCreate adaptiveImageGlyph: NSAdaptiveImageGlyph)
```

## Parameters

- `imagePlaygroundViewController`: The view controller that sent the notification.
- `adaptiveImageGlyph`: The adaptive image glyph that represents the generated genmoji.

<a id="discussion"></a>

## Discussion

Use this method to access the genmoji. After you finish retrieving the image, dismiss the [ImagePlaygroundViewController](../../imageplaygroundviewcontroller.md) from your app’s interface.
