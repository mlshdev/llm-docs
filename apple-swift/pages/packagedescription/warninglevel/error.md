> Snapshot-pinned source payload for Apple Swift snapshot-3cd4d1098779; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/warninglevel/error

# WarningLevel.error

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 6.2+

Treat as an error.

## Declaration

```swift
case error
```

<a id="discussion"></a>

## Discussion

Warnings will be elevated to errors, causing the build to fail if any such warnings occur.
