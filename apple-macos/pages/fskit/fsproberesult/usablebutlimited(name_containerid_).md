> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult/usablebutlimited(name:containerid:)](https://developer.apple.com/documentation/fskit/fsproberesult/usablebutlimited(name:containerid:))

# usableButLimited(name:containerID:) (Swift)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a probe result for a recognized file system that is usable, but with limited capabilities.

## Declaration

```swift
class func usableButLimited(name: String, containerID: FSContainerIdentifier) -> Self
```

## Parameters

- `name`: The resource name, as found during the probe operation. If the file system doesn’t support names, or is awaiting naming, use an empty string.
- `containerID`: The container identifier, as found during the probe operation. If the file system doesn’t support durable identifiers, use a random UUID.

## See Also

### Working with results

- [recognized(name:containerID:)](recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usable(name:containerID:)](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimited](usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognized](notrecognized.md): A probe result for an unrecognized file system.

# usableButLimitedProbeResultWithName:containerID: (Objective-C)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a probe result for a recognized file system that is usable, but with limited capabilities.

## Declaration

```objectivec
+ (instancetype) usableButLimitedProbeResultWithName:(NSString *) name containerID:(FSContainerIdentifier *) containerID;
```

## Parameters

- `name`: The resource name, as found during the probe operation. If the file system doesn’t support names, or is awaiting naming, use an empty string.
- `containerID`: The container identifier, as found during the probe operation. If the file system doesn’t support durable identifiers, use a random UUID.

## See Also

### Working with results

- [recognizedProbeResultWithName:containerID:](recognized%28name_containerid_%29.md): Creates a probe result for a recognized file system.
- [usableProbeResultWithName:containerID:](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimitedProbeResult](usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognizedProbeResult](notrecognized.md): A probe result for an unrecognized file system.
