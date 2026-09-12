> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/init(bundleidentifier:profileidentifier:)](https://developer.apple.com/documentation/screentime/stwebhistory/init(bundleidentifier:profileidentifier:))

# init(bundleIdentifier:profileIdentifier:) (Swift)

**Framework:** Screen Time  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Creates a web history instance to delete web-usage data associated to the bundle identifier and profile identifier you specify.

## Declaration

```swift
init(bundleIdentifier: String, profileIdentifier: STWebHistory.ProfileIdentifier?) throws
```

## Parameters

- `bundleIdentifier`: The bundle identifier.
- `profileIdentifier`: The identifier of the current browsing profile.

<a id="discussion"></a>

## Discussion

The default value for `bundleIdentifier` is `Bundle.main.bundleIdentifier`. This is the recommended identifier to use, except for example, if a helper process is presenting web UI and you want to group that web-usage under the main app’s bundle identifier.

The default value for `profileIdentifier` is `nil`. This identifier can be used to delete browsing history for a specific profile. Using `nil` will only delete web history reported without a profile identifier.

# initWithBundleIdentifier:profileIdentifier:error: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Creates a web history instance to delete web-usage data associated to the bundle identifier and profile identifier you specify.

## Declaration

```objectivec
- (instancetype) initWithBundleIdentifier:(NSString *) bundleIdentifier profileIdentifier:(STWebHistoryProfileIdentifier) profileIdentifier error:(NSError **) error;
```

## Parameters

- `bundleIdentifier`: The bundle identifier.
- `profileIdentifier`: The identifier of the current browsing profile.
- `error`: Any error that occurred while changing the bundle identifier.

<a id="discussion"></a>

## Discussion

The default value for `bundleIdentifier` is `Bundle.main.bundleIdentifier`. This is the recommended identifier to use, except for example, if a helper process is presenting web UI and you want to group that web-usage under the main app’s bundle identifier.

The default value for `profileIdentifier` is `nil`. This identifier can be used to delete browsing history for a specific profile. Using `nil` will only delete web history reported without a profile identifier.
