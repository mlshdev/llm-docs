> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchworkloop/init(label:attributes:autoreleasefrequency:osworkgroup:)

# init(label:attributes:autoreleaseFrequency:osWorkgroup:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
convenience init(label: String, attributes: DispatchWorkloop.Attributes = [], autoreleaseFrequency: DispatchQueue.AutoreleaseFrequency = .workItem, osWorkgroup: WorkGroup? = nil)
```
