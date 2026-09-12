> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge/previousfailurecount](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/previousfailurecount)

# previousFailureCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s count of failed authentication attempts.

## Declaration

```swift
var previousFailureCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The previous failure count includes failures from *all* protection spaces, not just the current one.

## See Also

### Getting properties of previous authentication attempts

- [failureResponse](failureresponse.md): The URL response object representing the last authentication failure.
- [proposedCredential](proposedcredential.md): The proposed credential for this challenge.

# previousFailureCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s count of failed authentication attempts.

## Declaration

```objectivec
@property (readonly) NSInteger previousFailureCount;
```

<a id="Discussion"></a>

## Discussion

The previous failure count includes failures from *all* protection spaces, not just the current one.

## See Also

### Getting properties of previous authentication attempts

- [failureResponse](failureresponse.md): The URL response object representing the last authentication failure.
- [proposedCredential](proposedcredential.md): The proposed credential for this challenge.
