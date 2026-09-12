> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbuseridentity/isenabled](https://developer.apple.com/documentation/collaboration/cbuseridentity/isenabled)

# isEnabled (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the identity is allowed to authenticate.

## Declaration

```swift
var isEnabled: Bool { get }
```

<a id="return-value"></a>

## Return Value

`TRUE` if the identity can authenticate; otherwise, `FALSE`.

<a id="discussion"></a>

## Discussion

If the identity does not have authentication credentials (a password or certificate), it is not able to log in. However, an identity with authentication credentials does not ensure that it is enabled. Any identity can be disabled.

## See Also

### Password Authentication

- [authenticate(withPassword:)](authenticate%28withpassword_%29.md): Returns a Boolean value indicating whether the given password is correct for the identity.
- [certificate](certificate.md): Returns the public authentication certificate associated with a user identity.

# enabled (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the identity is allowed to authenticate.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEnabled) BOOL enabled;
```

<a id="return-value"></a>

## Return Value

`TRUE` if the identity can authenticate; otherwise, `FALSE`.

<a id="discussion"></a>

## Discussion

If the identity does not have authentication credentials (a password or certificate), it is not able to log in. However, an identity with authentication credentials does not ensure that it is enabled. Any identity can be disabled.

## See Also

### Password Authentication

- [authenticateWithPassword:](authenticate%28withpassword_%29.md): Returns a Boolean value indicating whether the given password is correct for the identity.
- [certificate](certificate.md): Returns the public authentication certificate associated with a user identity.
