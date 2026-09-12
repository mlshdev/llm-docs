> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychaincertificate/init(certificate:objectid:)](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychaincertificate/init(certificate:objectid:))

# init(certificate:objectID:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token keychain certificate with data from the specified certificate reference and a given object ID.

## Declaration

```swift
init?(certificate certificateRef: SecCertificate, objectID: TKToken.ObjectID)
```

## Parameters

- `certificateRef`: The certificate reference.

  You can create a [SecCertificate](../../security/seccertificate.md) value from a data object using the [SecCertificateCreateWithData(\_:\_:)](../../security/seccertificatecreatewithdata%28____%29.md) function.
- `objectID`: The object ID.

<a id="return-value"></a>

## Return Value

A new token keychain certificate.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

# initWithCertificate:objectID: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token keychain certificate with data from the specified certificate reference and a given object ID.

## Declaration

```objectivec
- (instancetype) initWithCertificate:(SecCertificateRef) certificateRef objectID:(TKTokenObjectID) objectID;
```

## Parameters

- `certificateRef`: The certificate reference.

  You can create a [SecCertificateRef](../../security/seccertificate.md) value from a data object using the [SecCertificateCreateWithData](../../security/seccertificatecreatewithdata%28____%29.md) function.
- `objectID`: The object ID.

<a id="return-value"></a>

## Return Value

A new token keychain certificate.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.
