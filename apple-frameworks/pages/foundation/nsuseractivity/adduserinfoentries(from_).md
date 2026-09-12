> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/adduserinfoentries(from:)](https://developer.apple.com/documentation/foundation/nsuseractivity/adduserinfoentries(from:))

# addUserInfoEntries(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the contents of the specified dictionary to the user info dictionary.

## Declaration

```swift
func addUserInfoEntries(from otherDictionary: [AnyHashable : Any])
```

## Parameters

- `otherDictionary`: The dictionary containing entries to be added.

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to add the keys from `otherDictionary` into the dictionary in the [userInfo](userinfo.md) property. If the same key is in both dictionaries, the value of the key is set to the value in the `otherDictionary` parameter.

It’s recommended that you keep the [userInfo](userinfo.md) dictionary as small as possible. The larger the dictionary, the longer it takes to deliver that payload and resume the activity.

## See Also

### Specifying activity-related data

- [userInfo](userinfo.md): A dictionary containing app-specific state information needed to continue an activity on another device.
- [requiredUserInfoKeys](requireduserinfokeys.md): A set of keys that represent the minimal information about the activity that should be stored for later restoration.

# addUserInfoEntriesFromDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the contents of the specified dictionary to the user info dictionary.

## Declaration

```objectivec
- (void) addUserInfoEntriesFromDictionary:(NSDictionary *) otherDictionary;
```

## Parameters

- `otherDictionary`: The dictionary containing entries to be added.

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to add the keys from `otherDictionary` into the dictionary in the [userInfo](userinfo.md) property. If the same key is in both dictionaries, the value of the key is set to the value in the `otherDictionary` parameter.

It’s recommended that you keep the [userInfo](userinfo.md) dictionary as small as possible. The larger the dictionary, the longer it takes to deliver that payload and resume the activity.

## See Also

### Specifying activity-related data

- [userInfo](userinfo.md): A dictionary containing app-specific state information needed to continue an activity on another device.
- [requiredUserInfoKeys](requireduserinfokeys.md): A set of keys that represent the minimal information about the activity that should be stored for later restoration.
