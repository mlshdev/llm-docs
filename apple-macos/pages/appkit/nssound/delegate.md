> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssound/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The sound’s delegate.

## Declaration

```swift
weak var delegate: (any NSSoundDelegate)? { get set }
```

## See Also

### Detecting When a Sound Finishes Playing

- [NSSoundDelegate](../nssounddelegate.md): A set of optional methods implemented by delegates of [NSSound](../nssound.md) objects.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The sound’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSSoundDelegate> delegate;
```

## See Also

### Detecting When a Sound Finishes Playing

- [NSSoundDelegate](../nssounddelegate.md): A set of optional methods implemented by delegates of [NSSound](../nssound.md) objects.
