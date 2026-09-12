> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/ignoresviewportscalelimits](https://developer.apple.com/documentation/webkit/webpage/configuration/ignoresviewportscalelimits)

# ignoresViewportScaleLimits

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Determines whether a webpage allows scaling of the webpage.

## Declaration

```swift
@MainActor var ignoresViewportScaleLimits: Bool
```

<a id="discussion"></a>

## Discussion

When set to `true`, this property overrides the user-scalable HTML property in a webpage, and lets the webpage scale its view’s content regardless of the author’s intent.

The default value of this property is `false`.
