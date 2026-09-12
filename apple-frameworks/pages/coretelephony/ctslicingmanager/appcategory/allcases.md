> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/appcategory/allcases](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/appcategory/allcases)

# allCases

**Framework:** Core Telephony  
**Kind:** Type Property  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

All application categories supported at the current OS version.

## Declaration

```swift
static var allCases: [CTSlicingManager.AppCategory] { get }
```

<a id="discussion"></a>

## Discussion

On iOS 26.3 and later, this property returns `[.gaming, .communication, .streaming]`. On iOS 27.0 and later, this property also includes `.missionCritical`.

Use this property to enumerate all valid categories at runtime without checking the OS version directly.
