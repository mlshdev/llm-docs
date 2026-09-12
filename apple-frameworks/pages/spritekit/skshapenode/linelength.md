> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/linelength](https://developer.apple.com/documentation/spritekit/skshapenode/linelength)

# lineLength (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The length of the line defined by the shape node.

## Declaration

```swift
var lineLength: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property takes effect only when the shape has a stroke. The valid range is between `[0.1]` where one indicates that the shape is fully stroked, and zero indicates that the shape is not stroked at all. By interpolating this value over time (for example, in your scene’s [update(\_:)](../skscene/update%28__%29.md) callback), you can animate the shape as if it were drawn in real time.

# lineLength (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The length of the line defined by the shape node.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat lineLength;
```

<a id="Discussion"></a>

## Discussion

This property takes effect only when the shape has a stroke. The valid range is between `[0.1]` where one indicates that the shape is fully stroked, and zero indicates that the shape is not stroked at all. By interpolating this value over time (for example, in your scene’s [update:](../skscene/update%28__%29.md) callback), you can animate the shape as if it were drawn in real time.
