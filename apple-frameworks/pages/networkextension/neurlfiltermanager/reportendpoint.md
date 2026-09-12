> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/reportendpoint](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/reportendpoint)

# reportEndpoint

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The endpoint that the filter manager sends blocked URL reports to.

## Declaration

```swift
var reportEndpoint: String? { get set }
```

<a id="discussion"></a>

## Discussion

When configured, the manager sends reports of blocked URLs to the specified endpoint on the PIR server URL. In other words, for a PIR server at `https://pir.example.com/` and an endpoint of `reports`, the manager sends reports to `https://pir.example.com/reports`.

The manager sends reports periodically, as determined by the [reportInterval](reportinterval.md) property, using the format specified by [reportFormat](reportformat-swift.property.md). Each report is an HTTPS POST request, containing a list of blocked URLs accumulated during the last reporting period. The system authenticates and sends reports over the same OHTTP relay as the PIR traffic. Due to the system’s schedulding mechanism, your reporting system should allow slight deviations between the scheduled time and the actual performance of the task.

Reporting is available only on supervised devices. If you set this property on a non-supervised device, the manager will save the configuration but won’t send any reports.

To disable reporting, set this property to `nil`.

## See Also

### Producing filtering reports

- [reportFormat](reportformat-swift.property.md): The format the manager uses to send blocked URL reports.
- [NEURLFilterManager.ReportFormat](reportformat-swift.enum.md): An enumertion of report format types used when reporting blocked URLs.
- [reportInterval](reportinterval.md): The time interval (in seconds) at which the system sends reports of blocked URLs.
