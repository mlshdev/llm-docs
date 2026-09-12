> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/collecting-network-connection-metrics](https://developer.apple.com/documentation/network/collecting-network-connection-metrics)

# Collecting Network Connection Metrics

**Framework:** Network  
**Kind:** Sample Code  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · Xcode 13.0+

Use reports to understand how DNS and protocol handshakes impact connection establishment.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC 2019 session [713: Advances in Networking, Part 2](https://developer.apple.com/videos/play/wwdc19/713/).

## See Also

### Collecting Connection Metrics

- [requestEstablishmentReport(queue:completion:)](nwconnection/requestestablishmentreport%28queue_completion_%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [NWConnection.EstablishmentReport](nwconnection/establishmentreport.md): A report that provides metrics about the establishment of a connection.
- [startDataTransferReport()](nwconnection/startdatatransferreport%28%29.md): Begins a new data transfer report, which can later be collected.
- [NWConnection.PendingDataTransferReport](nwconnection/pendingdatatransferreport.md): An outstanding data transfer report that has yet to be collected.
- [NWConnection.DataTransferReport](nwconnection/datatransferreport.md): A report that provides metrics about data being sent and received on a connection.
