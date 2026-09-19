> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspublickeycredential/rawclientdatajson

# rawClientDataJSON (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Raw data that contains a JSON-compatible encoding of the client data.

## Declaration

```swift
var rawClientDataJSON: Data { get }
```

<a id="Discussion"></a>

## Discussion

This object acts as an input to the signing algorithm. It needs to be in JSON form for the relying party to verify the provided signature. The developer should ignore this value.

## See Also

### Getting the properties

- [credentialID](credentialid.md): An identifier that the authenticator generates during registration to uniquely identify a specific credential.

# rawClientDataJSON (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Raw data that contains a JSON-compatible encoding of the client data.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * rawClientDataJSON;
```

<a id="Discussion"></a>

## Discussion

This object acts as an input to the signing algorithm. It needs to be in JSON form for the relying party to verify the provided signature. The developer should ignore this value.

## See Also

### Getting the properties

- [credentialID](credentialid.md): An identifier that the authenticator generates during registration to uniquely identify a specific credential.
