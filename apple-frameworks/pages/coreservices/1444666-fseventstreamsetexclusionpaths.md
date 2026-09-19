> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1444666-fseventstreamsetexclusionpaths

# FSEventStreamSetExclusionPaths(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.9+

## Declaration

```swift
func FSEventStreamSetExclusionPaths(_ streamRef: FSEventStreamRef, _ pathsToExclude: CFArray) -> Bool
```

# FSEventStreamSetExclusionPaths (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.9+

## Declaration

```objectivec
Boolean FSEventStreamSetExclusionPaths(FSEventStreamRef streamRef, CFArrayRef pathsToExclude);
```
