> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipment/layoutchildren(for:visualstate:)](https://developer.apple.com/documentation/tabletopkit/equipment/layoutchildren(for:visualstate:))

# layoutChildren(for:visualState:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

This function provides the layout of the direct children of this equipment and is called whenever the snapshot changes. Override it to provide a custom layout. The output of this function is considered to be only a function of its inputs. Reaching out to data outside what is provided might result in undefined behavior.

## Declaration

```swift
func layoutChildren(for snapshot: TableSnapshot, visualState: TableVisualState) -> any EquipmentLayout
```

## Default Implementations

### Equipment Implementations

- [layoutChildren(for:visualState:)](layoutchildren%28for_visualstate_%29-41c25.md): This function provides the layout of the direct children of this equipment and is called whenever the snapshot changes. Override it to provide a custom layout. The output of this function is considered to be only a function of its inputs. Reaching out to data outside what is provided might result in undefined behavior.

## See Also

### Displaying the equipment

- [restingOrientation(state:)](restingorientation%28state_%29.md): The resting orientation of the equipment given the current State.
