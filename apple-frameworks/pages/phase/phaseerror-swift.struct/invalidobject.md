> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseerror-swift.struct/invalidobject

# invalidObject

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error that indicates an object is invalid in a specific context.

## Declaration

```swift
static var invalidObject: PHASEError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The [addChild(\_:)](../phaseobject/addchild%28__%29.md) function throws this error if the specified child already has a parent in the scene graph hierarchy.

## See Also

### Identifying an Error Cause

- [initializeFailed](initializefailed.md): An error that indicates the engine failed to initialize.
