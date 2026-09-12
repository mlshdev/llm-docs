> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreenshotservice/delegate](https://developer.apple.com/documentation/uikit/uiscreenshotservice/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

The custom object you use to provide PDF data for a screenshot.

## Declaration

```swift
weak var delegate: (any UIScreenshotServiceDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property early in the life cycle of your window scene. The object must conform to the [UIScreenshotServiceDelegate](../uiscreenshotservicedelegate.md) protocol.

## See Also

### Responding to screenshot requests

- [UIScreenshotServiceDelegate](../uiscreenshotservicedelegate.md): Methods you use to generate PDF data that accompanies a user-requested screenshot.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

The custom object you use to provide PDF data for a screenshot.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIScreenshotServiceDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property early in the life cycle of your window scene. The object must conform to the [UIScreenshotServiceDelegate](../uiscreenshotservicedelegate.md) protocol.

## See Also

### Responding to screenshot requests

- [UIScreenshotServiceDelegate](../uiscreenshotservicedelegate.md): Methods you use to generate PDF data that accompanies a user-requested screenshot.
