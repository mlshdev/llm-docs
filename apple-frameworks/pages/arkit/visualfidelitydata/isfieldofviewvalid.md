> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/visualfidelitydata/isfieldofviewvalid

# isFieldOfViewValid

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Indicates whether the field of view (FoV) is valid.

## Declaration

```swift
var isFieldOfViewValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns `true` if the expected FoV meets requirements. Returns `false` if any portion of the FoV is invalid.

Note: Returns `false` if the provider was created without a field of view.
