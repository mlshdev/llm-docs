> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringdrawingcontext/actualscalefactor](https://developer.apple.com/documentation/appkit/nsstringdrawingcontext/actualscalefactor)

# actualScaleFactor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The actual scale factor that the system applied to the font during drawing.

## Declaration

```swift
var actualScaleFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If you specified a custom value in the [minimumScaleFactor](minimumscalefactor.md) property, when drawing is complete, this property contains the actual scale factor value that was used to draw the string.

## See Also

### Accessing the scale factors

- [minimumScaleFactor](minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.

# actualScaleFactor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The actual scale factor that the system applied to the font during drawing.

## Declaration

```objectivec
@property (readonly) CGFloat actualScaleFactor;
```

<a id="Discussion"></a>

## Discussion

If you specified a custom value in the [minimumScaleFactor](minimumscalefactor.md) property, when drawing is complete, this property contains the actual scale factor value that was used to draw the string.

## See Also

### Accessing the scale factors

- [minimumScaleFactor](minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.
