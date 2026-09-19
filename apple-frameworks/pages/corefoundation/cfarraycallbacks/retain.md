> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfarraycallbacks/retain

# retain (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to retain each value as they are added to the collection. If `NULL`, values are not retained. See [CFArrayRetainCallBack](../cfarrayretaincallback.md) for a description of this callback.

## Declaration

```swift
var retain: CFArrayRetainCallBack!
```

# retain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to retain each value as they are added to the collection. If `NULL`, values are not retained. See [CFArrayRetainCallBack](../cfarrayretaincallback.md) for a description of this callback.

## Declaration

```objectivec
CFArrayRetainCallBack retain;
```
