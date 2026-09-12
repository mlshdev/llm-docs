> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/size](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/size)

# size (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The size of the image that you want to create.

## Declaration

```swift
var size: CGSize { get set }
```

```swift
var size: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is 256 by 256 points.

## See Also

### Configuring the image output

- [traitCollection](traitcollection.md): Traits that determine the appearance of the map snapshot.
- [appearance](appearance.md): The visual style (light or dark) to apply to the map when rendering the snapshot image.
- [scale](scale.md): Deprecated. The scale factor to use when creating the image.

# size (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The size of the image that you want to create.

## Declaration

```objectivec
@property (nonatomic, assign) CGSize size;
```

```objectivec
@property (nonatomic, assign) NSSize size;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is 256 by 256 points.

## See Also

### Configuring the image output

- [traitCollection](traitcollection.md): Traits that determine the appearance of the map snapshot.
- [appearance](appearance.md): The visual style (light or dark) to apply to the map when rendering the snapshot image.
- [scale](scale.md): Deprecated. The scale factor to use when creating the image.
