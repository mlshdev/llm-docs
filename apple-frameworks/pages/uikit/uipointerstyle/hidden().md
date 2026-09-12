> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle/hidden()](https://developer.apple.com/documentation/uikit/uipointerstyle/hidden())

# hidden() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Hides the pointer when it moves over the current region.

## Declaration

```swift
class func hidden() -> Self
```

## See Also

### Creating a pointer style

- [init(effect:shape:)](init%28effect_shape_%29.md): Applies the provided content effect and pointer shape to the current region.
- [init(shape:constrainedAxes:)](init%28shape_constrainedaxes_%29.md): Morphs the pointer into the provided shape when hovering over the current region.
- [system()](system%28%29.md): Morphs the pointer into a default system-style pointer.

# hiddenPointerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Hides the pointer when it moves over the current region.

## Declaration

```objectivec
+ (instancetype) hiddenPointerStyle;
```

## See Also

### Creating a pointer style

- [styleWithEffect:shape:](stylewitheffect_shape_.md): Applies the provided content effect and pointer shape to the current region.
- [styleWithShape:constrainedAxes:](stylewithshape_constrainedaxes_.md): Morphs the pointer into the provided shape when it moves over the current region.
- [systemPointerStyle](system%28%29.md): Morphs the pointer into a default system-style pointer.
