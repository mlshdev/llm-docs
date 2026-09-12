> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/placementweight](https://developer.apple.com/documentation/spritekit/sktiledefinition/placementweight)

# placementWeight (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The placement weight of the tile definition.

## Declaration

```swift
var placementWeight: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This value is used to determine how likely this tile definition is to be chosen for placement when a [SKTileGroupRule](../sktilegrouprule.md) has multiple tile definitions assigned to it. A higher value relative to the other definitions assigned to the rule make it more likely for this definition to be selected; lower values make it less likely. Defaults to 1. When set to 0, the definition will never be chosen as long as there is at least one other definition with a [placementWeight](placementweight.md) above 0.

## See Also

### Reading or Adjusting a Tile’s Instance Properties

- [name](name.md): A name associated with the tile definition.
- [size](size.md): The size of the tile definition in points.

# placementWeight (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The placement weight of the tile definition.

## Declaration

```objectivec
@property (nonatomic) NSUInteger placementWeight;
```

<a id="Discussion"></a>

## Discussion

This value is used to determine how likely this tile definition is to be chosen for placement when a [SKTileGroupRule](../sktilegrouprule.md) has multiple tile definitions assigned to it. A higher value relative to the other definitions assigned to the rule make it more likely for this definition to be selected; lower values make it less likely. Defaults to 1. When set to 0, the definition will never be chosen as long as there is at least one other definition with a [placementWeight](placementweight.md) above 0.

## See Also

### Reading or Adjusting a Tile’s Instance Properties

- [name](name.md): A name associated with the tile definition.
- [size](size.md): The size of the tile definition in points.
