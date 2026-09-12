> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/showssystemscreentimeblockingview](https://developer.apple.com/documentation/webkit/webpage/configuration/showssystemscreentimeblockingview)

# showsSystemScreenTimeBlockingView

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates whether the webpage should use the system Screen Time blocking view.

## Declaration

```swift
@MainActor var showsSystemScreenTimeBlockingView: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `true`. If `true`, the system Screen Time blocking view is shown when blocked by Screen Time. If `false`, a blurred view of the web content is shown instead.
