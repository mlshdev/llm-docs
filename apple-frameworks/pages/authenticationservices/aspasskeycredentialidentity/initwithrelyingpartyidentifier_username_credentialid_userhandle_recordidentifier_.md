> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/initwithrelyingpartyidentifier:username:credentialid:userhandle:recordidentifier:](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/initwithrelyingpartyidentifier:username:credentialid:userhandle:recordidentifier:)

# initWithRelyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Initializes a passkey credential identity.

## Declaration

```objectivec
- (instancetype) initWithRelyingPartyIdentifier:(NSString *) relyingPartyIdentifier userName:(NSString *) userName credentialID:(NSData *) credentialID userHandle:(NSData *) userHandle recordIdentifier:(NSString *) recordIdentifier;
```

## Parameters

- `relyingPartyIdentifier`: The relying party identifier associated with this credential.
- `userName`: The username associated with this credential.
- `credentialID`: The credential identifier for this credential.
- `userHandle`: The user handle associated with this credential.
- `recordIdentifier`: The record identifier for this credential.

<a id="return-value"></a>

## Return Value

The initialized credential identity.

## See Also

### Creating a credential identity

- [identityWithRelyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:](init%28relyingpartyidentifier_username_credentialid_userhandle_recordidentifier_%29-9iuhb.md): Creates and initializes a passkey credential identity.
