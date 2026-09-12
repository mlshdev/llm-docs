> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport](https://developer.apple.com/documentation/network/nwconnection/establishmentreport)

# NWConnection.EstablishmentReport

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A report that provides metrics about the establishment of a connection.

## Declaration

```swift
struct EstablishmentReport
```

<a id="overview"></a>

## Overview

Use this report to inspect connection establishment details, such as its resolution steps, use of proxies, and duration.

This report shows different data when iCloud Private Relay makes the connection. iCloud Private Relay can change the timing and sequence of events for your connections by using a set of privacy proxies.

When iCloud Private Relay is in use, any proxied connections have the [usedProxy](establishmentreport/usedproxy.md) property set. The [handshakes](establishmentreport/handshakes.md) property contains information about the stages of proxy connections used, and the timings to establish the end-to-end connection.

Connections that aren’t proxied might still use iCloud Private Relay for name resolution. In this case, the [resolutions](establishmentreport/resolutions.md) property includes information about resolutions that use the `https` DNS protocol.

## Topics

### Inspecting Connection Attempts

- [duration](establishmentreport/duration.md): The total duration of the successful connection establishment attempt, from the preparing state to the ready state.
- [previousAttemptCount](establishmentreport/previousattemptcount.md): The number of attempts made before the successful attempt, when the connection moved from the preparing state back to the waiting state.
- [attemptStartedAfterInterval](establishmentreport/attemptstartedafterinterval.md): The time between the call to start and the beginning of the successful connection attempt.

### Inspecting Resolution

- [resolutions](establishmentreport/resolutions.md): The array of resolution steps performed during connection establishment, in order from first resolved to last resolved.
- [NWConnection.EstablishmentReport.Resolution](establishmentreport/resolution.md): A description of a single DNS resolution step.

### Inspecting Protocol Handshakes

- [handshakes](establishmentreport/handshakes.md): The array of protocol handshakes in order from first completed to last completed.
- [NWConnection.EstablishmentReport.Handshake](establishmentreport/handshake.md): A description of a single protocol handshake.

### Checking for Proxies

- [proxyConfigured](establishmentreport/proxyconfigured.md): A Boolean indicating whether a proxy was configured on the connection.
- [usedProxy](establishmentreport/usedproxy.md): A Boolean indicating whether the connection used a proxy.
- [proxyEndpoint](establishmentreport/proxyendpoint.md): The endpoint of the proxy the connection used.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collecting Connection Metrics

- [Collecting Network Connection Metrics](../collecting-network-connection-metrics.md): Use reports to understand how DNS and protocol handshakes impact connection establishment.
- [requestEstablishmentReport(queue:completion:)](requestestablishmentreport%28queue_completion_%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [startDataTransferReport()](startdatatransferreport%28%29.md): Begins a new data transfer report, which can later be collected.
- [NWConnection.PendingDataTransferReport](pendingdatatransferreport.md): An outstanding data transfer report that has yet to be collected.
- [NWConnection.DataTransferReport](datatransferreport.md): A report that provides metrics about data being sent and received on a connection.
