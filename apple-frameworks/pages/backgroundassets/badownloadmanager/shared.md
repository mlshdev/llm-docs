> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/shared](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/shared)

# shared (Swift)

**Framework:** Background Assets  
**Kind:** Type Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The download manager that both the app and the extension share.

## Declaration

```swift
class var shared: BADownloadManager { get }
```

<a id="Discussion"></a>

## Discussion

Because the download manager is a shared resource, use the `BADownloadManager/withExclusiveControl(_:)` or [withExclusiveControl(beforeDate:perform:)](withexclusivecontrol%28beforedate_perform_%29.md) methods to acquire exclusive control of the manager before you use it to access, schedule, or cancel downloads.

# sharedManager (Objective-C)

**Framework:** Background Assets  
**Kind:** Type Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The download manager that both the app and the extension share.

## Declaration

```objectivec
@property (class, strong, readonly) BADownloadManager * sharedManager;
```

<a id="Discussion"></a>

## Discussion

Because the download manager is a shared resource, use the `BADownloadManager/withExclusiveControl(_:)` or [performWithExclusiveControlBeforeDate:performHandler:](withexclusivecontrol%28beforedate_perform_%29.md) methods to acquire exclusive control of the manager before you use it to access, schedule, or cancel downloads.
