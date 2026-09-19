> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/audiofeatureprint/windowduration

# windowDuration

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The window duration of the extractor.

## Declaration

```swift
let windowDuration: TimeInterval
```

<a id="discussion"></a>

## Discussion

The window duration should be greater than or equal to 0.5 seconds and less than or equal to 15.0 seconds.

## See Also

### Getting the properties

- [overlapFactor](overlapfactor.md): The overlap factor of the extractor.
