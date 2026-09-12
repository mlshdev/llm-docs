> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbuseridentity/authenticate(withpassword:)](https://developer.apple.com/documentation/collaboration/cbuseridentity/authenticate(withpassword:))

# authenticate(withPassword:) (Swift)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the given password is correct for the identity.

## Declaration

```swift
func authenticate(withPassword password: String) -> Bool
```

## Parameters

- `password`: The password to test for the identity.

<a id="return-value"></a>

## Return Value

`TRUE` if the password is correct; otherwise, `FALSE`.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

### Password Authentication

- [certificate](certificate.md): Returns the public authentication certificate associated with a user identity.
- [isEnabled](isenabled.md): Returns a Boolean value indicating whether the identity is allowed to authenticate.

# authenticateWithPassword: (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the given password is correct for the identity.

## Declaration

```objectivec
- (BOOL) authenticateWithPassword:(NSString *) password;
```

## Parameters

- `password`: The password to test for the identity.

<a id="return-value"></a>

## Return Value

`TRUE` if the password is correct; otherwise, `FALSE`.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

### Password Authentication

- [certificate](certificate.md): Returns the public authentication certificate associated with a user identity.
- [enabled](isenabled.md): Returns a Boolean value indicating whether the identity is allowed to authenticate.
