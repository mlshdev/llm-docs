> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewprovider/platform](https://developer.apple.com/documentation/swiftui/previewprovider/platform)

# platform

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The platform on which to run the provider.

## Declaration

```swift
@MainActor @preconcurrency static var platform: PreviewPlatform? { get }
```

<a id="discussion"></a>

## Discussion

Xcode infers the platform for a preview based on the currently selected target. If you have a multiplatform target and want to suggest a particular target for a preview, implement the `platform` computed property to provide a hint, and specify one of the [PreviewPlatform](../previewplatform.md) values:

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

Xcode ignores this value unless you have a multiplatform target.

## Default Implementations

### PreviewProvider Implementations

- [platform](platform-5gkzc.md): Deprecated. The platform to run the provider on.
