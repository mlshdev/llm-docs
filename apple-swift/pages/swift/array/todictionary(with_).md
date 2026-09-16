> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/array/todictionary(with:)

# toDictionary(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func toDictionary<Key>(with selectKey: (Element) -> Key) -> [Key : Element] where Key : Hashable
```
