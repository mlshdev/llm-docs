> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge/error](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/error)

# error (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error object representing the last authentication failure.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the protocol doesn’t use errors to indicate an authentication failure.

## See Also

### Related Documentation

- [failureResponse](failureresponse.md): The URL response object representing the last authentication failure.

# error (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error object representing the last authentication failure.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if the protocol doesn’t use errors to indicate an authentication failure.

## See Also

### Related Documentation

- [failureResponse](failureresponse.md): The URL response object representing the last authentication failure.
