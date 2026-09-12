> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/layer(fortype:)](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/layer(fortype:))

# layer(forType:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns a layer for the specified position.

## Declaration

```swift
func layer(forType type: String!) -> CALayer!
```

## Parameters

- `type`: A string representing the layer location. See [Cell Layer Positions](../cell-layer-positions.md) for possible values.

<a id="return-value"></a>

## Return Value

The `CALayer` to display in the specified position.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to add a Core Animation layer to the cell

# layerForType: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns a layer for the specified position.

## Declaration

```objectivec
- (CALayer *) layerForType:(NSString *) type;
```

## Parameters

- `type`: A string representing the layer location. See [Cell Layer Positions](../cell-layer-positions.md) for possible values.

<a id="return-value"></a>

## Return Value

The `CALayer` to display in the specified position.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to add a Core Animation layer to the cell
