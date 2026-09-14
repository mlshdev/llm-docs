> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacedevice/screenscale

# screenScale (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The number of pixels per point for the current screen.

## Declaration

```swift
var screenScale: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The screen scale value applies to both the vertical and horizontal dimensions. For Apple Watch, this value is `2.0`.

## See Also

### Reading the Screen Information

- [screenBounds](screenbounds.md): The bounding rectangle of the screen.

# screenScale (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The number of pixels per point for the current screen.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat screenScale;
```

<a id="Discussion"></a>

## Discussion

The screen scale value applies to both the vertical and horizontal dimensions. For Apple Watch, this value is `2.0`.

## See Also

### Reading the Screen Information

- [screenBounds](screenbounds.md): The bounding rectangle of the screen.
