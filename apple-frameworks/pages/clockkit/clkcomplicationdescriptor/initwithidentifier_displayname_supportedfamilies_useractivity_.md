> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/initwithidentifier:displayname:supportedfamilies:useractivity:](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/initwithidentifier:displayname:supportedfamilies:useractivity:)

# initWithIdentifier:displayName:supportedFamilies:userActivity:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new complication descriptor with an associated user activity.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayName:(NSString *) displayName supportedFamilies:(NSArray<NSNumber *> *) supportedFamilies userActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `identifier`: A string that uniquely identifies the descriptor.
- `displayName`: A localized name that ClockKit shows to the user to identify complications from the descriptor.
- `supportedFamilies`: The families that support this type of complication. Note that different descriptors can support different sets of families.
- `userActivity`: A user activity object that represents the state of the app at a moment in time.

<a id="Discussion"></a>

## Discussion

If the user taps on a complication specified by this descriptor, the system launches the app and calls [handleActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1), passing the user activity. Your [handleActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1) method should update the app so that it’s in the specified state.

Because the system can pass configurations as part of a shared watch face, only include data useable by any instance of the app. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

## See Also

### Creating descriptors

- [initWithIdentifier:displayName:supportedFamilies:](initwithidentifier_displayname_supportedfamilies_.md): Deprecated. Returns a new complication descriptor.
- [initWithIdentifier:displayName:supportedFamilies:userInfo:](initwithidentifier_displayname_supportedfamilies_userinfo_.md): Deprecated. Returns a new complication descriptor with an associated user info dictionary.
