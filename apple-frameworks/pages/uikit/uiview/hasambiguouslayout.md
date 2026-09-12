> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/hasambiguouslayout](https://developer.apple.com/documentation/uikit/uiview/hasambiguouslayout)

# hasAmbiguousLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the constraints impacting the layout of the view incompletely specify the location of the view.

## Declaration

```swift
var hasAmbiguousLayout: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view’s location is incompletely specified, [false](https://developer.apple.com/documentation/swift/false) otherwise.

If there aren’t enough constraints in the system to uniquely determine layout, the layout is considered ambiguous. For example, if the only constraint in the system is `x = y + 100`, the layout is ambiguous because there are many possible values for `x` and `y`. UIKit does not automatically detect every ambiguous layout, so you may need to look for symptoms of ambiguity, such as views that jump from place to place, or that are in the wrong place.

This property should only be used for debugging constraint-based layout. No app should ship with usage of this property as part of its operation.

## See Also

### Debugging Auto Layout

- [constraintsAffectingLayout(for:)](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given axis.
- [exerciseAmbiguityInLayout()](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.

# hasAmbiguousLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the constraints impacting the layout of the view incompletely specify the location of the view.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAmbiguousLayout;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view’s location is incompletely specified, [false](https://developer.apple.com/documentation/swift/false) otherwise.

If there aren’t enough constraints in the system to uniquely determine layout, the layout is considered ambiguous. For example, if the only constraint in the system is `x = y + 100`, the layout is ambiguous because there are many possible values for `x` and `y`. UIKit does not automatically detect every ambiguous layout, so you may need to look for symptoms of ambiguity, such as views that jump from place to place, or that are in the wrong place.

This property should only be used for debugging constraint-based layout. No app should ship with usage of this property as part of its operation.

## See Also

### Debugging Auto Layout

- [constraintsAffectingLayoutForAxis:](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given axis.
- [exerciseAmbiguityInLayout](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.
