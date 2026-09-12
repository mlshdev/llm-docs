> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass/primaryaccountidentifier](https://developer.apple.com/documentation/passkit/pksecureelementpass/primaryaccountidentifier)

# primaryAccountIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

An opaque value that identifies the primary account number that funds the pass’s transactions.

## Declaration

```swift
var primaryAccountIdentifier: String { get }
```

## See Also

### Getting the account attributes

- [primaryAccountNumberSuffix](primaryaccountnumbersuffix.md): A display-ready version of the primary account number.

# primaryAccountIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

An opaque value that identifies the primary account number that funds the pass’s transactions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * primaryAccountIdentifier;
```

## See Also

### Getting the account attributes

- [primaryAccountNumberSuffix](primaryaccountnumbersuffix.md): A display-ready version of the primary account number.
