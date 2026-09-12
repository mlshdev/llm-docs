> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/userinfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing app-specific state information needed to continue an activity on another device.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get set }
```

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Each key and value must be of the following types: [NSArray](../nsarray.md), [NSData](../nsdata.md), [NSDate](../nsdate.md), [NSDictionary](../nsdictionary.md), [NSNull](../nsnull.md), [NSNumber](../nsnumber.md), [NSSet](../nsset.md), [NSString](../nsstring.md), or [NSURL](../nsurl.md). The system may translate file scheme URLs that refer to iCloud documents to valid file URLs on a continuing device.

## See Also

### Specifying activity-related data

- [addUserInfoEntries(from:)](adduserinfoentries%28from_%29.md): Adds the contents of the specified dictionary to the user info dictionary.
- [requiredUserInfoKeys](requireduserinfokeys.md): A set of keys that represent the minimal information about the activity that should be stored for later restoration.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing app-specific state information needed to continue an activity on another device.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary * userInfo;
```

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Each key and value must be of the following types: [NSArray](../nsarray.md), [NSData](../nsdata.md), [NSDate](../nsdate.md), [NSDictionary](../nsdictionary.md), [NSNull](../nsnull.md), [NSNumber](../nsnumber.md), [NSSet](../nsset.md), [NSString](../nsstring.md), or [NSURL](../nsurl.md). The system may translate file scheme URLs that refer to iCloud documents to valid file URLs on a continuing device.

## See Also

### Specifying activity-related data

- [addUserInfoEntriesFromDictionary:](adduserinfoentries%28from_%29.md): Adds the contents of the specified dictionary to the user info dictionary.
- [requiredUserInfoKeys](requireduserinfokeys.md): A set of keys that represent the minimal information about the activity that should be stored for later restoration.
