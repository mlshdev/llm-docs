> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/resourcestatusforversions:

# resourceStatusForVersions:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Check status for a set of resources.

## Declaration

```objectivec
+ (CNResourceStatus) resourceStatusForVersions:(NSSet<NSNumber *> *) resourceVersions;
```

## Parameters

- `resourceVersions`: Resource version(s) to check. Empty set to check all available resource versions.

<a id="return-value"></a>

## Return Value

The first encountered non-ready status, or CNResourceStatusReady if all are ready.
