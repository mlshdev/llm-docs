> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/initwithidentifier:displayname:supportedfamilies:](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/initwithidentifier:displayname:supportedfamilies:)

# initWithIdentifier:displayName:supportedFamilies:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new complication descriptor.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier displayName:(NSString *) displayName supportedFamilies:(NSArray<NSNumber *> *) supportedFamilies;
```

## Parameters

- `identifier`: A string that uniquely identifies the descriptor.
- `displayName`: A localized name that ClockKit shows to the user to identify complications from the descriptor.
- `supportedFamilies`: The families that support this type of complication. Note that different descriptors can support different sets of families.

## See Also

### Creating descriptors

- [initWithIdentifier:displayName:supportedFamilies:userActivity:](initwithidentifier_displayname_supportedfamilies_useractivity_.md): Deprecated. Returns a new complication descriptor with an associated user activity.
- [initWithIdentifier:displayName:supportedFamilies:userInfo:](initwithidentifier_displayname_supportedfamilies_userinfo_.md): Deprecated. Returns a new complication descriptor with an associated user info dictionary.
