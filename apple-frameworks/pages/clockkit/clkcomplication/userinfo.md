> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplication/userinfo](https://developer.apple.com/documentation/clockkit/clkcomplication/userinfo)

# userInfo (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A dictionary of additional data associated with the complication.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get }
```

## Mentioned In

- [Creating a timeline entry](../creating-a-timeline-entry.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

Because the system can pass configurations as part of a shared watch face, only include data in the user info dictionary that any instance of the app can use. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

When the user taps your complication, ClockKit includes the content of the `userInfo` property in the dictionary passed to the extension delegate’s [handleUserActivity(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleuseractivity%28_:%29) method. Your data source can also access the user info dictionary when creating the template for this complication.

## See Also

### Accessing Data About the Complication

- [family](family.md): Deprecated. The family to which the complication belongs.
- [identifier](identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userActivity](useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.

# userInfo (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A dictionary of additional data associated with the complication.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary * userInfo;
```

## Mentioned In

- [Creating a timeline entry](../creating-a-timeline-entry.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

Because the system can pass configurations as part of a shared watch face, only include data in the user info dictionary that any instance of the app can use. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

When the user taps your complication, ClockKit includes the content of the `userInfo` property in the dictionary passed to the extension delegate’s [handleUserActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleuseractivity%28_:%29) method. Your data source can also access the user info dictionary when creating the template for this complication.

## See Also

### Accessing Data About the Complication

- [family](family.md): Deprecated. The family to which the complication belongs.
- [identifier](identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userActivity](useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
