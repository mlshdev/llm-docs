> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/regex/match/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Accesses a capture by its name or number.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<Output, T>) -> T { get }
```
