> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity/username](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity/username)

# userName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The username of this passkey credential.

## Declaration

```swift
var userName: String { get }
```

<a id="Discussion"></a>

## Discussion

The passkey reports its `userName` value as its [user](../ascredentialidentity/user.md).

## See Also

### Associating a user

- [userHandle](userhandle.md): The user handle of this passkey credential.

# userName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The username of this passkey credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * userName;
```

<a id="Discussion"></a>

## Discussion

The passkey reports its `userName` value as its [user](../ascredentialidentity/user.md).

## See Also

### Associating a user

- [userHandle](userhandle.md): The user handle of this passkey credential.
