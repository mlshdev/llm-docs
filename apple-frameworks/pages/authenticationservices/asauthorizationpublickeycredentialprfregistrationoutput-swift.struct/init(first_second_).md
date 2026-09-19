> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationoutput-swift.struct/init(first:second:)

# init(first:second:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes an object representing the outputs of the web authentication PRF extension.

## Declaration

```swift
init(first: SymmetricKey, second: SymmetricKey?)
```

<a id="discussion"></a>

## Discussion

Call this method only if the registration request includes input values. Otherwise, use [supported](supported.md) or [unsupported](unsupported.md).
