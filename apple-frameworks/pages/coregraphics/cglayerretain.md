> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglayerretain](https://developer.apple.com/documentation/coregraphics/cglayerretain)

# CGLayerRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a layer object.

## Declaration

```objectivec
extern CGLayerRefCGLayerRetain(CGLayerRef layer);
```

## Parameters

- `layer`: The layer to retain.

<a id="return-value"></a>

## Return Value

The same layer you passed in as the `layer` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to calling [CFRetain](../corefoundation/cfretain.md) except that it does not crash if the `layer` parameter is `null`.

## See Also

### Retaining and Releasing Color Objects

- [CGLayerRelease](cglayerrelease.md): Decrements the retain count of a layer object.
