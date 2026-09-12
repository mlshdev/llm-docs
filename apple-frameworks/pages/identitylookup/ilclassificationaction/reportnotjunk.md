> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationaction/reportnotjunk](https://developer.apple.com/documentation/identitylookup/ilclassificationaction/reportnotjunk)

# ILClassificationAction.reportNotJunk (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The system should report that the communication is not junk.

## Declaration

```swift
case reportNotJunk
```

<a id="Discussion"></a>

## Discussion

The extension creates an SMS message based on the response, and displays the message to the user. The user can then send or cancel the report. Finally, the extension dismisses the [ILClassificationUIExtensionViewController](../../identitylookupui/ilclassificationuiextensionviewcontroller.md).

## See Also

### Classifications

- [ILClassificationAction.none](none.md): No action is required.
- [ILClassificationAction.reportJunk](reportjunk.md): The system should report the communication as junk.
- [ILClassificationAction.reportJunkAndBlockSender](reportjunkandblocksender.md): The system should report the communication as junk and add the number to the system’s block list.

# ILClassificationActionReportNotJunk (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The system should report that the communication is not junk.

## Declaration

```objectivec
ILClassificationActionReportNotJunk
```

<a id="Discussion"></a>

## Discussion

The extension creates an SMS message based on the response, and displays the message to the user. The user can then send or cancel the report. Finally, the extension dismisses the [ILClassificationUIExtensionViewController](../../identitylookupui/ilclassificationuiextensionviewcontroller.md).

## See Also

### Classifications

- [ILClassificationActionNone](none.md): No action is required.
- [ILClassificationActionReportJunk](reportjunk.md): The system should report the communication as junk.
- [ILClassificationActionReportJunkAndBlockSender](reportjunkandblocksender.md): The system should report the communication as junk and add the number to the system’s block list.
