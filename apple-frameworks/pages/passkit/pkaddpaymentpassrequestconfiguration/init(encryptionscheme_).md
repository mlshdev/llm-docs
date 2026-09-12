> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration/init(encryptionscheme:)](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration/init(encryptionscheme:))

# init(encryptionScheme:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Instantiates a new request configuration with the given encryption scheme.

## Declaration

```swift
init?(encryptionScheme: PKEncryptionScheme)
```

## Parameters

- `encryptionScheme`: The encryption scheme to be used in this request. For a list of possible values, see [PKEncryptionScheme](../pkencryptionscheme.md).

<a id="return-value"></a>

## Return Value

A newly instantiated configuration object.

<a id="Discussion"></a>

## Discussion

After instantiating a configuration object, you must also set its [cardholderName](cardholdername.md) and [primaryAccountSuffix](primaryaccountsuffix.md) properties before using it to create a [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) instance.

## See Also

### Creating a request configuration

- [PKEncryptionScheme](../pkencryptionscheme.md): Encryption schemes.

# initWithEncryptionScheme: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Instantiates a new request configuration with the given encryption scheme.

## Declaration

```objectivec
- (instancetype) initWithEncryptionScheme:(PKEncryptionScheme) encryptionScheme;
```

## Parameters

- `encryptionScheme`: The encryption scheme to be used in this request. For a list of possible values, see [PKEncryptionScheme](../pkencryptionscheme.md).

<a id="return-value"></a>

## Return Value

A newly instantiated configuration object.

<a id="Discussion"></a>

## Discussion

After instantiating a configuration object, you must also set its [cardholderName](cardholdername.md) and [primaryAccountSuffix](primaryaccountsuffix.md) properties before using it to create a [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) instance.

## See Also

### Creating a request configuration

- [PKEncryptionScheme](../pkencryptionscheme.md): Encryption schemes.
