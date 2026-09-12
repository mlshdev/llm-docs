> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionuserinfotransfer/userinfo](https://developer.apple.com/documentation/watchconnectivity/wcsessionuserinfotransfer/userinfo)

# userInfo (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The data being transferred.

## Declaration

```swift
var userInfo: [String : Any] { get }
```

## See Also

### Getting the Transfer Information

- [isCurrentComplicationInfo](iscurrentcomplicationinfo.md): A Boolean indicating whether the data is related to the app’s complication.

# userInfo (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The data being transferred.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,id> * userInfo;
```

## See Also

### Getting the Transfer Information

- [currentComplicationInfo](iscurrentcomplicationinfo.md): A Boolean indicating whether the data is related to the app’s complication.
