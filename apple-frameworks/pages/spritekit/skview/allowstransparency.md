> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/allowstransparency](https://developer.apple.com/documentation/spritekit/skview/allowstransparency)

# allowsTransparency (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean property that indicates whether the view is rendered using transparency.

## Declaration

```swift
var allowsTransparency: Bool { get set }
```

## Mentioned In

- [Creating a Scene with a Transparent Background](../creating-a-scene-with-a-transparent-background.md)

<a id="Discussion"></a>

## Discussion

This property tells the drawing system as to how it should treat the view. If set to [false](https://developer.apple.com/documentation/swift/false), the drawing system treats the view as fully opaque, which allows the drawing system to optimize some drawing operations and improve performance. If set to [true](https://developer.apple.com/documentation/swift/true), the drawing system composites the view normally with other content. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

An opaque view is expected to fill its bounds with entirely opaque content—that is, the content should have an alpha value of 1.0. If the view is opaque and either does not fill its bounds or contains wholly or partially transparent content, the results are unpredictable. Always set the value of this property to [false](https://developer.apple.com/documentation/swift/false) if the view is fully or partially transparent.

## See Also

### Configuring Performance Related Toggles

- [ignoresSiblingOrder](ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md): A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.
- [isAsynchronous](isasynchronous.md): A Boolean value that indicates whether the content is rendered asynchronously.

# allowsTransparency (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean property that indicates whether the view is rendered using transparency.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsTransparency;
```

## Mentioned In

- [Creating a Scene with a Transparent Background](../creating-a-scene-with-a-transparent-background.md)

<a id="Discussion"></a>

## Discussion

This property tells the drawing system as to how it should treat the view. If set to [false](https://developer.apple.com/documentation/swift/false), the drawing system treats the view as fully opaque, which allows the drawing system to optimize some drawing operations and improve performance. If set to [true](https://developer.apple.com/documentation/swift/true), the drawing system composites the view normally with other content. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

An opaque view is expected to fill its bounds with entirely opaque content—that is, the content should have an alpha value of 1.0. If the view is opaque and either does not fill its bounds or contains wholly or partially transparent content, the results are unpredictable. Always set the value of this property to [false](https://developer.apple.com/documentation/swift/false) if the view is fully or partially transparent.

## See Also

### Configuring Performance Related Toggles

- [ignoresSiblingOrder](ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md): A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.
- [asynchronous](isasynchronous.md): A Boolean value that indicates whether the content is rendered asynchronously.
