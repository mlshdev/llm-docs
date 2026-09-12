> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/merging(_:)](https://developer.apple.com/documentation/arkit/arreferenceobject/merging(_:))

# merging(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Returns a new reference object that combines spatial information from both this reference object and another.

> Only supported for legacy reference objects.

## Declaration

```swift
func merging(_ object: ARReferenceObject) throws -> ARReferenceObject
```

## Parameters

- `object`: The other reference object with which to combine this reference object.

<a id="return-value"></a>

## Return Value

A new [ARReferenceObject](../arreferenceobject.md) that includes the spatial information from both objects. From Swift, this method throws an [ARError](../arerror.md) if the two objects cannot be merged. From Objective-C, it returns `nil` and populates the `error` parameter with a description of the failure.

<a id="Discussion"></a>

## Discussion

The accuracy of 3D object detection depends on similarity of lighting and environmental conditions between when you scan a real object (producing an [ARReferenceObject](../arreferenceobject.md)) and when a user of your app attempts to detect that object. If, for example, you scan an object in a bright environment, then a user attempts to detect it in a dark environment, ARKit may fail to recognize that the real object matches the reference object, or may not detect the object quickly.

To make a reference object that is more robust in a wide variety of detection conditions, scan the same real-world object multiple times: For each scan, vary the lighting conditions or the background environment to capture the variety of situations in which your app might attempt to detect the same real object. Then, use this method to combine those scan results into a single [ARReferenceObject](../arreferenceobject.md) incorporating recognition information for all the conditions you scanned in.

## See Also

### Creating Derivative Reference Objects

- [applyingTransform(\_:)](applyingtransform%28__%29.md): Deprecated. Returns a new reference object created by applying the specified transform to this reference object’s geometric data.

# referenceObjectByMergingObject:error: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Returns a new reference object that combines spatial information from both this reference object and another.

> Only supported for legacy reference objects.

## Declaration

```objectivec
- (ARReferenceObject *) referenceObjectByMergingObject:(ARReferenceObject *) object error:(NSError **) error;
```

## Parameters

- `object`: The other reference object with which to combine this reference object.
- `error`: A pointer to an [NSError](../../foundation/nserror.md). On completion, if the method returns `nil`, this pointer references an object describing the failure.

<a id="return-value"></a>

## Return Value

A new [ARReferenceObject](../arreferenceobject.md) that includes the spatial information from both objects. From Swift, this method throws an [ARError](../arerror.md) if the two objects cannot be merged. From Objective-C, it returns `nil` and populates the `error` parameter with a description of the failure.

<a id="Discussion"></a>

## Discussion

The accuracy of 3D object detection depends on similarity of lighting and environmental conditions between when you scan a real object (producing an [ARReferenceObject](../arreferenceobject.md)) and when a user of your app attempts to detect that object. If, for example, you scan an object in a bright environment, then a user attempts to detect it in a dark environment, ARKit may fail to recognize that the real object matches the reference object, or may not detect the object quickly.

To make a reference object that is more robust in a wide variety of detection conditions, scan the same real-world object multiple times: For each scan, vary the lighting conditions or the background environment to capture the variety of situations in which your app might attempt to detect the same real object. Then, use this method to combine those scan results into a single [ARReferenceObject](../arreferenceobject.md) incorporating recognition information for all the conditions you scanned in.

## See Also

### Creating Derivative Reference Objects

- [referenceObjectByApplyingTransform:](applyingtransform%28__%29.md): Deprecated. Returns a new reference object created by applying the specified transform to this reference object’s geometric data.
