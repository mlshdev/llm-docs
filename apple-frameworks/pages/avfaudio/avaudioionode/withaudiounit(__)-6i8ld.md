> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioionode/withaudiounit(_:)-6i8ld](https://developer.apple.com/documentation/avfaudio/avaudioionode/withaudiounit(_:)-6i8ld)

# withAudioUnit(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Provides scoped access to the I/O node’s AudioUnit

## Declaration

```swift
func withAudioUnit<R, E>(_ body: (borrowing AudioUnit?) throws(E) -> R) throws(E) -> R where E : Error
```

## Parameters

- `body`: A closure that receives the AudioUnit instance

<a id="return-value"></a>

## Return Value

The value returned by the closure

<a id="discussion"></a>

## Discussion

This method provides thread-safe, scoped access to the underlying AudioUnit. The audio unit reference is only valid within the closure and must not be retained or accessed outside of it.

> **Throws**

> Rethrows any error thrown by the closure
