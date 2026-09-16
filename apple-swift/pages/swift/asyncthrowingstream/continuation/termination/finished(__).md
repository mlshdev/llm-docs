> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation/termination/finished(_:)

# AsyncThrowingStream.Continuation.Termination.finished(\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The stream finished as a result of calling the continuation’s `finish` method.

## Declaration

```swift
case finished(Failure?)
```

<a id="discussion"></a>

## Discussion

The associated `Failure` value provides the error that terminated the stream. If no error occurred, this value is `nil`.

## See Also

### Termination States

- [AsyncThrowingStream.Continuation.Termination.cancelled](cancelled.md): The stream finished as a result of cancellation.
