> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/init(viewing:)-9d31g](https://developer.apple.com/documentation/swift/span/init(viewing:)-9d31g)

# init(viewing:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

View initialized raw memory as a span of bytes.

## Declaration

```swift
init(viewing bytes: RawSpan)
```

## Parameters

- `bytes`: An existing `RawSpan`, which will define both this `Span`’s lifetime and the memory it represents.
