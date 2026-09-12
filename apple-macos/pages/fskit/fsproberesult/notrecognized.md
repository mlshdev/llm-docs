> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult/notrecognized](https://developer.apple.com/documentation/fskit/fsproberesult/notrecognized)

# notRecognized (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A probe result for an unrecognized file system.

## Declaration

```swift
class var notRecognized: FSProbeResult { get }
```

<a id="discussion"></a>

## Discussion

An unrecognized probe result contains `nil` for its [name](name.md) and [containerID](containerid.md) properties.

## See Also

### Working with results

- [recognized(name:containerID:)](recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usable(name:containerID:)](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimited(name:containerID:)](usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [usableButLimited](usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.

# notRecognizedProbeResult (Objective-C)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

A probe result for an unrecognized file system.

## Declaration

```objectivec
@property (class, readonly) FSProbeResult * notRecognizedProbeResult;
```

<a id="discussion"></a>

## Discussion

An unrecognized probe result contains `nil` for its [name](name.md) and [containerID](containerid.md) properties.

## See Also

### Working with results

- [recognizedProbeResultWithName:containerID:](recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usableProbeResultWithName:containerID:](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimitedProbeResultWithName:containerID:](usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [usableButLimitedProbeResult](usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
