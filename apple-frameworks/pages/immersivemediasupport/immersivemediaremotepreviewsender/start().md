> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/start()

# start()

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Starts the sender.

## Declaration

```swift
func start() async
```

<a id="discussion"></a>

## Discussion

Call `start` before you start sending any frames, audio, or venue descriptor information to the receivers.
