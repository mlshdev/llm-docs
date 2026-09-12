> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate/didbegininteracting(with:)](https://developer.apple.com/documentation/appkit/nsscrubberdelegate/didbegininteracting(with:))

# didBeginInteracting(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the user is panning or scrolling the scrubber.

## Declaration

```swift
@MainActor optional func didBeginInteracting(with scrubber: NSScrubber)
```

## Parameters

- `scrubber`: The scrubber the user is interacting with.

## See Also

### Tracking user interaction

- [didFinishInteracting(with:)](didfinishinteracting%28with_%29.md): Tells the delegate that a pan or scroll interaction with the scrubber has ended.
- [didCancelInteracting(with:)](didcancelinteracting%28with_%29.md): Tells the delegate that a user interaction with the scrubber has been canceled.

# didBeginInteractingWithScrubber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that the user is panning or scrolling the scrubber.

## Declaration

```objectivec
- (void) didBeginInteractingWithScrubber:(NSScrubber *) scrubber;
```

## Parameters

- `scrubber`: The scrubber the user is interacting with.

## See Also

### Tracking user interaction

- [didFinishInteractingWithScrubber:](didfinishinteracting%28with_%29.md): Tells the delegate that a pan or scroll interaction with the scrubber has ended.
- [didCancelInteractingWithScrubber:](didcancelinteracting%28with_%29.md): Tells the delegate that a user interaction with the scrubber has been canceled.
