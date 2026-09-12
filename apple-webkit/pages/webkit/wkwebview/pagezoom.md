> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/pagezoom](https://developer.apple.com/documentation/webkit/wkwebview/pagezoom)

# pageZoom (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The scale factor by which the web view scales content relative to its bounds.

## Declaration

```swift
var pageZoom: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`, which displays the content without any scaling. Changing the value of this property is equivalent to setting the CSS `zoom` property on all page content.

## See Also

### Scaling content

- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [magnification](magnification.md): The factor by which the page content is currently scaled.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.

# pageZoom (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The scale factor by which the web view scales content relative to its bounds.

## Declaration

```objectivec
@property (nonatomic) CGFloat pageZoom;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `1.0`, which displays the content without any scaling. Changing the value of this property is equivalent to setting the CSS `zoom` property on all page content.

## See Also

### Scaling content

- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether magnify gestures change the web view’s magnification.
- [magnification](magnification.md): The factor by which the page content is currently scaled.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Scales the page content and centers the result on the specified point.
