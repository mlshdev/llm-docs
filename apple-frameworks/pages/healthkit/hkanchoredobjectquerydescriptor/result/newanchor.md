> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor/result/newanchor

# newAnchor

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A value corresponding to the last sample that the anchor query has returned.

## Declaration

```swift
let newAnchor: HKQueryAnchor
```

<a id="Discussion"></a>

## Discussion

Subsequent anchor object queries can use this anchor to receive only the samples saved and objects deleted after this query completed.

## See Also

### Accessing the Results

- [addedSamples](addedsamples.md): An array containing the matching samples added to the HealthKit store.
- [deletedObjects](deletedobjects.md): An array of objects deleted from the HealthKit store.
