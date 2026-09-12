> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationresponse/userstring](https://developer.apple.com/documentation/identitylookup/ilclassificationresponse/userstring)

# userString (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Text included in a response sent over SMS.

## Declaration

```swift
var userString: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property if you set the `ILClassificationExtensionSMSReportDestination` key in the extension’s `Info.plist` file. The string can store additional data that you want to pass in the SMS message.

## See Also

### Accessing Data

- [action](action.md): A classification that determines what action the system takes.
- [userInfo](userinfo.md): JSON data included in a response sent over the network.

# userString (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Text included in a response sent over SMS.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * userString;
```

<a id="Discussion"></a>

## Discussion

Use this property if you set the `ILClassificationExtensionSMSReportDestination` key in the extension’s `Info.plist` file. The string can store additional data that you want to pass in the SMS message.

## See Also

### Accessing Data

- [action](action.md): A classification that determines what action the system takes.
- [userInfo](userinfo.md): JSON data included in a response sent over the network.
