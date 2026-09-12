> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedtargetinvocationencoder/donerecording()](https://developer.apple.com/documentation/distributed/distributedtargetinvocationencoder/donerecording())

# doneRecording()

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Invoked to signal to the encoder that no further `record...` calls will be made on it.

## Declaration

```swift
mutating func doneRecording() throws
```

<a id="discussion"></a>

## Discussion

Useful if the encoder needs to perform some “final” task before the underlying message is considered complete, e.g. computing a checksum, or some additional message signing or finalization step.
