> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/useractivity](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/useractivity)

# userActivity (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A user activity object that represents the state of the app at a moment in time.

## Declaration

```swift
var userActivity: NSUserActivity? { get }
```

<a id="Discussion"></a>

## Discussion

When the user taps on a complication specified by this configuration, the system launches the app and calls [handle(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1), passing the user activity. Your extension delegate’s handle method should update the app so that it’s in the specified state.

Because the system can pass configurations as part of a shared watch face, only include data useable by any instance of the app. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

## See Also

### Accessing the descriptor’s data

- [identifier](identifier.md): A string that uniquely identifies the descriptor.
- [displayName](displayname.md): A localized string that identifies complications from the descriptor to the user.
- [supportedFamilies](supportedfamilies-4ckbx.md): The families that support this type of complication.
- [userInfo](userinfo.md): A dictionary of data that your data source can use to generate timeline entries.

# userActivity (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

A user activity object that represents the state of the app at a moment in time.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUserActivity * userActivity;
```

<a id="Discussion"></a>

## Discussion

When the user taps on a complication specified by this configuration, the system launches the app and calls [handleActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1), passing the user activity. Your extension delegate’s handle method should update the app so that it’s in the specified state.

Because the system can pass configurations as part of a shared watch face, only include data useable by any instance of the app. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

## See Also

### Accessing the descriptor’s data

- [identifier](identifier.md): A string that uniquely identifies the descriptor.
- [displayName](displayname.md): A localized string that identifies complications from the descriptor to the user.
- [supportedFamilies](supportedfamilies-50ink.md): The families that support this type of complication.
- [userInfo](userinfo.md): A dictionary of data that your data source can use to generate timeline entries.
