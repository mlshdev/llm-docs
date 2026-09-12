> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/map/init(position:bounds:interactionmodes:scope:)](https://developer.apple.com/documentation/mapkit/map/init(position:bounds:interactionmodes:scope:))

# init(position:bounds:interactionModes:scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new, empty map with the initial camera position, bounds, interaction modes, and scope you provide.

## Declaration

```swift
@MainActor @preconcurrency init(position: Binding<MapCameraPosition>, bounds: MapCameraBounds? = nil, interactionModes: MapInteractionModes = .all, scope: Namespace.ID? = nil) where Content == MapContentView<Never, EmptyMapContent>
```

## Parameters

- `position`: The initial [MapCameraPosition](../mapcameraposition.md).
- `bounds`: The [MapCameraBounds](../mapcamerabounds.md) that define the camera’s view of the map.
- `interactionModes`: The [MapInteractionModes](../mapinteractionmodes.md) that describe ways a person can interact with the map.
- `scope`: The map’s [Namespace.ID](https://developer.apple.com/documentation/swiftui/namespace/id).

## See Also

### Creating a map

- [init(bounds:interactionModes:scope:)](init%28bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, and scope you provide.
- [init(bounds:interactionModes:scope:content:)](init%28bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, scope, and content you provide.
- [init(bounds:interactionModes:selection:scope:)](init%28bounds_interactionmodes_selection_scope_%29-11lec.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, a binding to a map feature, and scope you provide.
- [init(bounds:interactionModes:selection:scope:)](init%28bounds_interactionmodes_selection_scope_%29-236di.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, the selected map feature, and scope you provide.
- [init(bounds:interactionModes:selection:scope:content:)](init%28bounds_interactionmodes_selection_scope_content_%29-28wns.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, selected map feature, scope, and map content you provide.
- [init(bounds:interactionModes:selection:scope:content:)](init%28bounds_interactionmodes_selection_scope_content_%29-2tdbr.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, selected value, scope, and map content you provide.
- [init(initialPosition:bounds:interactionModes:scope:)](init%28initialposition_bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, and scope you provide.
- [init(initialPosition:bounds:interactionModes:scope:content:)](init%28initialposition_bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and map content you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:)](init%28initialposition_bounds_interactionmodes_selection_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, selected map feature, and scope you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-9feos.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected map feature, scope, and content you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-451vp.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected map feature, scope, and content you provide.
- [init(position:bounds:interactionModes:scope:content:)](init%28position_bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:)](init%28position_bounds_interactionmodes_selection_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:content:)](init%28position_bounds_interactionmodes_selection_scope_content_%29-47y4p.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected feature, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:content:)](init%28position_bounds_interactionmodes_selection_scope_content_%29-9xq1q.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected feature, scope, and content you provide.
