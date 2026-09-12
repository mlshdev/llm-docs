> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationaction](https://developer.apple.com/documentation/identitylookup/ilclassificationaction)

# ILClassificationAction (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The actions the system can take in response to the reported communication.

## Declaration

```swift
enum ILClassificationAction
```

## Topics

### Classifications

- [ILClassificationAction.none](ilclassificationaction/none.md): No action is required.
- [ILClassificationAction.reportJunk](ilclassificationaction/reportjunk.md): The system should report the communication as junk.
- [ILClassificationAction.reportJunkAndBlockSender](ilclassificationaction/reportjunkandblocksender.md): The system should report the communication as junk and add the number to the system’s block list.
- [ILClassificationAction.reportNotJunk](ilclassificationaction/reportnotjunk.md): The system should report that the communication is not junk.

### Initializers

- [init(rawValue:)](ilclassificationaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responses

- [ILClassificationResponse](ilclassificationresponse.md): A response object that tells the system how to handle the reported communications.

# ILClassificationAction (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The actions the system can take in response to the reported communication.

## Declaration

```objectivec
enum ILClassificationAction : NSInteger;
```

## Topics

### Classifications

- [ILClassificationActionNone](ilclassificationaction/none.md): No action is required.
- [ILClassificationActionReportJunk](ilclassificationaction/reportjunk.md): The system should report the communication as junk.
- [ILClassificationActionReportJunkAndBlockSender](ilclassificationaction/reportjunkandblocksender.md): The system should report the communication as junk and add the number to the system’s block list.
- [ILClassificationActionReportNotJunk](ilclassificationaction/reportnotjunk.md): The system should report that the communication is not junk.

## See Also

### Responses

- [ILClassificationResponse](ilclassificationresponse.md): A response object that tells the system how to handle the reported communications.
