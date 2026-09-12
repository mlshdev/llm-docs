> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/localavailabilityerror/failures](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/localavailabilityerror/failures)

# failures

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A dictionary that maps asset packs to errors describing why the system couldn’t ensure their local availability.

## Declaration

```swift
let failures: [AssetPack : any Error]
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../../reducing-download-and-storage-demands-with-localized-asset-packs.md)

## See Also

### Accessing availability status

- [successes](successes.md): A set of asset packs for which the system successfully ensured local availability.
