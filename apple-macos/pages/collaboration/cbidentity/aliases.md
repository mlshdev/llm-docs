> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/aliases](https://developer.apple.com/documentation/collaboration/cbidentity/aliases)

# aliases (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an array of aliases (alternate names) for the identity.

## Declaration

```swift
var aliases: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the alternate names for the identity.

<a id="Discussion"></a>

## Discussion

An identity can have zero or more aliases. Like the full and short names, two identities cannot share an alias.

## See Also

### Getting Identity Attributes

- [authority](authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [isHidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMember(ofGroup:)](ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [posixName](posixname.md): Returns the POSIX name of the identity.
- [uuidString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.

# aliases (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an array of aliases (alternate names) for the identity.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * aliases;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the alternate names for the identity.

<a id="Discussion"></a>

## Discussion

An identity can have zero or more aliases. Like the full and short names, two identities cannot share an alias.

## See Also

### Getting Identity Attributes

- [authority](authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [hidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [isMemberOfGroup:](ismember%28ofgroup_%29.md): Returns a Boolean value indicating whether the identity is a member of the specified group.
- [posixName](posixname.md): Returns the POSIX name of the identity.
- [UUIDString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.
