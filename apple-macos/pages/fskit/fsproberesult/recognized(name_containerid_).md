> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsproberesult/recognized(name:containerid:)](https://developer.apple.com/documentation/fskit/fsproberesult/recognized(name:containerid:))

# recognized(name:containerID:) (Swift)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a probe result for a recognized file system.

## Declaration

```swift
class func recognized(name: String, containerID: FSContainerIdentifier) -> Self
```

## Parameters

- `name`: The resource name, as found during the probe operation. If the file system doesn’t support names, or is awaiting naming, use an empty string.
- `containerID`: The container identifier, as found during the probe operation. If the file system doesn’t support durable identifiers, use a random UUID.

## See Also

### Working with results

- [usable(name:containerID:)](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimited(name:containerID:)](usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [usableButLimited](usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognized](notrecognized.md): A probe result for an unrecognized file system.

# recognizedProbeResultWithName:containerID: (Objective-C)

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a probe result for a recognized file system.

## Declaration

```objectivec
+ (instancetype) recognizedProbeResultWithName:(NSString *) name containerID:(FSContainerIdentifier *) containerID;
```

## Parameters

- `name`: The resource name, as found during the probe operation. If the file system doesn’t support names, or is awaiting naming, use an empty string.
- `containerID`: The container identifier, as found during the probe operation. If the file system doesn’t support durable identifiers, use a random UUID.

## See Also

### Working with results

- [usableProbeResultWithName:containerID:](usable%28name_containerid_%29.md): Creates a probe result for a recognized and usable file system.
- [usableButLimitedProbeResultWithName:containerID:](usablebutlimited%28name_containerid_%29.md): Creates a probe result for a recognized file system that is usable, but with limited capabilities.
- [usableButLimitedProbeResult](usablebutlimited.md): A probe result for a recognized file system that is usable, but with limited capabilities.
- [notRecognizedProbeResult](notrecognized.md): A probe result for an unrecognized file system.
