> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/userhandle](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/userhandle)

# userHandle (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The user handle of this passkey credential.

## Declaration

```swift
var userHandle: Data { get }
```

<a id="Discussion"></a>

## Discussion

Use the user handle, along with the [credentialID](credentialid.md), to identify the correct credential to use for a given relying party request.

## See Also

### Associating a user

- [userName](username.md): The username of this passkey credential.

# userHandle (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The user handle of this passkey credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * userHandle;
```

<a id="Discussion"></a>

## Discussion

Use the user handle, along with the [credentialID](credentialid.md), to identify the correct credential to use for a given relying party request.

## See Also

### Associating a user

- [userName](username.md): The username of this passkey credential.
