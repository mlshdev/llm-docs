> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-287km

# init(\_:traits:arguments:body:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 1.0+

## Declaration

```swift
@MainActor init<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @PreviewBodyBuilder<UIViewController> body: @escaping @MainActor (T) -> UIViewController)
```
