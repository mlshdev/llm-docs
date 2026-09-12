> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/hasauthoredmetersperunit](https://developer.apple.com/documentation/usdkit/usdstage/hasauthoredmetersperunit)

# hasAuthoredMetersPerUnit

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether this stage has an authored [metersPerUnit](metersperunit.md) opinion.

## Declaration

```swift
var hasAuthoredMetersPerUnit: Bool { get }
```

## See Also

### Reading stage metrics

- [metersPerUnit](metersperunit.md): The number of meters represented by one unit in this stage’s coordinate system.
- [upAxis](upaxis.md): The axis that points upward in this stage’s coordinate system.
- [fallbackUpAxis](fallbackupaxis.md): The up axis used when a stage has no authored opinion.
