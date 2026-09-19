> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialprovider/init(relyingpartyidentifier:)

# init(relyingPartyIdentifier:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates the object with a relying party identifier.

## Declaration

```swift
init(relyingPartyIdentifier: String)
```

## Parameters

- `relyingPartyIdentifier`: The domain name of the service to authorize against.

# initWithRelyingPartyIdentifier: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates the object with a relying party identifier.

## Declaration

```objectivec
- (instancetype) initWithRelyingPartyIdentifier:(NSString *) relyingPartyIdentifier;
```

## Parameters

- `relyingPartyIdentifier`: The domain name of the service to authorize against.
