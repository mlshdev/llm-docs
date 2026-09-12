> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/composedtemporaltransformer/init(_:_:)](https://developer.apple.com/documentation/createmlcomponents/composedtemporaltransformer/init(_:_:))

# init(\_:\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a transformer composition from two temporal transformers.

## Declaration

```swift
init(_ inner: Inner, _ outer: Outer)
```

## Parameters

- `inner`: The inner transformer.
- `outer`: The outer transformer.
