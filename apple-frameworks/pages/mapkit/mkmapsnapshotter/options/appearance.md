> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/appearance](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/appearance)

# appearance (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The visual style (light or dark) to apply to the map when rendering the snapshot image.

## Declaration

```swift
var appearance: NSAppearance? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify a light or dark appearance for the map in the resulting snapshot image. When the value of this property is `nil` (the default), the snapshotter derives the appropriate appearance based on the following logic:

- If the user specifically disables Dark Mode for map content in the Maps app, the snapshot uses a light appearance.
- The snapshot uses your app’s appearance.
- The snapshot uses the system appearance.

## See Also

### Configuring the image output

- [traitCollection](traitcollection.md): Traits that determine the appearance of the map snapshot.
- [size](size.md): The size of the image that you want to create.
- [scale](scale.md): Deprecated. The scale factor to use when creating the image.

# appearance (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The visual style (light or dark) to apply to the map when rendering the snapshot image.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSAppearance * appearance;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify a light or dark appearance for the map in the resulting snapshot image. When the value of this property is `nil` (the default), the snapshotter derives the appropriate appearance based on the following logic:

- If the user specifically disables Dark Mode for map content in the Maps app, the snapshot uses a light appearance.
- The snapshot uses your app’s appearance.
- The snapshot uses the system appearance.

## See Also

### Configuring the image output

- [traitCollection](traitcollection.md): Traits that determine the appearance of the map snapshot.
- [size](size.md): The size of the image that you want to create.
- [scale](scale.md): Deprecated. The scale factor to use when creating the image.
