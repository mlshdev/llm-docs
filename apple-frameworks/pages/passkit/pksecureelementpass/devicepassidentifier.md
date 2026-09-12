> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/devicepassidentifier](https://developer.apple.com/documentation/passkit/pksecureelementpass/devicepassidentifier)

# devicePassIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

An opaque value for the pass.

## Declaration

```swift
var devicePassIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property’s value is unique for each issuer. This property is available only to developers who work with Apple to enable this functionality.

## See Also

### Getting the hardware attributes

- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [pairedTerminalIdentifier](pairedterminalidentifier.md): The unique identifier of the paired terminal.

# devicePassIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

An opaque value for the pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * devicePassIdentifier;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property’s value is unique for each issuer. This property is available only to developers who work with Apple to enable this functionality.

## See Also

### Getting the hardware attributes

- [deviceAccountIdentifier](deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [pairedTerminalIdentifier](pairedterminalidentifier.md): The unique identifier of the paired terminal.
