> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/credentialid](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/credentialid)

# credentialID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The credential identifier for this passkey credential identity.

## Declaration

```swift
var credentialID: Data { get }
```

<a id="Discussion"></a>

## Discussion

Use the credential identifier, along with the [userHandle](userhandle.md), to identify the correct credential to use for a given relying party request.

## See Also

### Distinguishing identities

- [recordIdentifier](recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.

# credentialID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The credential identifier for this passkey credential identity.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * credentialID;
```

<a id="Discussion"></a>

## Discussion

Use the credential identifier, along with the [userHandle](userhandle.md), to identify the correct credential to use for a given relying party request.

## See Also

### Distinguishing identities

- [recordIdentifier](recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
