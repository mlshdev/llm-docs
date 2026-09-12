> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/primaryaccountnumbersuffix](https://developer.apple.com/documentation/passkit/pksecureelementpass/primaryaccountnumbersuffix)

# primaryAccountNumberSuffix (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

A display-ready version of the primary account number.

## Declaration

```swift
var primaryAccountNumberSuffix: String { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is generally the last four or five digits of the primary account number, but can vary by issuer. The value isn’t related to [primaryAccountIdentifier](primaryaccountidentifier.md).

## See Also

### Getting the account attributes

- [primaryAccountIdentifier](primaryaccountidentifier.md): An opaque value that identifies the primary account number that funds the pass’s transactions.

# primaryAccountNumberSuffix (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

A display-ready version of the primary account number.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * primaryAccountNumberSuffix;
```

<a id="Discussion"></a>

## Discussion

This property’s value is generally the last four or five digits of the primary account number, but can vary by issuer. The value isn’t related to [primaryAccountIdentifier](primaryaccountidentifier.md).

## See Also

### Getting the account attributes

- [primaryAccountIdentifier](primaryaccountidentifier.md): An opaque value that identifies the primary account number that funds the pass’s transactions.
