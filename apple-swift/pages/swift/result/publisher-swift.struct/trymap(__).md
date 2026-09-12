> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/publisher-swift.struct/trymap(_:)](https://developer.apple.com/documentation/swift/result/publisher-swift.struct/trymap(_:))

# tryMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryMap<T>(_ transform: (Result<Success, Failure>.Publisher.Output) throws -> T) -> Result<T, any Error>.Publisher
```
