> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol/imageplaygroundviewcontrollerdidcancel(_:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol/imageplaygroundviewcontrollerdidcancel(_:))

# imagePlaygroundViewControllerDidCancel(\_:)

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Notifies the delegate that the person canceled the generation of the image.

## Declaration

```swift
@MainActor @objc optional func imagePlaygroundViewControllerDidCancel(_ imagePlaygroundViewController: ImagePlaygroundViewController)
```

## Parameters

- `imagePlaygroundViewController`: The view controller that sent the notification.

<a id="discussion"></a>

## Discussion

Use this method to dismiss the specified [ImagePlaygroundViewController](../../imageplaygroundviewcontroller.md) from your app’s interface.
