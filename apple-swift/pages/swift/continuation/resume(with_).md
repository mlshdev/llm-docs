> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/continuation/resume(with:)](https://developer.apple.com/documentation/swift/continuation/resume(with:))

# resume(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Resume the task awaiting the continuation by having it either return or throw an error based on the state of the given `Result` value

## Declaration

```swift
consuming func resume(with result: consuming sending Result<Success, Failure>)
```

## Parameters

- `result`: A value to either return or throw from the continuation
