> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/kpmreverseportrait

# kPMReversePortrait

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var kPMReversePortrait: Int { get }
```

<a id="discussion"></a>

## Discussion

Specifies reverse portrait orientation. Reverse portrait orientation performs a 180° rotation on the logical page rectangle and sets the Quartz origin to the upper-right corner of the unrotated logical page with positive y-values increasing downwards. This has the effect of rotating the logical page image 180°. Reverse portrait orientation is supported in macOS 10.5 and later.
