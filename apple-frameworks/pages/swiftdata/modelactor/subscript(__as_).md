> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelactor/subscript(_:as:)](https://developer.apple.com/documentation/swiftdata/modelactor/subscript(_:as:))

# subscript(\_:as:)

**Framework:** SwiftData  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Returns the model for the specified identifier, downcast to the appropriate class.

## Declaration

```swift
subscript<T>(id: PersistentIdentifier, as as: T.Type) -> T? where T : PersistentModel { get }
```
