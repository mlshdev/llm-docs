> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class/secondaryaction](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class/secondaryaction)

# secondaryAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The launch scene’s secondary action.

## Declaration

```swift
@NSCopying var secondaryAction: UIAction? { get set }
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md)

<a id="Discussion"></a>

## Discussion

Set this property to add a secondary action to the document launch scene. If you set this property, the system adds a button for the secondary action to the title view.

## See Also

### Adding actions

- [primaryAction](primaryaction.md): The launch scene’s primary action.

# secondaryAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The launch scene’s secondary action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIAction * secondaryAction;
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md)

<a id="Discussion"></a>

## Discussion

Set this property to add a secondary action to the document launch scene. If you set this property, the system adds a button for the secondary action to the title view.

## See Also

### Adding actions

- [primaryAction](primaryaction.md): The launch scene’s primary action.
