> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/textsize](https://developer.apple.com/documentation/scenekit/scntext/textsize)

# textSize (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The two-dimensional extent of the text after layout.

## Declaration

```swift
var textSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

This property reports the size of the smallest bounding rectangle containing the text.

This size does not necessarily match that of the layout rectangle specified by the [containerFrame](containerframe.md) property. A long body of text may overflow the layout rectangle, depending on the values of the [isWrapped](iswrapped.md) and [truncationMode](truncationmode.md) properties, and a short string of text may fit in an area smaller than the layout rectangle.

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [isWrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.

# textSize (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** macOS

The two-dimensional extent of the text after layout.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize textSize;
```

<a id="Discussion"></a>

## Discussion

This property reports the size of the smallest bounding rectangle containing the text.

This size does not necessarily match that of the layout rectangle specified by the [containerFrame](containerframe.md) property. A long body of text may overflow the layout rectangle, depending on the values of the [wrapped](iswrapped.md) and [truncationMode](truncationmode.md) properties, and a short string of text may fit in an area smaller than the layout rectangle.

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [wrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
