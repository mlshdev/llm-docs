> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imagecreator/init()](https://developer.apple.com/documentation/imageplayground/imagecreator/init())

# init()

**Framework:** Image Playground  
**Kind:** Initializer  
**Availability:** iOS 18.4+ (deprecated in 27.0) · iPadOS 18.4+ (deprecated in 27.0) · Mac Catalyst 18.4+ (deprecated in 27.0) · macOS 15.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

Creates a new image creator object for you to use in your app.

## Declaration

```swift
init() async throws
```

<a id="discussion"></a>

## Discussion

If the device doesn’t support image creation or the feature is currently unavailable, this initializer throws an error.

> **Throws**

> `ImageCreator.Error.notSupported` on iOS 27.0+, macOS 27.0+, and visionOS 27.0+.
