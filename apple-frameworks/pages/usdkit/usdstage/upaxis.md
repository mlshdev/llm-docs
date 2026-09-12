> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/upaxis](https://developer.apple.com/documentation/usdkit/usdstage/upaxis)

# upAxis

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The axis that points upward in this stage’s coordinate system.

## Declaration

```swift
var upAxis: USDToken { get nonmutating set }
```

## See Also

### Reading stage metrics

- [metersPerUnit](metersperunit.md): The number of meters represented by one unit in this stage’s coordinate system.
- [hasAuthoredMetersPerUnit](hasauthoredmetersperunit.md): A Boolean value that indicates whether this stage has an authored [metersPerUnit](metersperunit.md) opinion.
- [fallbackUpAxis](fallbackupaxis.md): The up axis used when a stage has no authored opinion.
