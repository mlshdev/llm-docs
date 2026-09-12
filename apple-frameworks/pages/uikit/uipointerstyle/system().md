> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle/system()](https://developer.apple.com/documentation/uikit/uipointerstyle/system())

# system() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Morphs the pointer into a default system-style pointer.

## Declaration

```swift
class func system() -> Self
```

<a id="Discussion"></a>

## Discussion

To display custom accessories alongside the default pointer, use this pointer style and assign your accessories to the [accessories](accessories.md) property.

## See Also

### Creating a pointer style

- [init(effect:shape:)](init%28effect_shape_%29.md): Applies the provided content effect and pointer shape to the current region.
- [init(shape:constrainedAxes:)](init%28shape_constrainedaxes_%29.md): Morphs the pointer into the provided shape when hovering over the current region.
- [hidden()](hidden%28%29.md): Hides the pointer when it moves over the current region.

# systemPointerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Morphs the pointer into a default system-style pointer.

## Declaration

```objectivec
+ (instancetype) systemPointerStyle;
```

<a id="Discussion"></a>

## Discussion

To display custom accessories alongside the default pointer, use this pointer style and assign your accessories to the [accessories](accessories.md) property.

## See Also

### Creating a pointer style

- [styleWithEffect:shape:](stylewitheffect_shape_.md): Applies the provided content effect and pointer shape to the current region.
- [styleWithShape:constrainedAxes:](stylewithshape_constrainedaxes_.md): Morphs the pointer into the provided shape when it moves over the current region.
- [hiddenPointerStyle](hidden%28%29.md): Hides the pointer when it moves over the current region.
