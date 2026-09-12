> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotconfiguration/ignoreclipping](https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/ignoreclipping)

# ignoreClipping (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A Boolean value that specifies whether to ignore framing on windows when using content filters.

## Declaration

```swift
var ignoreClipping: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Use [SCContentFilter](../sccontentfilter.md) in conjunction with this property to ignore window framing on specified apps and windows. Setting this value to `true` ignores shadows.

# ignoreClipping (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A Boolean value that specifies whether to ignore framing on windows when using content filters.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL ignoreClipping;
```

<a id="discussion"></a>

## Discussion

Use [SCContentFilter](../sccontentfilter.md) in conjunction with this property to ignore window framing on specified apps and windows. Setting this value to `true` ignores shadows.
