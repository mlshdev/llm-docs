> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationpreferences/isglobalprivacycontrolenabled](https://developer.apple.com/documentation/webkit/webpage/navigationpreferences/isglobalprivacycontrolenabled)

# isGlobalPrivacyControlEnabled

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Whether the Global Privacy Control (GPC) signal is enabled for the navigation.

## Declaration

```swift
var isGlobalPrivacyControlEnabled: Bool
```

<a id="discussion"></a>

## Discussion

The default value of this property is `false`. When enabled, both `navigator.globalPrivacyControl` and the `Sec-GPC: 1` request header are active for the main frame, its subframes, and their subresources.
