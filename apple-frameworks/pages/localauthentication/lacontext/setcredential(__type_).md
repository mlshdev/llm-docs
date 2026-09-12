> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/setcredential(_:type:)](https://developer.apple.com/documentation/localauthentication/lacontext/setcredential(_:type:))

# setCredential(\_:type:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Sets an application-provided credential to be used when evaluating authentication.

## Declaration

```swift
func setCredential(_ credential: Data?, type: LACredentialType) -> Bool
```

## Parameters

- `credential`: The credential to be used when evaluating the authentication context.

  Setting this parameter to `nil` removes any existing credential of the specified type.
- `type`: The type of the specified credential. For possible values, see [LACredentialType](../lacredentialtype.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the credential was set, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing credentials

- [isCredentialSet(\_:)](iscredentialset%28__%29.md): Returns a Boolean value indicating whether the specified credential type is set.
- [LACredentialType](../lacredentialtype.md): The types of credentials to be used for authentication.

# setCredential:type: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Sets an application-provided credential to be used when evaluating authentication.

## Declaration

```objectivec
- (BOOL) setCredential:(NSData *) credential type:(LACredentialType) type;
```

## Parameters

- `credential`: The credential to be used when evaluating the authentication context.

  Setting this parameter to `nil` removes any existing credential of the specified type.
- `type`: The type of the specified credential. For possible values, see [LACredentialType](../lacredentialtype.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the credential was set, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing credentials

- [isCredentialSet:](iscredentialset%28__%29.md): Returns a Boolean value indicating whether the specified credential type is set.
- [LACredentialType](../lacredentialtype.md): The types of credentials to be used for authentication.
