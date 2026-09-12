> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/hasambiguouslayout](https://developer.apple.com/documentation/appkit/nsview/hasambiguouslayout)

# hasAmbiguousLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.

## Declaration

```swift
var hasAmbiguousLayout: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view’s location or size cannot be determined definitively based on the current constraints.

Accessing this property engages the layout engine to determine whether any other frame would also satisfy the constraints on the view. Because this process involves laying out the view, accessing the property can be an expensive operation but it can also provide useful debugging information. AppKit automatically calls this method when a window is asked to visualize its constraints using the [visualizeConstraints(\_:)](../nswindow/visualizeconstraints%28__%29.md) method.

> **Important**

>  This property should be used only for debugging constraint-based layout. Do not access this property in the shipping version of your app.

## See Also

### Debugging Auto Layout

- [constraintsAffectingLayout(for:)](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given orientation.
- [exerciseAmbiguityInLayout()](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.

# hasAmbiguousLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.

## Declaration

```objectivec
@property (readonly) BOOL hasAmbiguousLayout;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view’s location or size cannot be determined definitively based on the current constraints.

Accessing this property engages the layout engine to determine whether any other frame would also satisfy the constraints on the view. Because this process involves laying out the view, accessing the property can be an expensive operation but it can also provide useful debugging information. AppKit automatically calls this method when a window is asked to visualize its constraints using the [visualizeConstraints:](../nswindow/visualizeconstraints%28__%29.md) method.

> **Important**

>  This property should be used only for debugging constraint-based layout. Do not access this property in the shipping version of your app.

## See Also

### Debugging Auto Layout

- [constraintsAffectingLayoutForOrientation:](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given orientation.
- [exerciseAmbiguityInLayout](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.
