> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinteraction/gesturesforfailurerequirements](https://developer.apple.com/documentation/uikit/uitextinteraction/gesturesforfailurerequirements)

# gesturesForFailureRequirements (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of gestures that the text interaction adds to the view hierarchy.

## Declaration

```swift
var gesturesForFailureRequirements: [UIGestureRecognizer] { get }
```

<a id="Discussion"></a>

## Discussion

If your app provides other gestures in the same view hierarchy, you may want to set up failure requirements between your app’s gestures and the gestures added by the text interaction. To do this, use the [require(toFail:)](../uigesturerecognizer/require%28tofail_%29.md) method to relate your gestures to those listed in [gesturesForFailureRequirements](gesturesforfailurerequirements.md).

## See Also

### Getting interaction information

- [textInteractionMode](textinteractionmode.md): The mode of the text interaction.
- [UITextInteractionMode](../uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.

# gesturesForFailureRequirements (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of gestures that the text interaction adds to the view hierarchy.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIGestureRecognizer *> * gesturesForFailureRequirements;
```

<a id="Discussion"></a>

## Discussion

If your app provides other gestures in the same view hierarchy, you may want to set up failure requirements between your app’s gestures and the gestures added by the text interaction. To do this, use the [requireGestureRecognizerToFail:](../uigesturerecognizer/require%28tofail_%29.md) method to relate your gestures to those listed in [gesturesForFailureRequirements](gesturesforfailurerequirements.md).

## See Also

### Getting interaction information

- [textInteractionMode](textinteractionmode.md): The mode of the text interaction.
- [UITextInteractionMode](../uitextinteractionmode.md): Modes that determine the selection behaviors that a text interaction provides.
