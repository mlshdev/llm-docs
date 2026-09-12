> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/overlay(fortype:)](https://developer.apple.com/documentation/quartz/ikimageview/overlay(fortype:))

# overlay(forType:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the Core Animation layer associated with a layer type.

## Declaration

```swift
func overlay(forType layerType: String!) -> CALayer!
```

## Parameters

- `layerType`: A layer type. See [Overlay Types](../overlay-types.md).

<a id="return-value"></a>

## Return Value

The Core Animation layer.

## See Also

### Working With Core Animation

- [setOverlay(\_:forType:)](setoverlay%28__fortype_%29.md): Sets an overlay type for a Core Animation layer.

# overlayForType: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the Core Animation layer associated with a layer type.

## Declaration

```objectivec
- (CALayer *) overlayForType:(NSString *) layerType;
```

## Parameters

- `layerType`: A layer type. See [Overlay Types](../overlay-types.md).

<a id="return-value"></a>

## Return Value

The Core Animation layer.

## See Also

### Working With Core Animation

- [setOverlay:forType:](setoverlay%28__fortype_%29.md): Sets an overlay type for a Core Animation layer.
