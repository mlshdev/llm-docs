> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitydocumentdescriptor/issueridentifiers](https://developer.apple.com/documentation/passkit/pkidentitydocumentdescriptor/issueridentifiers)

# issuerIdentifiers (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A list of X.509 authority key identifiers your app accepts.

## Declaration

```swift
var issuerIdentifiers: [Data] { get set }
```

<a id="Discussion"></a>

## Discussion

An empty list means any document signer certificate is acceptable.

> **Warning**

> You can’t have more than 1,000 issuer identifiers, and the size of each identifier can’t exceed 64 bytes. If you don’t meet these conditions, your app terminates.

## See Also

### Inspecting elements

- [elements](elements.md): A list of identity elements to request.
- [PKIdentityElement](../pkidentityelement.md): An object that represents the elements an app requests from identity documents.

# issuerIdentifiers (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A list of X.509 authority key identifiers your app accepts.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSData *> * issuerIdentifiers;
```

<a id="Discussion"></a>

## Discussion

An empty list means any document signer certificate is acceptable.

> **Warning**

> You can’t have more than 1,000 issuer identifiers, and the size of each identifier can’t exceed 64 bytes. If you don’t meet these conditions, your app terminates.

## See Also

### Inspecting elements

- [elements](elements.md): A list of identity elements to request.
- [PKIdentityElement](../pkidentityelement.md): An object that represents the elements an app requests from identity documents.
