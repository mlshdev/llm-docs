> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/screenbounds](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/screenbounds)

# screenBounds (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The bounding rectangle of the screen.

## Declaration

```swift
var screenBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle represents the dimensions of the screen and may be different from the rectangle used to display your app’s content.

## See Also

### Reading the Screen Information

- [screenScale](screenscale.md): The number of pixels per point for the current screen.

# screenBounds (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The bounding rectangle of the screen.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect screenBounds;
```

<a id="Discussion"></a>

## Discussion

The rectangle represents the dimensions of the screen and may be different from the rectangle used to display your app’s content.

## See Also

### Reading the Screen Information

- [screenScale](screenscale.md): The number of pixels per point for the current screen.
