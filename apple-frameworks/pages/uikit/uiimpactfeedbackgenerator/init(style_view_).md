> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimpactfeedbackgenerator/init(style:view:)](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/init(style:view:))

# init(style:view:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Creates an impact feedback generator with the specified style and view.

## Declaration

```swift
convenience init(style: UIImpactFeedbackGenerator.FeedbackStyle, view: UIView)
```

## See Also

### Initializing the feedback generator

- [UIImpactFeedbackGenerator.FeedbackStyle](feedbackstyle.md): The mass of the objects in the collision simulated by an impact feedback generator object.

# feedbackGeneratorWithStyle:forView: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Creates an impact feedback generator with the specified style and view.

## Declaration

```objectivec
+ (instancetype) feedbackGeneratorWithStyle:(UIImpactFeedbackStyle) style forView:(UIView *) view;
```

## See Also

### Initializing the feedback generator

- [UIImpactFeedbackStyle](feedbackstyle.md): The mass of the objects in the collision simulated by an impact feedback generator object.
