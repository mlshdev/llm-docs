> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/magnification](https://developer.apple.com/documentation/webkit/wkwebview/magnification)

# magnification (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The factor by which the page content is currently scaled.

## Declaration

```swift
var magnification: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

## See Also

### Scaling content

- [pageZoom](pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.

# magnification (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The factor by which the page content is currently scaled.

## Declaration

```objectivec
@property (nonatomic) CGFloat magnification;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

## See Also

### Scaling content

- [pageZoom](pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.
