> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/maximumframespersecond](https://developer.apple.com/documentation/uikit/uiscreen/maximumframespersecond)

# maximumFramesPerSecond (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+

The maximum number of frames per second a screen can render.

## Declaration

```swift
var maximumFramesPerSecond: Int { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, the value of this property can be up to `120` for devices with ProMotion displays.

In tvOS, the value of this property depends on the hardware capabilities of the attached screen and the user’s selected resolution on Apple TV.

## See Also

### Getting a display link

- [displayLink(withTarget:selector:)](displaylink%28withtarget_selector_%29.md): Deprecated. Returns a display link object for the current screen.

# maximumFramesPerSecond (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+

The maximum number of frames per second a screen can render.

## Declaration

```objectivec
@property (readonly) NSInteger maximumFramesPerSecond;
```

<a id="Discussion"></a>

## Discussion

In iOS, the value of this property can be up to `120` for devices with ProMotion displays.

In tvOS, the value of this property depends on the hardware capabilities of the attached screen and the user’s selected resolution on Apple TV.

## See Also

### Getting a display link

- [displayLinkWithTarget:selector:](displaylink%28withtarget_selector_%29.md): Deprecated. Returns a display link object for the current screen.
