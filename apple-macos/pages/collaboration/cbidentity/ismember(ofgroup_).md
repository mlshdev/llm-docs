> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/ismember(ofgroup:)](https://developer.apple.com/documentation/collaboration/cbidentity/ismember(ofgroup:))

# isMember(ofGroup:) (Swift)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the identity is a member of the specified group.

## Declaration

```swift
func isMember(ofGroup group: CBGroupIdentity) -> Bool
```

## Parameters

- `group`: The group to check for membership.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the identity is a member of the group; [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Getting Identity Attributes

- [aliases](aliases.md): Returns an array of aliases (alternate names) for the identity.
- [authority](authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [isHidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [posixName](posixname.md): Returns the POSIX name of the identity.
- [uuidString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.

# isMemberOfGroup: (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether the identity is a member of the specified group.

## Declaration

```objectivec
- (BOOL) isMemberOfGroup:(CBGroupIdentity *) group;
```

## Parameters

- `group`: The group to check for membership.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the identity is a member of the group; [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Getting Identity Attributes

- [aliases](aliases.md): Returns an array of aliases (alternate names) for the identity.
- [authority](authority.md): Returns the identity authority where the identity is stored.
- [emailAddress](emailaddress.md): Returns the email address of an identity.
- [fullName](fullname.md): Returns the full name of the identity.
- [image](image.md): Returns the image associated with an identity.
- [hidden](ishidden.md): Returns a Boolean value indicating the state of the identity’s hidden property.
- [posixName](posixname.md): Returns the POSIX name of the identity.
- [UUIDString](uuidstring.md): Deprecated. Returns the UUID of the identity as a string.
