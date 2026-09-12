> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteraction/delegate](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that can fine-tune the large content viewer interactions, especially in the presence of other gesture recognizers.

## Declaration

```swift
weak var delegate: (any UILargeContentViewerInteractionDelegate)? { get }
```

## See Also

### Customizing large content viewer interactions

- [gestureRecognizerForExclusionRelationship](gesturerecognizerforexclusionrelationship.md): A gesture recognizer that you can use to set up simultaneous recognition or failure relationships with other gesture recognizers.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that can fine-tune the large content viewer interactions, especially in the presence of other gesture recognizers.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UILargeContentViewerInteractionDelegate> delegate;
```

## See Also

### Customizing large content viewer interactions

- [gestureRecognizerForExclusionRelationship](gesturerecognizerforexclusionrelationship.md): A gesture recognizer that you can use to set up simultaneous recognition or failure relationships with other gesture recognizers.
