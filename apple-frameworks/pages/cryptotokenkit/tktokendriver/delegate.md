> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver/delegate](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/delegate)

# delegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token driver delegate.

## Declaration

```swift
weak var delegate: (any TKTokenDriverDelegate)? { get set }
```

## See Also

### Responding to Token Creation

- [TKTokenDriverDelegate](../tktokendriverdelegate.md): The interface that a token driver delegate implements to respond to token creation events.
- [TKTokenDriver.ClassID](classid.md): The type of the class identifier for the token driver.
- [TKTokenDriver.Configuration](configuration.md): A configuration for one class of token.

# delegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token driver delegate.

## Declaration

```objectivec
@property (weak, nullable) id<TKTokenDriverDelegate> delegate;
```

## See Also

### Responding to Token Creation

- [TKTokenDriverDelegate](../tktokendriverdelegate.md): The interface that a token driver delegate implements to respond to token creation events.
- [TKTokenDriverClassID](classid.md): The type of the class identifier for the token driver.
- [TKTokenDriverConfiguration](configuration.md): A configuration for one class of token.
