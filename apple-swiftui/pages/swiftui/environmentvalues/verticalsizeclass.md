> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/verticalsizeclass](https://developer.apple.com/documentation/swiftui/environmentvalues/verticalsizeclass)

# verticalSizeClass

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The vertical size class of this environment.

## Declaration

```swift
@backDeployed(before: macOS 14.0, tvOS 17.0, watchOS 10.0)
var verticalSizeClass: UserInterfaceSizeClass? { get set }
```

<a id="discussion"></a>

## Discussion

You receive a [UserInterfaceSizeClass](../userinterfacesizeclass.md) value when you read this environment value. The value tells you about the amount of vertical space available to the view that reads it. You can read this size class like any other of the [EnvironmentValues](../environmentvalues.md), by creating a property with the [Environment](../environment.md) property wrapper:

```swift
@Environment(\.verticalSizeClass) private var verticalSizeClass
```

SwiftUI sets this size class based on several factors, including:

- The current device type.
- The orientation of the device.

You can adjust the appearance of custom views by reading this size class and conditioning your views. If you do, be prepared to handle size class changes while your app runs, because factors like device orientation can change at runtime.

In watchOS, the vertical size class is always [UserInterfaceSizeClass.compact](../userinterfacesizeclass/compact.md). In macOS, and tvOS, it’s always [UserInterfaceSizeClass.regular](../userinterfacesizeclass/regular.md).

Writing to the vertical size class in the environment before macOS 14.0, tvOS 17.0, and watchOS 10.0 is not supported.

## See Also

### Reacting to interface characteristics

- [isLuminanceReduced](isluminancereduced.md): A Boolean value that indicates whether the display or environment currently requires reduced luminance.
- [displayScale](displayscale.md): The display scale of this environment.
- [pixelLength](pixellength.md): The size of a pixel on the screen.
- [horizontalSizeClass](horizontalsizeclass.md): The horizontal size class of this environment.
- [UserInterfaceSizeClass](../userinterfacesizeclass.md): A set of values that indicate the visual size available to the view.
