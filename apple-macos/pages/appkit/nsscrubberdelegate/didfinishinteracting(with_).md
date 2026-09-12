> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate/didfinishinteracting(with:)](https://developer.apple.com/documentation/appkit/nsscrubberdelegate/didfinishinteracting(with:))

# didFinishInteracting(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that a pan or scroll interaction with the scrubber has ended.

## Declaration

```swift
@MainActor optional func didFinishInteracting(with scrubber: NSScrubber)
```

## Parameters

- `scrubber`: The scrubber the user was interacting with.

## See Also

### Tracking user interaction

- [didBeginInteracting(with:)](didbegininteracting%28with_%29.md): Tells the delegate that the user is panning or scrolling the scrubber.
- [didCancelInteracting(with:)](didcancelinteracting%28with_%29.md): Tells the delegate that a user interaction with the scrubber has been canceled.

# didFinishInteractingWithScrubber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Tells the delegate that a pan or scroll interaction with the scrubber has ended.

## Declaration

```objectivec
- (void) didFinishInteractingWithScrubber:(NSScrubber *) scrubber;
```

## Parameters

- `scrubber`: The scrubber the user was interacting with.

## See Also

### Tracking user interaction

- [didBeginInteractingWithScrubber:](didbegininteracting%28with_%29.md): Tells the delegate that the user is panning or scrolling the scrubber.
- [didCancelInteractingWithScrubber:](didcancelinteracting%28with_%29.md): Tells the delegate that a user interaction with the scrubber has been canceled.
