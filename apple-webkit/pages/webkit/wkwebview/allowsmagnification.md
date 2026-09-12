> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/allowsmagnification](https://developer.apple.com/documentation/webkit/wkwebview/allowsmagnification)

# allowsMagnification (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether magnify gestures change the web view’s magnification.

## Declaration

```swift
var allowsMagnification: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). You can set the `magnification` property even if `allowsMagnification` is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Scaling content

- [pageZoom](pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [magnification](magnification.md): The factor by which the page content is currently scaled.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.

# allowsMagnification (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether magnify gestures change the web view’s magnification.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsMagnification;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). You can set the `magnification` property even if `allowsMagnification` is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Scaling content

- [pageZoom](pagezoom.md): The scale factor by which the web view scales content relative to its bounds.
- [magnification](magnification.md): The factor by which the page content is currently scaled.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.
