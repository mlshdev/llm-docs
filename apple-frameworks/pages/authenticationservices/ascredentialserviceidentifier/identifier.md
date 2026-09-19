> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier/identifier

# identifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A string that names the identified service.

## Declaration

```swift
var identifier: String { get }
```

## See Also

### Identifying the credential service

- [type](type.md): The kind of services that the identifier represents.
- [ASCredentialServiceIdentifier.IdentifierType](identifiertype.md): Possible values for the service identifier type.

# identifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A string that names the identified service.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

## See Also

### Identifying the credential service

- [type](type.md): The kind of services that the identifier represents.
- [ASCredentialServiceIdentifierType](identifiertype.md): Possible values for the service identifier type.
