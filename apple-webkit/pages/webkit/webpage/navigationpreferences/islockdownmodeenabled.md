> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationpreferences/islockdownmodeenabled](https://developer.apple.com/documentation/webkit/webpage/navigationpreferences/islockdownmodeenabled)

# isLockdownModeEnabled

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether to use Lockdown Mode in the web page.

## Declaration

```swift
var isLockdownModeEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, this reflects whether the user has enabled Lockdown Mode on the device. Update this preference to override the device setting when you implement a per-website or similar setting.
