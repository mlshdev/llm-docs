> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kpmreverselandscape](https://developer.apple.com/documentation/applicationservices/kpmreverselandscape)

# kPMReverseLandscape

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var kPMReverseLandscape: Int { get }
```

<a id="discussion"></a>

## Discussion

Specifies reverse landscape page orientation. Landscape orientation performs a 90° clockwise rotation on the logical page rectangle and sets the Quartz origin to the lower-right corner of the unrotated logical page, with the positive y-values increasing to across and to the left of the unrotated page. This has the effect of rotating the logical page image 90° counterclockwise. In other words, the image appears on the unrotated page as if it were rotated 90° counterclockwise.
