> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/preview(_:traits:arguments:body:)-6gm4c](https://developer.apple.com/documentation/uikit/preview(_:traits:arguments:body:)-6gm4c)

# Preview(\_:traits:arguments:body:)

**Framework:** UIKit  
**Kind:** Macro  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS

## Declaration

```swift
@freestanding(declaration) macro Preview<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @PreviewBodyBuilder<UIView> body: @escaping @MainActor (T) -> UIView)
```
