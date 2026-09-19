> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/displayintent-swift.property

# displayIntent (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Specifies whether the screen capture uses attributes of the local or canonical display.

## Declaration

```swift
var displayIntent: SCScreenshotConfiguration.DisplayIntent { get set }
```

<a id="discussion"></a>

## Discussion

Performing a screenshot with either the local or canonical display attributes optimizes output for presentation on either the capture display or any high dynamic range display respectively.

# displayIntent (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Specifies whether the screen capture uses attributes of the local or canonical display.

## Declaration

```objectivec
@property (nonatomic, assign) SCScreenshotDisplayIntent displayIntent;
```

<a id="discussion"></a>

## Discussion

Performing a screenshot with either the local or canonical display attributes optimizes output for presentation on either the capture display or any high dynamic range display respectively.
