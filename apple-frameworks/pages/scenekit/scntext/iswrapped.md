> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/iswrapped](https://developer.apple.com/documentation/scenekit/scntext/iswrapped)

# isWrapped (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that specifies whether SceneKit wraps long lines of text.

## Declaration

```swift
var isWrapped: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When you define a layout rectangle for the text using its [containerFrame](containerframe.md) property, SceneKit uses the [isWrapped](iswrapped.md) property to determine whether each line of text that is wider than the layout rectangle automatically wraps onto the next line.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that long lines of text do not wrap. (If you specify a container frame, long lines of text extend beyond its width.)

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.

# wrapped (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that specifies whether SceneKit wraps long lines of text.

## Declaration

```objectivec
@property (nonatomic, getter=isWrapped) BOOL wrapped;
```

<a id="Discussion"></a>

## Discussion

When you define a layout rectangle for the text using its [containerFrame](containerframe.md) property, SceneKit uses the [wrapped](iswrapped.md) property to determine whether each line of text that is wider than the layout rectangle automatically wraps onto the next line.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that long lines of text do not wrap. (If you specify a container frame, long lines of text extend beyond its width.)

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.
