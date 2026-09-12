> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplication/useractivity](https://developer.apple.com/documentation/clockkit/clkcomplication/useractivity)

# userActivity (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

An object that represents the state of the app at a moment in time.

## Declaration

```swift
var userActivity: NSUserActivity? { get }
```

## Mentioned In

- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

When the user taps on a complication specified by this configuration, the system launches the app and calls [handle(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1), passing the user activity. Your extension delegate’s [handle(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1) method should update the app so that it’s in the specified state.

Because the system can pass configurations as part of a shared watch face, only include data useable by any instance of the app. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

## See Also

### Accessing Data About the Complication

- [family](family.md): Deprecated. The family to which the complication belongs.
- [identifier](identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userInfo](userinfo.md): Deprecated. A dictionary of additional data associated with the complication.

# userActivity (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

An object that represents the state of the app at a moment in time.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUserActivity * userActivity;
```

## Mentioned In

- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

When the user taps on a complication specified by this configuration, the system launches the app and calls [handleActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1), passing the user activity. Your extension delegate’s [handleActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1) method should update the app so that it’s in the specified state.

Because the system can pass configurations as part of a shared watch face, only include data useable by any instance of the app. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

## See Also

### Accessing Data About the Complication

- [family](family.md): Deprecated. The family to which the complication belongs.
- [identifier](identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userInfo](userinfo.md): Deprecated. A dictionary of additional data associated with the complication.
