> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/isasynchronous](https://developer.apple.com/documentation/spritekit/skview/isasynchronous)

# isAsynchronous (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the content is rendered asynchronously.

## Declaration

```swift
var isAsynchronous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If the value is [false](https://developer.apple.com/documentation/swift/false), the contents of this view are synchronized with Core Animation updates.

## See Also

### Configuring Performance Related Toggles

- [ignoresSiblingOrder](ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md): A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.
- [allowsTransparency](allowstransparency.md): A Boolean property that indicates whether the view is rendered using transparency.

# asynchronous (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the content is rendered asynchronously.

## Declaration

```objectivec
@property (nonatomic, getter=isAsynchronous) BOOL asynchronous;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If the value is [false](https://developer.apple.com/documentation/swift/false), the contents of this view are synchronized with Core Animation updates.

## See Also

### Configuring Performance Related Toggles

- [ignoresSiblingOrder](ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md): A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.
- [allowsTransparency](allowstransparency.md): A Boolean property that indicates whether the view is rendered using transparency.
