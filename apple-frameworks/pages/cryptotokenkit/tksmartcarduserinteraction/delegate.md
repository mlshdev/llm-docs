> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteraction/delegate

# delegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The delegate for observing events that occur during the user interaction.

## Declaration

```swift
weak var delegate: (any TKSmartCardUserInteractionDelegate)? { get set }
```

## See Also

### Handling User Interaction Events

- [TKSmartCardUserInteractionDelegate](../tksmartcarduserinteractiondelegate.md): The interface implemented by a Smart Card user interaction delegate to handle user interaction events.

# delegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The delegate for observing events that occur during the user interaction.

## Declaration

```objectivec
@property (weak, nullable) id<TKSmartCardUserInteractionDelegate> delegate;
```

## See Also

### Handling User Interaction Events

- [TKSmartCardUserInteractionDelegate](../tksmartcarduserinteractiondelegate.md): The interface implemented by a Smart Card user interaction delegate to handle user interaction events.
