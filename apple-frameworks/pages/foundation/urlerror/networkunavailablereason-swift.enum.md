> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/networkunavailablereason-swift.enum](https://developer.apple.com/documentation/foundation/urlerror/networkunavailablereason-swift.enum)

# URLError.NetworkUnavailableReason

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.

## Declaration

```swift
enum NetworkUnavailableReason
```

<a id="overview"></a>

## Overview

The network may be unavailable due to restrictions placed on the [URLSessionConfiguration](../urlsessionconfiguration.md), such as [allowsConstrainedNetworkAccess](../urlsessionconfiguration/allowsconstrainednetworkaccess.md), [allowsExpensiveNetworkAccess](../urlsessionconfiguration/allowsexpensivenetworkaccess.md) and [allowsCellularAccess](../urlsessionconfiguration/allowscellularaccess.md).

## Topics

### Unavailability reasons

- [URLError.NetworkUnavailableReason.cellular](networkunavailablereason-swift.enum/cellular.md): A reason that indicates network is unavailable because the interface is cellular and cellular network is disabled.
- [URLError.NetworkUnavailableReason.constrained](networkunavailablereason-swift.enum/constrained.md): A reason that indicates network is unavailable because the user enabled “Low Data Mode” in the Settings app.
- [URLError.NetworkUnavailableReason.expensive](networkunavailablereason-swift.enum/expensive.md): A reason that indicates network is unavailable because the system marked the interface as expensive.

### Enumeration Cases

- [URLError.NetworkUnavailableReason.ultraConstrained](networkunavailablereason-swift.enum/ultraconstrained.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error details

- [failingURL](failingurl.md): The URL which caused a load to fail.
- [failureURLPeerTrust](failureurlpeertrust.md): The state of a failed SSL handshake.
- [failureURLString](failureurlstring.md): Deprecated. The string for the URL which caused a load to fail.
- [downloadTaskResumeData](downloadtaskresumedata.md): An opaque data object used to resume a failed download task.
- [backgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.property.md): The reason for canceling a background task.
- [URLError.BackgroundTaskCancelledReason](backgroundtaskcancelledreason-swift.enum.md): An enumeration of reasons used to explain the cancellation of a background task.
- [networkUnavailableReason](networkunavailablereason-swift.property.md): The reason the network was unavailable for a task.
