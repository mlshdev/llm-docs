> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/result/publisher-swift.struct/replaceerror(with:)

# replaceError(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func replaceError(with output: Result<Success, Failure>.Publisher.Output) -> Result<Result<Success, Failure>.Publisher.Output, Never>.Publisher
```
