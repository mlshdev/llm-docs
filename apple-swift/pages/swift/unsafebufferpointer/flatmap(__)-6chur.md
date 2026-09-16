> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafebufferpointer/flatmap(_:)-6chur

# flatMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 4.1)

## Declaration

```swift
func flatMap<ElementOfResult>(_ transform: (Self.Element) throws -> ElementOfResult?) rethrows -> [ElementOfResult]
```
