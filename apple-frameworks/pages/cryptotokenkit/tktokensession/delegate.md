> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktokensession/delegate

# delegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token session delegate.

## Declaration

```swift
weak var delegate: (any TKTokenSessionDelegate)? { get set }
```

## See Also

### Responding to Authentication Events

- [TKTokenSessionDelegate](../tktokensessiondelegate.md): The interface that a session instance delegate implements to respond to token session authentication events.

# delegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token session delegate.

## Declaration

```objectivec
@property (weak, nullable) id<TKTokenSessionDelegate> delegate;
```

## See Also

### Responding to Authentication Events

- [TKTokenSessionDelegate](../tktokensessiondelegate.md): The interface that a session instance delegate implements to respond to token session authentication events.
