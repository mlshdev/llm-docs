> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/context/range](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/context/range)

# range (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The unique identifier of the context object.

## Declaration

```swift
var range: NSRange { get }
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

The [UIWritingToolsCoordinator.Context](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.

## See Also

### Getting the source text details

- [attributedString](attributedstring.md): The portion of your view’s text to evaluate.

# range (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The unique identifier of the context object.

## Declaration

```objectivec
@property (nonatomic, readonly) NSRange range;
```

## Mentioned In

- [Adding Writing Tools support to a custom UIKit view](../../adding-writing-tools-support-to-a-custom-uiview.md)

<a id="discussion"></a>

## Discussion

The [UIWritingToolsCoordinatorContext](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.

## See Also

### Getting the source text details

- [attributedString](attributedstring.md): The portion of your view’s text to evaluate.
