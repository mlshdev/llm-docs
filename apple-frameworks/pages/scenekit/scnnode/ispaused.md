> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/ispaused](https://developer.apple.com/documentation/scenekit/scnnode/ispaused)

# isPaused (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether to run actions and animations attached to the node and its child nodes.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that SceneKit should continuously update the node’s contents. Pausing a node pauses any running animations or actions. This property applies to the actions and animations attached to the node itself and those attached to any of its child or descendant nodes.

## See Also

### Working with Node Animation

- [presentation](presentation.md): A node object representing the state of the node as it currently appears onscreen.

# paused (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether to run actions and animations attached to the node and its child nodes.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that SceneKit should continuously update the node’s contents. Pausing a node pauses any running animations or actions. This property applies to the actions and animations attached to the node itself and those attached to any of its child or descendant nodes.

## See Also

### Working with Node Animation

- [presentationNode](presentation.md): A node object representing the state of the node as it currently appears onscreen.
