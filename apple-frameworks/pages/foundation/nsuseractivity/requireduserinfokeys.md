> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/requireduserinfokeys](https://developer.apple.com/documentation/foundation/nsuseractivity/requireduserinfokeys)

# requiredUserInfoKeys (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of keys that represent the minimal information about the activity that should be stored for later restoration.

## Declaration

```swift
var requiredUserInfoKeys: Set<String>? { get set }
```

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The keys come from the [userInfo](userinfo.md) property.

## See Also

### Specifying activity-related data

- [userInfo](userinfo.md): A dictionary containing app-specific state information needed to continue an activity on another device.
- [addUserInfoEntries(from:)](adduserinfoentries%28from_%29.md): Adds the contents of the specified dictionary to the user info dictionary.

# requiredUserInfoKeys (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A set of keys that represent the minimal information about the activity that should be stored for later restoration.

## Declaration

```objectivec
@property (copy, nullable) NSSet<NSString *> * requiredUserInfoKeys;
```

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

The keys come from the [userInfo](userinfo.md) property.

## See Also

### Specifying activity-related data

- [userInfo](userinfo.md): A dictionary containing app-specific state information needed to continue an activity on another device.
- [addUserInfoEntriesFromDictionary:](adduserinfoentries%28from_%29.md): Adds the contents of the specified dictionary to the user info dictionary.
