> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/aspublickeycredential/credentialid

# credentialID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An identifier that the authenticator generates during registration to uniquely identify a specific credential.

## Declaration

```swift
var credentialID: Data { get }
```

## See Also

### Getting the properties

- [rawClientDataJSON](rawclientdatajson.md): Raw data that contains a JSON-compatible encoding of the client data.

# credentialID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An identifier that the authenticator generates during registration to uniquely identify a specific credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * credentialID;
```

## See Also

### Getting the properties

- [rawClientDataJSON](rawclientdatajson.md): Raw data that contains a JSON-compatible encoding of the client data.
