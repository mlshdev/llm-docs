> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/addconstraint(_:)](https://developer.apple.com/documentation/quartzcore/calayer/addconstraint(_:))

# addConstraint(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Adds the specified constraint to the layer.

## Declaration

```swift
func addConstraint(_ c: CAConstraint)
```

## Parameters

- `c`: The constraint object to add to the receiver’s array of constraint objects.

<a id="Discussion"></a>

## Discussion

In macOS, you typically add constraints to a layer to manage the size and position of that layer’s sublayers. Before constraints can be applied, you must also assign a [CAConstraintLayoutManager](../caconstraintlayoutmanager.md) object to the [layoutManager](layoutmanager.md) property of the layer. For more information about managing layer-based constraints, see [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514).

iOS apps do not support layer-based constraints.

## See Also

### Managing layer constraints

- [constraints](constraints.md): The constraints used to position current layer’s sublayers.

# addConstraint: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Adds the specified constraint to the layer.

## Declaration

```objectivec
- (void) addConstraint:(CAConstraint *) c;
```

## Parameters

- `c`: The constraint object to add to the receiver’s array of constraint objects.

<a id="Discussion"></a>

## Discussion

In macOS, you typically add constraints to a layer to manage the size and position of that layer’s sublayers. Before constraints can be applied, you must also assign a [CAConstraintLayoutManager](../caconstraintlayoutmanager.md) object to the [layoutManager](layoutmanager.md) property of the layer. For more information about managing layer-based constraints, see [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514).

iOS apps do not support layer-based constraints.

## See Also

### Managing layer constraints

- [constraints](constraints.md): The constraints used to position current layer’s sublayers.
