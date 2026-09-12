> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasstype/payment](https://developer.apple.com/documentation/passkit/pkpasstype/payment)

# payment (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

A pass that represents a credit or debit card

> Use [PKPassType.secureElement](secureelement.md) instead.

## Declaration

```swift
static var payment: PKPassType { get }
```

## See Also

### Pass types

- [PKPassType.any](any.md): A nonspecific pass type.
- [PKPassType.barcode](barcode.md): A pass that represents a barcode.
- [PKPassType.secureElement](secureelement.md): A pass that represents a credential that the device stores in the Secure Element.

# PKPassTypePayment (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

A pass that represents a credit or debit card

> Use [PKPassTypeSecureElement](secureelement.md) instead.

## Declaration

```objectivec
PKPassTypePayment
```

## See Also

### Pass types

- [PKPassTypeAny](any.md): A nonspecific pass type.
- [PKPassTypeBarcode](barcode.md): A pass that represents a barcode.
- [PKPassTypeSecureElement](secureelement.md): A pass that represents a credential that the device stores in the Secure Element.
