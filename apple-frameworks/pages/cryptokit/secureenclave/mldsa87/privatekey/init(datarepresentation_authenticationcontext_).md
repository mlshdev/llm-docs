> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/secureenclave/mldsa87/privatekey/init(datarepresentation:authenticationcontext:)

# init(dataRepresentation:authenticationContext:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init<D>(dataRepresentation: D, authenticationContext: LAContext? = nil) throws where D : DataProtocol
```
