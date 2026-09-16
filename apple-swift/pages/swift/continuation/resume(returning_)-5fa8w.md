> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/continuation/resume(returning:)-5fa8w

# resume(returning:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Resume the task awaiting the continuation by having it return from its suspension point

## Declaration

```swift
consuming func resume(returning value: consuming sending Success)
```

## Parameters

- `value`: The value to return from the continuation
