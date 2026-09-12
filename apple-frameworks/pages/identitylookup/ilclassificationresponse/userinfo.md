> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationresponse/userinfo](https://developer.apple.com/documentation/identitylookup/ilclassificationresponse/userinfo)

# userInfo (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

JSON data included in a response sent over the network.

## Declaration

```swift
var userInfo: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property if you set the `ILClassificationExtensionNetworkReportDestination` key in the extension’s `Info.plist` file. The property stores any additional data that you want to pass to your servers as part of the response. Both the keys and values must be JSON-serializable. For more information, see [JSONSerialization](../../foundation/jsonserialization.md).

## See Also

### Accessing Data

- [action](action.md): A classification that determines what action the system takes.
- [userString](userstring.md): Text included in a response sent over SMS.

# userInfo (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

JSON data included in a response sent over the network.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * userInfo;
```

<a id="Discussion"></a>

## Discussion

Use this property if you set the `ILClassificationExtensionNetworkReportDestination` key in the extension’s `Info.plist` file. The property stores any additional data that you want to pass to your servers as part of the response. Both the keys and values must be JSON-serializable. For more information, see [NSJSONSerialization](../../foundation/jsonserialization.md).

## See Also

### Accessing Data

- [action](action.md): A classification that determines what action the system takes.
- [userString](userstring.md): Text included in a response sent over SMS.
