> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioionode/withaudiounit(_:)-57kv

# withAudioUnit(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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
