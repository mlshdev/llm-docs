> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/initwithidentifier:displayname:supportedfamilies:userinfo:](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/initwithidentifier:displayname:supportedfamilies:userinfo:)

# initWithIdentifier:displayName:supportedFamilies:userInfo:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new complication descriptor with an associated user info dictionary.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayName:(NSString *) displayName supportedFamilies:(NSArray<NSNumber *> *) supportedFamilies userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `identifier`: A string that uniquely identifies the descriptor.
- `displayName`: A localized name that ClockKit shows to the user to identify complications from the descriptor.
- `supportedFamilies`: The families that support this type of complication. Note that different descriptors can support different sets of families.
- `userInfo`: A dictionary containing additional data that helps your complication data source generate timeline entries.

<a id="Discussion"></a>

## Discussion

The system passes the user info dictionary to methods like your data source’s [getCurrentTimelineEntryForComplication:withHandler:](../clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) method as part of the complication. Your data source can use the information in the user info dictionary when creating the complications.

Because the system can pass configurations as part of a shared watch face, only include data in the user info dictionary that any instance of the app can use. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

When the user taps your complication, ClockKit includes the content of the `userInfo` property in the dictionary passed to the extension delegate’s [handleUserActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleuseractivity%28_:%29) method.

## See Also

### Creating descriptors

- [initWithIdentifier:displayName:supportedFamilies:](initwithidentifier_displayname_supportedfamilies_.md): Deprecated. Returns a new complication descriptor.
- [initWithIdentifier:displayName:supportedFamilies:userActivity:](initwithidentifier_displayname_supportedfamilies_useractivity_.md): Deprecated. Returns a new complication descriptor with an associated user activity.
