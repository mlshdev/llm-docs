> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/current](https://developer.apple.com/documentation/appkit/nsappearance/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+ (deprecated in 12.0)

Returns the appearance object that’s active on the current thread.

> Use [performAsCurrentDrawingAppearance(\_:)](performascurrentdrawingappearance%28__%29.md) to temporarily set the drawing appearance, or [currentDrawingAppearance](currentdrawingappearance.md) to access the current drawing appearance.

## Declaration

```swift
class var current: NSAppearance! { get set }
```

<a id="return-value"></a>

## Return Value

The appearance object that’s set on the current thread.

<a id="Discussion"></a>

## Discussion

When a UI element draws to the screen, it automatically sets its appearance object to the active appearance on the current thread.

## See Also

### Getting and Setting the Current Appearance

- [currentDrawing()](currentdrawing%28%29.md): The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.
- [performAsCurrentDrawingAppearance(\_:)](performascurrentdrawingappearance%28__%29.md): Sets the appearance to be the active drawing appearance and perform the specified block.

# currentAppearance (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+ (deprecated in 12.0)

Returns the appearance object that’s active on the current thread.

> Use [performAsCurrentDrawingAppearance:](performascurrentdrawingappearance%28__%29.md) to temporarily set the drawing appearance, or [currentDrawingAppearance](currentdrawingappearance.md) to access the current drawing appearance.

## Declaration

```objectivec
@property (class, strong, null_resettable) NSAppearance * currentAppearance;
```

<a id="return-value"></a>

## Return Value

The appearance object that’s set on the current thread.

<a id="Discussion"></a>

## Discussion

When a UI element draws to the screen, it automatically sets its appearance object to the active appearance on the current thread.

## See Also

### Getting and Setting the Current Appearance

- [currentDrawingAppearance](currentdrawingappearance.md): The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.
- [performAsCurrentDrawingAppearance:](performascurrentdrawingappearance%28__%29.md): Sets the appearance to be the active drawing appearance and perform the specified block.
