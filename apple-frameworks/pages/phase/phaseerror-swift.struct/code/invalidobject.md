> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseerror-swift.struct/code/invalidobject](https://developer.apple.com/documentation/phase/phaseerror-swift.struct/code/invalidobject)

# PHASEError.Code.invalidObject (Swift)

**Framework:** PHASE  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error that indicates an object is invalid in a specific context.

## Declaration

```swift
case invalidObject
```

<a id="Discussion"></a>

## Discussion

The [addChild(\_:)](../../phaseobject/addchild%28__%29.md) function throws this error if the specified child already has a parent in the scene graph hierarchy.

## See Also

### Errors

- [PHASEError.Code.initializeFailed](initializefailed.md): An error that indicates the engine failed to initialize.

# PHASEErrorInvalidObject (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error that indicates an object is invalid in a specific context.

## Declaration

```objectivec
PHASEErrorInvalidObject
```

<a id="Discussion"></a>

## Discussion

The [addChild:error:](../../phaseobject/addchild%28__%29.md) function throws this error if the specified child already has a parent in the scene graph hierarchy.

## See Also

### Errors

- [PHASEErrorInitializeFailed](initializefailed.md): An error that indicates the engine failed to initialize.
