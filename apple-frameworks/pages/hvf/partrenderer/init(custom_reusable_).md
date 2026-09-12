> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partrenderer/init(custom:reusable:)](https://developer.apple.com/documentation/hvf/partrenderer/init(custom:reusable:))

# init(custom:reusable:)

**Framework:** hvf  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Use a custom, client-defined loader Setting reusable to true preserves the input parameter values when rendering; otherwise they are destroyed by rendering

## Declaration

```swift
init(custom: @escaping CustomPartLoader, reusable: Bool = false)
```
