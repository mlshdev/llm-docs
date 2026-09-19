> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/metersperunit

# metersPerUnit

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of meters represented by one unit in this stage’s coordinate system.

## Declaration

```swift
var metersPerUnit: Double { get nonmutating set }
```

## See Also

### Reading stage metrics

- [hasAuthoredMetersPerUnit](hasauthoredmetersperunit.md): A Boolean value that indicates whether this stage has an authored [metersPerUnit](metersperunit.md) opinion.
- [upAxis](upaxis.md): The axis that points upward in this stage’s coordinate system.
- [fallbackUpAxis](fallbackupaxis.md): The up axis used when a stage has no authored opinion.
