> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewplatform](https://developer.apple.com/documentation/swiftui/previewplatform)

# PreviewPlatform

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Platforms that can run the preview.

> Use [Preview(\_:body:)](preview%28__body_%29.md) instead.

## Declaration

```swift
enum PreviewPlatform
```

<a id="overview"></a>

## Overview

Xcode infers the platform for a preview based on the currently selected target. If you have a multiplatform target and want to suggest a particular target for a preview, implement the [platform](previewprovider/platform.md) computed property as a hint, and specify one of the preview platforms:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
    }

    static var platform: PreviewPlatform? {
        PreviewPlatform.tvOS
    }
}
```

## Topics

### Getting an operating system

- [PreviewPlatform.iOS](previewplatform/ios.md): Deprecated. Specifies iOS as the preview platform.
- [PreviewPlatform.macOS](previewplatform/macos.md): Deprecated. Specifies macOS as the preview platform.
- [PreviewPlatform.tvOS](previewplatform/tvos.md): Deprecated. Specifies tvOS as the preview platform.
- [PreviewPlatform.watchOS](previewplatform/watchos.md): Deprecated. Specifies watchOS as the preview platform.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining a preview

- [PreviewProvider](previewprovider.md): Deprecated. A type that produces view previews in Xcode.
- [previewDisplayName(\_:)](view/previewdisplayname%28__%29.md): Deprecated. Sets a user visible name to show in the canvas for a preview.
