> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier/init(identifier:type:displayname:)

# init(identifier:type:displayName:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Initializes an ASCredentialServiceIdentifier object.

## Declaration

```swift
init(identifier: String, type: ASCredentialServiceIdentifier.IdentifierType, displayName: String)
```

## Parameters

- `identifier`: The string value for the service identifier.
- `type`: The type that the service identifier string represents.
- `displayName`: A user visible name that describes the service.

# initWithIdentifier:type:displayName: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Initializes an ASCredentialServiceIdentifier object.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier type:(ASCredentialServiceIdentifierType) type displayName:(NSString *) displayName;
```

## Parameters

- `identifier`: The string value for the service identifier.
- `type`: The type that the service identifier string represents.
- `displayName`: A user visible name that describes the service.
