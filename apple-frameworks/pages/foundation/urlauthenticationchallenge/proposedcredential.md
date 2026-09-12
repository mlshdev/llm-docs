> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge/proposedcredential](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/proposedcredential)

# proposedCredential (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The proposed credential for this challenge.

## Declaration

```swift
@NSCopying var proposedCredential: URLCredential? { get }
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` if there is no default credential for this challenge.

If you have previously attempted to authenticate and failed, this method returns the most recent failed credential.

If the proposed credential is not `nil` and returns [true](https://developer.apple.com/documentation/swift/true) when you call its [hasPassword](../urlcredential/haspassword.md) method, then the credential is ready to use as-is. If the proposed credential’s [hasPassword](../urlcredential/haspassword.md) method returns [false](https://developer.apple.com/documentation/swift/false), then the credential provides a default user name, and the client must prompt the user for a corresponding password.

## See Also

### Getting properties of previous authentication attempts

- [failureResponse](failureresponse.md): The URL response object representing the last authentication failure.
- [previousFailureCount](previousfailurecount.md): The receiver’s count of failed authentication attempts.

# proposedCredential (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The proposed credential for this challenge.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLCredential * proposedCredential;
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` if there is no default credential for this challenge.

If you have previously attempted to authenticate and failed, this method returns the most recent failed credential.

If the proposed credential is not `nil` and returns [true](https://developer.apple.com/documentation/swift/true) when you call its [hasPassword](../urlcredential/haspassword.md) method, then the credential is ready to use as-is. If the proposed credential’s [hasPassword](../urlcredential/haspassword.md) method returns [false](https://developer.apple.com/documentation/swift/false), then the credential provides a default user name, and the client must prompt the user for a corresponding password.

## See Also

### Getting properties of previous authentication attempts

- [failureResponse](failureresponse.md): The URL response object representing the last authentication failure.
- [previousFailureCount](previousfailurecount.md): The receiver’s count of failed authentication attempts.
