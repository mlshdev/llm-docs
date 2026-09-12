> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol/imageplaygroundviewcontroller(_:didcreateimageat:)](https://developer.apple.com/documentation/imageplayground/imageplaygroundviewcontroller/delegate-swift.protocol/imageplaygroundviewcontroller(_:didcreateimageat:))

# imagePlaygroundViewController(\_:didCreateImageAt:)

**Framework:** Image Playground  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Returns the generated image to the delegate.

## Declaration

```swift
@MainActor @objc func imagePlaygroundViewController(_ imagePlaygroundViewController: ImagePlaygroundViewController, didCreateImageAt imageURL: URL)
```

## Parameters

- `imagePlaygroundViewController`: The view controller that sent the notification.
- `imageURL`: The location of the generated image. The file will live inside a temporary folder of your app sandbox. The app should move it to a permanent location or clean it up when it has finished using the file.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the image at the specified location. After you finish retrieving the image, dismiss the [ImagePlaygroundViewController](../../imageplaygroundviewcontroller.md) from your app’s interface.
