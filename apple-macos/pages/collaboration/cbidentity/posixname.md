> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/posixname](https://developer.apple.com/documentation/collaboration/cbidentity/posixname)

# posixName (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the POSIX name of the identity.

## Declaration

```swift
var posixName: String { get }
```

<a id="return-value"></a>

## Return Value

The POSIX name of the identity.

<a id="Discussion"></a>

## Discussion

The POSIX name is also referred to as the “short name” for an identity. It can only contain the characters A-Z, a-z, 0-9, -, \_, ., and @.

## See Also

### Getting Identity Attributes

- [aliases](aliases.md): Returns an array of aliases (alternate names) for the identity.
- [authority](authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [isHidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMember(ofGroup:)](ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [uuidString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.

# posixName (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the POSIX name of the identity.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * posixName;
```

<a id="return-value"></a>

## Return Value

The POSIX name of the identity.

<a id="Discussion"></a>

## Discussion

The POSIX name is also referred to as the “short name” for an identity. It can only contain the characters A-Z, a-z, 0-9, -, \_, ., and @.

## See Also

### Getting Identity Attributes

- [aliases](aliases.md): Returns an array of aliases (alternate names) for the identity.
- [authority](authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [hidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMemberOfGroup:](ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [UUIDString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.
