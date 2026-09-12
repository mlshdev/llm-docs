> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class/primaryaction](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/launchoptions-swift.class/primaryaction)

# primaryAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The launch scene’s primary action.

## Declaration

```swift
@NSCopying var primaryAction: UIAction? { get set }
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md)

<a id="Discussion"></a>

## Discussion

Set this property to customize the primary action’s button in the document launch scene. If you don’t set this property, the system adds a default Create Document button to the title view.

## See Also

### Adding actions

- [secondaryAction](secondaryaction.md): The launch scene’s secondary action.

# primaryAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The launch scene’s primary action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIAction * primaryAction;
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../../customizing-a-document-based-app-s-launch-experience.md)

<a id="Discussion"></a>

## Discussion

Set this property to customize the primary action’s button in the document launch scene. If you don’t set this property, the system adds a default Create Document button to the title view.

## See Also

### Adding actions

- [secondaryAction](secondaryaction.md): The launch scene’s secondary action.
