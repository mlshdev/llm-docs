> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/deviceaccountidentifier](https://developer.apple.com/documentation/passkit/pksecureelementpass/deviceaccountidentifier)

# deviceAccountIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The unique identifier for the device-specific account number.

## Declaration

```swift
var deviceAccountIdentifier: String { get }
```

## See Also

### Getting the hardware attributes

- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [devicePassIdentifier](devicepassidentifier.md): An opaque value for the pass.
- [pairedTerminalIdentifier](pairedterminalidentifier.md): The unique identifier of the paired terminal.

# deviceAccountIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The unique identifier for the device-specific account number.

## Declaration

```objectivec
@property (strong, readonly) NSString * deviceAccountIdentifier;
```

## See Also

### Getting the hardware attributes

- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [devicePassIdentifier](devicepassidentifier.md): An opaque value for the pass.
- [pairedTerminalIdentifier](pairedterminalidentifier.md): The unique identifier of the paired terminal.
