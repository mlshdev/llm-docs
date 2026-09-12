> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewprovider/platform-5gkzc](https://developer.apple.com/documentation/swiftui/previewprovider/platform-5gkzc)

# platform

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The platform to run the provider on.

## Declaration

```swift
@MainActor @preconcurrency static var platform: PreviewPlatform? { get }
```

<a id="discussion"></a>

## Discussion

This default implementation of the [platform](platform.md) computed property returns `nil`. Rely on this implementation unless you have a multiplatform target and want to suggest a particular platform for a preview.
