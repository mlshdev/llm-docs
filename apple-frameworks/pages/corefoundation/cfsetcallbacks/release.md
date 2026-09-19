> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfsetcallbacks/release

# release (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to release values as they are removed from the collection. If `NULL`, values are not released. See [CFSetReleaseCallBack](../cfsetreleasecallback.md) for a description of this callback.

## Declaration

```swift
var release: CFSetReleaseCallBack!
```

# release (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to release values as they are removed from the collection. If `NULL`, values are not released. See [CFSetReleaseCallBack](../cfsetreleasecallback.md) for a description of this callback.

## Declaration

```objectivec
CFSetReleaseCallBack release;
```
