> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate/didcancelinteracting(with:)](https://developer.apple.com/documentation/appkit/nsscrubberdelegate/didcancelinteracting(with:))

# didCancelInteracting(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that a user interaction with the scrubber has been canceled.

## Declaration

```swift
@MainActor optional func didCancelInteracting(with scrubber: NSScrubber)
```

## Parameters

- `scrubber`: The scrubber the user is interacting with.

## See Also

### Tracking user interaction

- [didBeginInteracting(with:)](didbegininteracting%28with_%29.md): Tells the delegate that the user is panning or scrolling the scrubber.
- [didFinishInteracting(with:)](didfinishinteracting%28with_%29.md): Tells the delegate that a pan or scroll interaction with the scrubber has ended.

# didCancelInteractingWithScrubber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that a user interaction with the scrubber has been canceled.

## Declaration

```objectivec
- (void) didCancelInteractingWithScrubber:(NSScrubber *) scrubber;
```

## Parameters

- `scrubber`: The scrubber the user is interacting with.

## See Also

### Tracking user interaction

- [didBeginInteractingWithScrubber:](didbegininteracting%28with_%29.md): Tells the delegate that the user is panning or scrolling the scrubber.
- [didFinishInteractingWithScrubber:](didfinishinteracting%28with_%29.md): Tells the delegate that a pan or scroll interaction with the scrubber has ended.
