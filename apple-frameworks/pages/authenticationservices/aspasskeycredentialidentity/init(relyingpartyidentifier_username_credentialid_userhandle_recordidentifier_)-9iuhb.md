> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/init(relyingpartyidentifier:username:credentialid:userhandle:recordidentifier:)-9iuhb](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/init(relyingpartyidentifier:username:credentialid:userhandle:recordidentifier:)-9iuhb)

# init(relyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates and initializes a passkey credential identity.

## Declaration

```swift
convenience init(relyingPartyIdentifier: String, userName: String, credentialID: Data, userHandle: Data, recordIdentifier: String?)
```

<a id="return-value"></a>

## Return Value

The new credential identity object.

## See Also

### Creating a credential identity

- [init(relyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:)](init%28relyingpartyidentifier_username_credentialid_userhandle_recordidentifier_%29-7u7p1.md): Initializes a passkey credential identity.

# identityWithRelyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates and initializes a passkey credential identity.

## Declaration

```objectivec
+ (instancetype) identityWithRelyingPartyIdentifier:(NSString *) relyingPartyIdentifier userName:(NSString *) userName credentialID:(NSData *) credentialID userHandle:(NSData *) userHandle recordIdentifier:(NSString *) recordIdentifier;
```

<a id="return-value"></a>

## Return Value

The new credential identity object.

## See Also

### Creating a credential identity

- [initWithRelyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:](initwithrelyingpartyidentifier_username_credentialid_userhandle_recordidentifier_.md): Initializes a passkey credential identity.
