> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/fallbackupaxis

# fallbackUpAxis

**Framework:** USDKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The up axis used when a stage has no authored opinion.

## Declaration

```swift
static var fallbackUpAxis: USDToken { get }
```

## See Also

### Reading stage metrics

- [metersPerUnit](metersperunit.md): The number of meters represented by one unit in this stage’s coordinate system.
- [hasAuthoredMetersPerUnit](hasauthoredmetersperunit.md): A Boolean value that indicates whether this stage has an authored [metersPerUnit](metersperunit.md) opinion.
- [upAxis](upaxis.md): The axis that points upward in this stage’s coordinate system.
