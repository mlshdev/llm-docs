> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/result/publisher-swift.struct/tryallsatisfy(_:)

# tryAllSatisfy(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryAllSatisfy(_ predicate: (Result<Success, Failure>.Publisher.Output) throws -> Bool) -> Result<Bool, any Error>.Publisher
```
