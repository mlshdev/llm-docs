> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteraction/delegate](https://developer.apple.com/documentation/uikit/uipreviewinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that acts as the delegate of the preview interaction.

## Declaration

```swift
weak var delegate: (any UIPreviewInteractionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The preview interaction informs the delegate of state and progress changes throughout the 3D Touch process. Create an object that conforms to the [UIPreviewInteractionDelegate](../uipreviewinteractiondelegate.md) protocol and assign it to this property.

## See Also

### Preparing preview interactions

- [UIPreviewInteractionDelegate](../uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that acts as the delegate of the preview interaction.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPreviewInteractionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The preview interaction informs the delegate of state and progress changes throughout the 3D Touch process. Create an object that conforms to the [UIPreviewInteractionDelegate](../uipreviewinteractiondelegate.md) protocol and assign it to this property.

## See Also

### Preparing preview interactions

- [UIPreviewInteractionDelegate](../uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.
