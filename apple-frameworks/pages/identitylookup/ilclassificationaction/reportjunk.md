> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationaction/reportjunk](https://developer.apple.com/documentation/identitylookup/ilclassificationaction/reportjunk)

# ILClassificationAction.reportJunk (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The system should report the communication as junk.

## Declaration

```swift
case reportJunk
```

<a id="Discussion"></a>

## Discussion

The extension creates an SMS message based on the response, and displays the message to the user. The user can then send or cancel the report. Finally, the extension dismisses the [ILClassificationUIExtensionViewController](../../identitylookupui/ilclassificationuiextensionviewcontroller.md).

## See Also

### Classifications

- [ILClassificationAction.none](none.md): No action is required.
- [ILClassificationAction.reportJunkAndBlockSender](reportjunkandblocksender.md): The system should report the communication as junk and add the number to the system’s block list.
- [ILClassificationAction.reportNotJunk](reportnotjunk.md): The system should report that the communication is not junk.

# ILClassificationActionReportJunk (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The system should report the communication as junk.

## Declaration

```objectivec
ILClassificationActionReportJunk
```

<a id="Discussion"></a>

## Discussion

The extension creates an SMS message based on the response, and displays the message to the user. The user can then send or cancel the report. Finally, the extension dismisses the [ILClassificationUIExtensionViewController](../../identitylookupui/ilclassificationuiextensionviewcontroller.md).

## See Also

### Classifications

- [ILClassificationActionNone](none.md): No action is required.
- [ILClassificationActionReportJunkAndBlockSender](reportjunkandblocksender.md): The system should report the communication as junk and add the number to the system’s block list.
- [ILClassificationActionReportNotJunk](reportnotjunk.md): The system should report that the communication is not junk.
