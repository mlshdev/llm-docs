> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anysequence/init(_:)-307a9](https://developer.apple.com/documentation/swift/anysequence/init(_:)-307a9)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new sequence that wraps and forwards operations to `base`.

## Declaration

```swift
init<S>(_ base: S) where Element == S.Element, S : Sequence
```
