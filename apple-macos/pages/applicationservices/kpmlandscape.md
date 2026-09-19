> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/kpmlandscape

# kPMLandscape

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var kPMLandscape: Int { get }
```

<a id="discussion"></a>

## Discussion

Specifies landscape (horizontal) orientation. Landscape orientation performs a 90° counterclockwise rotation on the logical page image and sets the Quartz origin to the upper-left corner of the unrotated logical page with positive y-values increasing across and to the right of the unrotated page. This has the effect of rotating the logical page image 90° clockwise. In other words, the image appears on the unrotated page as if it were rotated 90° clockwise.
