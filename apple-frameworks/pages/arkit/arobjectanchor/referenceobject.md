> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arobjectanchor/referenceobject

# referenceObject (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The detected object referenced by the object anchor.

## Declaration

```swift
var referenceObject: ARReferenceObject { get }
```

<a id="Discussion"></a>

## Discussion

This object is always one of the [ARReferenceObject](../arreferenceobject.md) objects you provided in the [detectionObjects](../arworldtrackingconfiguration/detectionobjects.md) array when configuring the session.

# referenceObject (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The detected object referenced by the object anchor.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARReferenceObject * referenceObject;
```

<a id="Discussion"></a>

## Discussion

This object is always one of the [ARReferenceObject](../arreferenceobject.md) objects you provided in the [detectionObjects](../arworldtrackingconfiguration/detectionobjects.md) array when configuring the session.
