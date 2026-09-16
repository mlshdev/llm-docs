> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/span/init(viewing:)-18wsr

# init(viewing:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

View initialized raw memory as a typed span.

## Declaration

```swift
init(viewing bytes: RawSpan) where Element : ConvertibleFromBytes
```

## Parameters

- `bytes`: An existing `RawSpan`, which will define both this `Span`’s lifetime and the memory it represents.

<a id="discussion"></a>

## Discussion

The `byteCount` of `bytes` must be a multiple of `Element`’s stride, and the starting address of `bytes` must be well-aligned for the type of `Element`. If either of these requirements is not met, this initializer will trap at runtime.
