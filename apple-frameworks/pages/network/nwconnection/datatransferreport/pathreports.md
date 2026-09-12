> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/datatransferreport/pathreports](https://developer.apple.com/documentation/network/nwconnection/datatransferreport/pathreports)

# pathReports

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of reports for each network path the connection used.

## Declaration

```swift
let pathReports: [NWConnection.DataTransferReport.PathReport]
```

## See Also

### Examining Data Transfer

- [aggregatePathReport](aggregatepathreport.md): A report that sums counts across all network paths.
- [NWConnection.DataTransferReport.PathReport](pathreport.md): A report that contains details about data transfer over a single network path.
