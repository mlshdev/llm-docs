> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handtrackingprovider/handanchors(at:)](https://developer.apple.com/documentation/arkit/handtrackingprovider/handanchors(at:))

# handAnchors(at:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Queries for hand anchors at the provided target timestamp.

## Declaration

```swift
final func handAnchors(at timestamp: TimeInterval) -> (leftHand: HandAnchor?, rightHand: HandAnchor?)
```

## Parameters

- `timestamp`: The target timestamp, mach absolute time, in seconds.

<a id="return-value"></a>

## Return Value

A tuple that contains optional left and right anchors for the given time. Anchors are `nil` when the provider isn’t running.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function isn’t safe to call on multiple threads at the same time. You need to provide your own synchronization.

## See Also

### Inspecting a hand-tracking provider

- [state](state.md): The current status of data coming from a provider.
- [description](description.md): A textual representation of this hand tracking provider.
