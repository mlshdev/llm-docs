> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/humanbodyactioncounter/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/humanbodyactioncounter/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Predicts cumulative human body action counts from a sequence of human body pose windows.

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler? = nil) async throws -> HumanBodyActionCounter.OutputSequence where S : TemporalSequence, S.Feature == [Pose]
```

## Parameters

- `input`: An async sequence of human body pose windows.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence of cumulative human body action counts.

## See Also

### Performing the transformation

- [HumanBodyActionCounter.CumulativeSumSequence](cumulativesumsequence.md): Cumulative human body action count sequence.
