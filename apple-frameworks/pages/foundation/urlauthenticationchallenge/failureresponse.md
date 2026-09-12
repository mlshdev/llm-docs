> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge/failureresponse](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/failureresponse)

# failureResponse (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL response object representing the last authentication failure.

## Declaration

```swift
@NSCopying var failureResponse: URLResponse? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the protocol doesn’t use responses to indicate an authentication failure.

## See Also

### Related Documentation

- [error](error.md): The error object representing the last authentication failure.

### Getting properties of previous authentication attempts

- [previousFailureCount](previousfailurecount.md): The receiver’s count of failed authentication attempts.
- [proposedCredential](proposedcredential.md): The proposed credential for this challenge.

# failureResponse (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL response object representing the last authentication failure.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURLResponse * failureResponse;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the protocol doesn’t use responses to indicate an authentication failure.

## See Also

### Related Documentation

- [error](error.md): The error object representing the last authentication failure.

### Getting properties of previous authentication attempts

- [previousFailureCount](previousfailurecount.md): The receiver’s count of failed authentication attempts.
- [proposedCredential](proposedcredential.md): The proposed credential for this challenge.
