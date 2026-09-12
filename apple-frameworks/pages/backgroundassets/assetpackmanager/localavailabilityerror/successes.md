> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/localavailabilityerror/successes](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/localavailabilityerror/successes)

# successes

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A set of asset packs for which the system successfully ensured local availability.

## Declaration

```swift
let successes: Set<AssetPack>
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../../reducing-download-and-storage-demands-with-localized-asset-packs.md)

## See Also

### Accessing availability status

- [failures](failures.md): A dictionary that maps asset packs to errors describing why the system couldn’t ensure their local availability.
