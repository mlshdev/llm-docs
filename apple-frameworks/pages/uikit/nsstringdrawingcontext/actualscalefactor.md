> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingcontext/actualscalefactor](https://developer.apple.com/documentation/uikit/nsstringdrawingcontext/actualscalefactor)

# actualScaleFactor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The actual scale factor that the system applied to the font during drawing.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat actualScaleFactor;
```

<a id="Discussion"></a>

## Discussion

If you specified a custom value in the [minimumScaleFactor](minimumscalefactor.md) property, when drawing is complete, this property contains the actual scale factor value that was used to draw the string.

## See Also

### Accessing the scale factors

- [minimumScaleFactor](minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.
