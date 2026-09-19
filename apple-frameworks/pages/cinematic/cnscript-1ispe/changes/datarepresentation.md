> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/changes/datarepresentation

# dataRepresentation

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Persistent data representation of changes for later restoration.

## Declaration

```swift
var dataRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

The script changes are only used with the original cinematic movie from which the script came from.
