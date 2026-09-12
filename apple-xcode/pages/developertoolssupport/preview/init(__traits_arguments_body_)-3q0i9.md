> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-3q0i9](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-3q0i9)

# init(\_:traits:arguments:body:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 1.0+

## Declaration

```swift
@MainActor init<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @PreviewBodyBuilder<UIView> body: @escaping @MainActor (T) -> UIView)
```
