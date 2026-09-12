> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnodefocusbehavior](https://developer.apple.com/documentation/scenekit/scnnodefocusbehavior)

# SCNNodeFocusBehavior (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for the focusable states of a SceneKit node.

## Declaration

```swift
enum SCNNodeFocusBehavior
```

## Topics

### Enumeration Cases

- [SCNNodeFocusBehavior.none](scnnodefocusbehavior/none.md): Node is not focusable.
- [SCNNodeFocusBehavior.occluding](scnnodefocusbehavior/occluding.md): Node is not focusable and prevents nodes that it visually obscures from becoming focusable.
- [SCNNodeFocusBehavior.focusable](scnnodefocusbehavior/focusable.md): Node is focusable and prevents nodes that it visually obscures from becoming focusable.

### Initializers

- [init(rawValue:)](scnnodefocusbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling UI Focus

- [focusBehavior](scnnode/focusbehavior.md): The focus behavior for a node.

# SCNNodeFocusBehavior (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Options for the focusable states of a SceneKit node.

## Declaration

```objectivec
enum SCNNodeFocusBehavior : NSInteger;
```

## Topics

### Enumeration Cases

- [SCNNodeFocusBehaviorNone](scnnodefocusbehavior/none.md): Node is not focusable.
- [SCNNodeFocusBehaviorOccluding](scnnodefocusbehavior/occluding.md): Node is not focusable and prevents nodes that it visually obscures from becoming focusable.
- [SCNNodeFocusBehaviorFocusable](scnnodefocusbehavior/focusable.md): Node is focusable and prevents nodes that it visually obscures from becoming focusable.

## See Also

### Handling UI Focus

- [focusBehavior](scnnode/focusbehavior.md): The focus behavior for a node.
