> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/authority](https://developer.apple.com/documentation/collaboration/cbidentity/authority)

# authority (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the identity authority where the identity is stored.

## Declaration

```swift
var authority: CBIdentityAuthority { get }
```

<a id="return-value"></a>

## Return Value

The identity authority where the identity is stored.

## See Also

### Getting Identity Attributes

- [aliases](aliases.md): Returns an array of aliases (alternate names) for the identity.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [isHidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMember(ofGroup:)](ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [posixName](posixname.md): Returns the POSIX name of the identity.
- [uuidString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.

# authority (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the identity authority where the identity is stored.

## Declaration

```objectivec
@property (nonatomic, readonly) CBIdentityAuthority * authority;
```

<a id="return-value"></a>

## Return Value

The identity authority where the identity is stored.

## See Also

### Getting Identity Attributes

- [aliases](aliases.md): Returns an array of aliases (alternate names) for the identity.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [hidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMemberOfGroup:](ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [posixName](posixname.md): Returns the POSIX name of the identity.
- [UUIDString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.
