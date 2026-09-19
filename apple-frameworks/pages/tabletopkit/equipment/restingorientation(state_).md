> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipment/restingorientation(state:)

# restingOrientation(state:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

The resting orientation of the equipment given the current State.

## Declaration

```swift
func restingOrientation(state: Self.State) -> Rotation3D
```

## Default Implementations

### Equipment Implementations

- [restingOrientation(state:)](restingorientation%28state_%29-2u52p.md): The resting orientation of the equipment given the current State.
- [restingOrientation(state:)](restingorientation%28state_%29-6xf7f.md): Conforms when `State` is `CardState`. The resting orientation of the equipment given the current State.

## See Also

### Displaying the equipment

- [layoutChildren(for:visualState:)](layoutchildren%28for_visualstate_%29.md): This function provides the layout of the direct children of this equipment and is called whenever the snapshot changes. Override it to provide a custom layout. The output of this function is considered to be only a function of its inputs. Reaching out to data outside what is provided might result in undefined behavior.
