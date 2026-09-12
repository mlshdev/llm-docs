> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-2ata2/resourcestatus(for:)](https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2/resourcestatus(for:))

# resourceStatus(for:)

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+ · tvOS 27.0+

Check status for a set of resources.

## Declaration

```swift
static func resourceStatus(for versions: Set<CNCinematicResourceVersion> = []) -> CNResourceStatus
```

## Parameters

- `versions`: Resource version(s) to check. Empty set to check all available resource versions.

<a id="return-value"></a>

## Return Value

Returns the first encountered non-ready status, or `.ready` if all are ready.
