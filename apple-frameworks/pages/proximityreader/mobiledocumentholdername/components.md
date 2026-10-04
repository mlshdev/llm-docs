> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentholdername/components

# components

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A component representation of the name.

## Declaration

```swift
let components: PersonNameComponents
```

<a id="discussion"></a>

## Discussion

If available, these components will be taken directly from the underlying document. If not, the components will be derived from the full name String on the underlying document.
