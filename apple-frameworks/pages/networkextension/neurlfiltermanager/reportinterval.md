> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/reportinterval](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/reportinterval)

# reportInterval

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The time interval (in seconds) at which the system sends reports of blocked URLs.

## Declaration

```swift
var reportInterval: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

This value defaults to `86400`, equal to one day. The minimum allowed interval is `3600` (one hour).

## See Also

### Producing filtering reports

- [reportEndpoint](reportendpoint.md): The endpoint that the filter manager sends blocked URL reports to.
- [reportFormat](reportformat-swift.property.md): The format the manager uses to send blocked URL reports.
- [NEURLFilterManager.ReportFormat](reportformat-swift.enum.md): An enumertion of report format types used when reporting blocked URLs.
