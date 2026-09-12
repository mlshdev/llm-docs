> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/asyncimagephase](https://developer.apple.com/documentation/swiftui/asyncimagephase)

# AsyncImagePhase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current phase of the asynchronous image loading operation.

## Declaration

```swift
enum AsyncImagePhase
```

<a id="overview"></a>

## Overview

When you create an [AsyncImage](asyncimage.md) instance with the [init(url:scale:transaction:content:)](asyncimage/init%28url_scale_transaction_content_%29.md) initializer, you define the appearance of the view using a `content` closure. SwiftUI calls the closure with a phase value at different points during the load operation to indicate the current state. Use the phase to decide what to draw. For example, you can draw the loaded image if it exists, a view that indicates an error, or a placeholder:

```swift
AsyncImage(url: URL(string: "https://example.com/icon.png")) { phase in
    if let image = phase.image {
        image // Displays the loaded image.
    } else if phase.error != nil {
        Color.red // Indicates an error.
    } else {
        Color.blue // Acts as a placeholder.
    }
}
```

## Topics

### Getting load phases

- [AsyncImagePhase.empty](asyncimagephase/empty.md): No image is loaded.
- [AsyncImagePhase.success(\_:)](asyncimagephase/success%28__%29.md): An image successfully loaded.
- [AsyncImagePhase.failure(\_:)](asyncimagephase/failure%28__%29.md): An image failed to load with an error.

### Getting the image

- [image](asyncimagephase/image.md): The loaded image, if any.

### Getting the error

- [error](asyncimagephase/error.md): The error that occurred when attempting to load an image, if any.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading images asynchronously

- [AsyncImage](asyncimage.md): A view that asynchronously loads and displays an image.
