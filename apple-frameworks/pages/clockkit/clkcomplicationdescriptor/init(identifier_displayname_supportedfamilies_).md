> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/init(identifier:displayname:supportedfamilies:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/init(identifier:displayname:supportedfamilies:))

# init(identifier:displayName:supportedFamilies:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new complication descriptor.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(identifier: String, displayName: String, supportedFamilies: [CLKComplicationFamily])
```

## Parameters

- `identifier`: A string that uniquely identifies the descriptor.
- `displayName`: A localized name that ClockKit shows to the user to identify complications from the descriptor.
- `supportedFamilies`: The families that support this type of complication. Note that different descriptors can support different sets of families.

## See Also

### Creating descriptors

- [init(identifier:displayName:supportedFamilies:userActivity:)](init%28identifier_displayname_supportedfamilies_useractivity_%29.md): Deprecated. Returns a new complication descriptor with an associated user activity.
- [init(identifier:displayName:supportedFamilies:userInfo:)](init%28identifier_displayname_supportedfamilies_userinfo_%29.md): Deprecated. Returns a new complication descriptor with an associated dictionary of user data.
