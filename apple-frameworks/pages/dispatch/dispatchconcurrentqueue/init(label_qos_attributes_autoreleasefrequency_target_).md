> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchconcurrentqueue/init(label:qos:attributes:autoreleasefrequency:target:)

# init(label:qos:attributes:autoreleaseFrequency:target:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
convenience init(label: String, qos: DispatchQoS = .unspecified, attributes: DispatchConcurrentQueue.Attributes = [], autoreleaseFrequency: DispatchQueue.AutoreleaseFrequency = .workItem, target: DispatchQueue? = nil)
```
