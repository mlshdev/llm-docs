> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/iscredentialset(_:)](https://developer.apple.com/documentation/localauthentication/lacontext/iscredentialset(_:))

# isCredentialSet(\_:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value indicating whether the specified credential type is set.

## Declaration

```swift
func isCredentialSet(_ type: LACredentialType) -> Bool
```

## Parameters

- `type`: The type of the credential. For possible values, see [LACredentialType](../lacredentialtype.md)

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the credential is set, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing credentials

- [setCredential(\_:type:)](setcredential%28__type_%29.md): Sets an application-provided credential to be used when evaluating authentication.
- [LACredentialType](../lacredentialtype.md): The types of credentials to be used for authentication.

# isCredentialSet: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value indicating whether the specified credential type is set.

## Declaration

```objectivec
- (BOOL) isCredentialSet:(LACredentialType) type;
```

## Parameters

- `type`: The type of the credential. For possible values, see [LACredentialType](../lacredentialtype.md)

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the credential is set, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing credentials

- [setCredential:type:](setcredential%28__type_%29.md): Sets an application-provided credential to be used when evaluating authentication.
- [LACredentialType](../lacredentialtype.md): The types of credentials to be used for authentication.
