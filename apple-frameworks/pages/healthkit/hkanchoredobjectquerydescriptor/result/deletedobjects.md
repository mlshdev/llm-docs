> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerydescriptor/result/deletedobjects](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor/result/deletedobjects)

# deletedObjects

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An array of objects deleted from the HealthKit store.

## Declaration

```swift
let deletedObjects: [HKDeletedObject]
```

## See Also

### Accessing the Results

- [addedSamples](addedsamples.md): An array containing the matching samples added to the HealthKit store.
- [newAnchor](newanchor.md): A value corresponding to the last sample that the anchor query has returned.
