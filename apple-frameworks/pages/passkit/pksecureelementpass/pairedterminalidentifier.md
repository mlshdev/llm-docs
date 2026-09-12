> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/pairedterminalidentifier](https://developer.apple.com/documentation/passkit/pksecureelementpass/pairedterminalidentifier)

# pairedTerminalIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The unique identifier of the paired terminal.

## Declaration

```swift
var pairedTerminalIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

PassKit can create a Secure Element pass during an exchange with a terminal. For example, when creating a digital car key. You can use this property’s value to identify the terminal.

## See Also

### Getting the hardware attributes

- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [devicePassIdentifier](devicepassidentifier.md): An opaque value for the pass.

# pairedTerminalIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The unique identifier of the paired terminal.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * pairedTerminalIdentifier;
```

<a id="Discussion"></a>

## Discussion

PassKit can create a Secure Element pass during an exchange with a terminal. For example, when creating a digital car key. You can use this property’s value to identify the terminal.

## See Also

### Getting the hardware attributes

- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [devicePassIdentifier](devicepassidentifier.md): An opaque value for the pass.
