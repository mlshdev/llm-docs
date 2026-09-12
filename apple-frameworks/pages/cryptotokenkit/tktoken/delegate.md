> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/delegate](https://developer.apple.com/documentation/cryptotokenkit/tktoken/delegate)

# delegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token delegate.

## Declaration

```swift
weak var delegate: (any TKTokenDelegate)? { get set }
```

## See Also

### Responding to Session Creation

- [TKTokenDelegate](../tktokendelegate.md): The interface that a token delegate implements to respond to session creation events.

# delegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token delegate.

## Declaration

```objectivec
@property (weak, nullable) id<TKTokenDelegate> delegate;
```

## See Also

### Responding to Session Creation

- [TKTokenDelegate](../tktokendelegate.md): The interface that a token delegate implements to respond to session creation events.
