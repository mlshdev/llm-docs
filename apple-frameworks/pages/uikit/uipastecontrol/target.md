> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipastecontrol/target](https://developer.apple.com/documentation/uikit/uipastecontrol/target)

# target (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The UI control that receives pasted content.

## Declaration

```swift
weak var target: (any UIPasteConfigurationSupporting)? { get set }
```

<a id="Discussion"></a>

## Discussion

For example, you can assign this property a reference to a [UITextView](../uitextview.md).

# target (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The UI control that receives pasted content.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPasteConfigurationSupporting> target;
```

<a id="Discussion"></a>

## Discussion

For example, you can assign this property a reference to a [UITextView](../uitextview.md).
