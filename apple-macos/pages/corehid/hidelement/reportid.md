> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/reportid](https://developer.apple.com/documentation/corehid/hidelement/reportid)

# reportID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The report ID for the report that contains this element.

## Declaration

```swift
var reportID: HIDReportID?
```

<a id="discussion"></a>

## Discussion

This may not be populated if the descriptor contains only one report.
