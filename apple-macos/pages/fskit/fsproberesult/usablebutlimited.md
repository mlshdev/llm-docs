> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult/usablebutlimited](https://developer.apple.com/documentation/fskit/fsproberesult/usablebutlimited)

# usableButLimited (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A probe result for a recognized file system that is usable, but with limited capabilities.

## Declaration

```swift
class var usableButLimited: FSProbeResult { get }
```

<a id="discussion"></a>

## Discussion

This kind of probe result lacks the [name](name.md), [containerID](containerid.md), or both. Don’t return this result from probing a resource that isn’t limited.

## See Also

### Working with results

- [recognized(name:containerID:)](recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usable(name:containerID:)](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimited(name:containerID:)](usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognized](notrecognized.md): A probe result for an unrecognized file system.

# usableButLimitedProbeResult (Objective-C)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A probe result for a recognized file system that is usable, but with limited capabilities.

## Declaration

```objectivec
@property (class, readonly) FSProbeResult * usableButLimitedProbeResult;
```

<a id="discussion"></a>

## Discussion

This kind of probe result lacks the [name](name.md), [containerID](containerid.md), or both. Don’t return this result from probing a resource that isn’t limited.

## See Also

### Working with results

- [recognizedProbeResultWithName:containerID:](recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usableProbeResultWithName:containerID:](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimitedProbeResultWithName:containerID:](usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognizedProbeResult](notrecognized.md): A probe result for an unrecognized file system.
