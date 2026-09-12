> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapinteractionmodes](https://developer.apple.com/documentation/mapkit/mapinteractionmodes)

# MapInteractionModes

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Options that indicate the user interactions that the map responds to.

## Declaration

```swift
struct MapInteractionModes
```

<a id="overview"></a>

## Overview

A person can’t interact with a map if the option set is empty.

## Topics

### Declared interaction modes

- [all](mapinteractionmodes/all.md): The map allows all interaction modes.
- [pan](mapinteractionmodes/pan.md): The map allows a person to pan around to different areas of the map.
- [zoom](mapinteractionmodes/zoom.md): The map allows people to zoom in or out on map locations.
- [pitch](mapinteractionmodes/pitch.md): The map allows people to set the map’s pitch to view the map from different angles.
- [rotate](mapinteractionmodes/rotate.md): The map allows people to rotate the map.

### Creating interaction modes

- [init()](https://developer.apple.com/documentation/swift/setalgebra/init%28%29): Creates an empty set.
- [init(\_:)](https://developer.apple.com/documentation/swift/setalgebra/init%28_:%29): Creates a new set from a finite sequence of items.
- [init(arrayLiteral:)](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral/init%28arrayliteral:%29): Creates an instance initialized with the given elements.
- [ArrayLiteralElement](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral/arrayliteralelement): The type of the elements of an array literal.
- [Element](https://developer.apple.com/documentation/swift/optionset/element): The element type of the option set.

### Accessing members

- [isEmpty](https://developer.apple.com/documentation/swift/setalgebra/isempty): A Boolean value that indicates whether the set has no elements.

### Comparing sets of modes

- [contains(\_:)](https://developer.apple.com/documentation/swift/setalgebra/contains%28_:%29): Returns a Boolean value that indicates whether the given element exists in the set.
- [isDisjoint(with:)](https://developer.apple.com/documentation/swift/setalgebra/isdisjoint%28with:%29): Returns a Boolean value that indicates whether the set has no members in common with the given set.
- [isStrictSubset(of:)](https://developer.apple.com/documentation/swift/setalgebra/isstrictsubset%28of:%29): Returns a Boolean value that indicates whether this set is a strict subset of the given set.
- [isStrictSuperset(of:)](https://developer.apple.com/documentation/swift/setalgebra/isstrictsuperset%28of:%29): Returns a Boolean value that indicates whether this set is a strict superset of the given set.
- [isSubset(of:)](https://developer.apple.com/documentation/swift/setalgebra/issubset%28of:%29): Returns a Boolean value that indicates whether the set is a subset of another set.
- [isSuperset(of:)](https://developer.apple.com/documentation/swift/setalgebra/issuperset%28of:%29): Returns a Boolean value that indicates whether the set is a superset of the given set.

### Updating the modes

- [update(with:)](https://developer.apple.com/documentation/swift/setalgebra/update%28with:%29): Inserts the given element into the set unconditionally.
- [insert(\_:)](https://developer.apple.com/documentation/swift/setalgebra/insert%28_:%29): Inserts the given element in the set if it is not already present.
- [remove(\_:)](https://developer.apple.com/documentation/swift/setalgebra/remove%28_:%29): Removes the given element and any elements subsumed by the given element.
- [formSymmetricDifference(\_:)](https://developer.apple.com/documentation/swift/setalgebra/formsymmetricdifference%28_:%29): Removes the elements of the set that are also in the given set and adds the members of the given set that are not already in the set.
- [subtract(\_:)](https://developer.apple.com/documentation/swift/setalgebra/subtract%28_:%29): Removes the elements of the given set from this set.
- [formUnion(\_:)](https://developer.apple.com/documentation/swift/setalgebra/formunion%28_:%29): Adds the elements of the given set to the set.
- [formIntersection(\_:)](https://developer.apple.com/documentation/swift/setalgebra/formintersection%28_:%29): Removes the elements of this set that aren’t also in the given set.

### Combining sets of modes

- [union(\_:)](https://developer.apple.com/documentation/swift/setalgebra/union%28_:%29): Returns a new set with the elements of both this and the given set.
- [intersection(\_:)](https://developer.apple.com/documentation/swift/setalgebra/intersection%28_:%29): Returns a new set with the elements that are common to both this set and the given set.
- [subtracting(\_:)](https://developer.apple.com/documentation/swift/setalgebra/subtracting%28_:%29): Returns a new set containing the elements of this set that do not occur in the given set.
- [symmetricDifference(\_:)](https://developer.apple.com/documentation/swift/setalgebra/symmetricdifference%28_:%29): Returns a new set with the elements that are either in this set or in the given set, but not in both.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a map

- [init(bounds:interactionModes:scope:)](map/init%28bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, and scope you provide.
- [init(bounds:interactionModes:scope:content:)](map/init%28bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, scope, and content you provide.
- [init(bounds:interactionModes:selection:scope:)](map/init%28bounds_interactionmodes_selection_scope_%29-11lec.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, a binding to a map feature, and scope you provide.
- [init(bounds:interactionModes:selection:scope:)](map/init%28bounds_interactionmodes_selection_scope_%29-236di.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, the selected map feature, and scope you provide.
- [init(bounds:interactionModes:selection:scope:content:)](map/init%28bounds_interactionmodes_selection_scope_content_%29-28wns.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, selected map feature, scope, and map content you provide.
- [init(bounds:interactionModes:selection:scope:content:)](map/init%28bounds_interactionmodes_selection_scope_content_%29-2tdbr.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, selected value, scope, and map content you provide.
- [init(initialPosition:bounds:interactionModes:scope:)](map/init%28initialposition_bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, and scope you provide.
- [init(initialPosition:bounds:interactionModes:scope:content:)](map/init%28initialposition_bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and map content you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, selected map feature, and scope you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-9feos.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected map feature, scope, and content you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-451vp.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected map feature, scope, and content you provide.
- [init(position:bounds:interactionModes:scope:)](map/init%28position_bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, and scope you provide.
- [init(position:bounds:interactionModes:scope:content:)](map/init%28position_bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:)](map/init%28position_bounds_interactionmodes_selection_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:content:)](map/init%28position_bounds_interactionmodes_selection_scope_content_%29-47y4p.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected feature, scope, and content you provide.
