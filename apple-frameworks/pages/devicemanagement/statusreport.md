> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusreport](https://developer.apple.com/documentation/devicemanagement/statusreport)

# StatusReport

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Provides details about an error for an item in a status report.

## Declaration

```
object StatusReport
```

## Properties

- `StatusItems` — `StatusReport.StatusItems` (required): A dictionary where the keys are the status item paths and values are the corresponding status item value.
- `Errors` — `[StatusReport.Error]` (required): An array of errors for this status report.
- `FullReport` — `boolean`: The system sets this to `true` to indicate that the status report contains the full set of current status, and is not an incremental report. A full status report includes the full set of items in any status array item, not just the changes. Servers use this to replace their entire status for the device, rather than do an incremental update to the existing status. The system sets this to `true` when sending a “safety sync” status report, which is typically sent every 24 hours or so.
  **Default:** `false`

## Mentioned In

- [Installing packages](installing-packages.md)
- [Leveraging the declarative management data model to scale devices](leveraging-the-declarative-management-data-model-to-scale-devices.md)
- [Processing status for managed apps](processing-status-for-managed-apps.md)

<a id="Discussion"></a>

## Discussion

The device sends a status report when a subscribed status item changes. The report contains just the status items that have changed. About once a day, the device also sends a full status report containing all the subscribed status items, and the `FullReport` key is set to `true` in the report. This allows servers to reset their status items in case they missed an incremental report.

## Topics

### Dictionaries

- [StatusReport.Error](statusreport/error.md)
- [StatusReport.StatusItems](statusreport/statusitems-data.dictionary.md)

## See Also

### Status report

- [StatusReason](statusreason.md): Provides details about an error for an item in a status report.
