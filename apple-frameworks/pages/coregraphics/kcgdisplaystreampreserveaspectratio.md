> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgdisplaystreampreserveaspectratio](https://developer.apple.com/documentation/coregraphics/kcgdisplaystreampreserveaspectratio)

# kCGDisplayStreamPreserveAspectRatio

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Global Variable

## Declaration

```objectivec
extern CFStringRef const kCGDisplayStreamPreserveAspectRatio;
```

<a id="discussion"></a>

## Discussion

Enable/disable the work the Window Server will do to preserve the display aspect ratio.  By default the Window Server will assume that it should preserve the original aspect ratio of the source display rect.  If the aspect ratio of the source display and the display stream destination rect are not the same, black borders will be inserted at the top/bottom or right/left sides of the destination in order to preserve the source aspect ratio.
