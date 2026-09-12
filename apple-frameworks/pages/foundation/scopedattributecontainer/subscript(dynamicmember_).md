> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scopedattributecontainer/subscript(dynamicmember:)](https://developer.apple.com/documentation/foundation/scopedattributecontainer/subscript(dynamicmember:))

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the value of the attribute that the specified key path indicates.

## Declaration

```swift
@preconcurrency subscript<T>(dynamicMember keyPath: KeyPath<S, T>) -> T.Value? where T : AttributedStringKey, T.Value : Sendable { get set }
```
