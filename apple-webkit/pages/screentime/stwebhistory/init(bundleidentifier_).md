> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/init(bundleidentifier:)](https://developer.apple.com/documentation/screentime/stwebhistory/init(bundleidentifier:))

# init(bundleIdentifier:) (Swift)

**Framework:** Screen Time  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Creates a web history instance to delete web-usage data associated to the bundle identifier you specify.

## Declaration

```swift
init(bundleIdentifier: String) throws
```

## Parameters

- `bundleIdentifier`: The bundle identifier.

<a id="discussion"></a>

## Discussion

The default value for `bundleIdentifier` is `Bundle.main.bundleIdentifier`. This is the recommended identifier to use, except for example, if a helper process is presenting web UI and you want to group that web-usage under the main app’s bundle identifier.

# initWithBundleIdentifier:error: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Creates a web history instance to delete web-usage data associated to the bundle identifier you specify.

## Declaration

```objectivec
- (instancetype) initWithBundleIdentifier:(NSString *) bundleIdentifier error:(NSError **) error;
```

## Parameters

- `bundleIdentifier`: The bundle identifier.
- `error`: Any error that occurred while changing the bundle identifier.

<a id="discussion"></a>

## Discussion

The default value for `bundleIdentifier` is `Bundle.main.bundleIdentifier`. This is the recommended identifier to use, except for example, if a helper process is presenting web UI and you want to group that web-usage under the main app’s bundle identifier.
