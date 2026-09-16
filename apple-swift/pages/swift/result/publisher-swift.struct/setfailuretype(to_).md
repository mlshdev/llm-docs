> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/result/publisher-swift.struct/setfailuretype(to:)

# setFailureType(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func setFailureType<E>(to failureType: E.Type) -> Result<Result<Success, Failure>.Publisher.Output, E>.Publisher where E : Error
```
