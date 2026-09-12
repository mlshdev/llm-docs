> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/deviceaccountnumbersuffix](https://developer.apple.com/documentation/passkit/pksecureelementpass/deviceaccountnumbersuffix)

# deviceAccountNumberSuffix (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

A display-ready version of the device-specific account number.

## Declaration

```swift
var deviceAccountNumberSuffix: String { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is generally the last four or five digits of the device-specific account number, but can vary by issuer.

## See Also

### Getting the hardware attributes

- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [devicePassIdentifier](devicepassidentifier.md): An opaque value for the pass.
- [pairedTerminalIdentifier](pairedterminalidentifier.md): The unique identifier of the paired terminal.

# deviceAccountNumberSuffix (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

A display-ready version of the device-specific account number.

## Declaration

```objectivec
@property (strong, readonly) NSString * deviceAccountNumberSuffix;
```

<a id="Discussion"></a>

## Discussion

This property’s value is generally the last four or five digits of the device-specific account number, but can vary by issuer.

## See Also

### Getting the hardware attributes

- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [devicePassIdentifier](devicepassidentifier.md): An opaque value for the pass.
- [pairedTerminalIdentifier](pairedterminalidentifier.md): The unique identifier of the paired terminal.
