> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/constraints](https://developer.apple.com/documentation/quartzcore/calayer/constraints)

# constraints (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The constraints used to position current layer’s sublayers.

## Declaration

```swift
var constraints: [CAConstraint]? { get set }
```

<a id="Discussion"></a>

## Discussion

macOS apps can use this property to access their layer-based constraints. Before constraints can be applied, you must also assign a [CAConstraintLayoutManager](../caconstraintlayoutmanager.md) object to the [layoutManager](layoutmanager.md) property of the layer.

iOS apps do not support layer-based constraints.

## See Also

### Managing layer constraints

- [addConstraint(\_:)](addconstraint%28__%29.md): Adds the specified constraint to the layer.

# constraints (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The constraints used to position current layer’s sublayers.

## Declaration

```objectivec
@property (copy, nullable) NSArray<CAConstraint *> * constraints;
```

<a id="Discussion"></a>

## Discussion

macOS apps can use this property to access their layer-based constraints. Before constraints can be applied, you must also assign a [CAConstraintLayoutManager](../caconstraintlayoutmanager.md) object to the [layoutManager](layoutmanager.md) property of the layer.

iOS apps do not support layer-based constraints.

## See Also

### Managing layer constraints

- [addConstraint:](addconstraint%28__%29.md): Adds the specified constraint to the layer.
