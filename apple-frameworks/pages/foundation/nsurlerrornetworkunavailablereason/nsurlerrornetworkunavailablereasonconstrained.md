> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonconstrained](https://developer.apple.com/documentation/foundation/nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonconstrained)

# NSURLErrorNetworkUnavailableReasonConstrained

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A reason that indicates network is unavailable because the user enabled “Low Data Mode” in the Settings app.

## Declaration

```objectivec
NSURLErrorNetworkUnavailableReasonConstrained
```

<a id="Discussion"></a>

## Discussion

This reason occurs when the following conditions are true:

- The only available network is cellular.
- The user has enabled “Low Data Mode” option in the Cellular Data Options section of the Settings app.
- The [NSURLSessionConfiguration](../urlsessionconfiguration.md) property [allowsConstrainedNetworkAccess](../urlsessionconfiguration/allowsconstrainednetworkaccess.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Unavailability reasons

- [NSURLErrorNetworkUnavailableReasonCellular](nsurlerrornetworkunavailablereasoncellular.md): A reason that indicates network is unavailable because the interface is cellular and cellular network is disabled.
- [NSURLErrorNetworkUnavailableReasonExpensive](nsurlerrornetworkunavailablereasonexpensive.md): A reason that indicates network is unavailable because the system marked the interface as expensive.
