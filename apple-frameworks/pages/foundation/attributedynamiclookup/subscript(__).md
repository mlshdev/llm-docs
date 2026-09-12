> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedynamiclookup/subscript(_:)](https://developer.apple.com/documentation/foundation/attributedynamiclookup/subscript(_:))

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attributed string key that corresponds to a specified type.

## Declaration

```swift
subscript<T>(_: T.Type) -> T where T : AttributedStringKey { get }
```
