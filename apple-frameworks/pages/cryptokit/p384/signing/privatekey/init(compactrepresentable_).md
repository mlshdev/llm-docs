> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p384/signing/privatekey/init(compactrepresentable:)](https://developer.apple.com/documentation/cryptokit/p384/signing/privatekey/init(compactrepresentable:))

# init(compactRepresentable:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a random P-384 private key for signing.

## Declaration

```swift
init(compactRepresentable: Bool = true)
```

## Parameters

- `compactRepresentable`: A Boolean value that indicates whether CryptoKit creates the key with the structure to enable compact point encoding.

<a id="discussion"></a>

## Discussion

Keys that use a compact point encoding enable shorter public keys, but aren’t compliant with FIPS certification. If your app requires FIPS certification, create a key with [init(rawRepresentation:)](init%28rawrepresentation_%29.md).

## See Also

### Creating a private key

- [init(rawRepresentation:)](init%28rawrepresentation_%29.md): Creates a P-384 private key for signing from a collection of bytes.
- [init(derRepresentation:)](init%28derrepresentation_%29.md): Creates a P-384 private key for signing from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](init%28pemrepresentation_%29.md): Creates a P-384 private key for signing from a Privacy-Enhanced Mail PEM) representation.
- [init(x963Representation:)](init%28x963representation_%29.md): Creates a P-384 private key for signing from an ANSI x9.63 representation.
