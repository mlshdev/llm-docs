> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/context/attributedstring](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/context/attributedstring)

# attributedString (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The portion of your view’s text to evaluate.

## Declaration

```swift
@NSCopying var attributedString: NSAttributedString { get }
```

<a id="discussion"></a>

## Discussion

The `UIWritingToolsCoordinator/Context` object initializes the value of this property at creation time and doesn’t change it during the course of an operation. Instead, it suggests changes to the text in the indicated range and reports those changes to your [UIWritingToolsCoordinator.Delegate](../delegate-swift.protocol.md) object. Use the methods of your delegate object to integrate those changes back into your view’s text storage.

It’s your responsibility to track the location of this text in your view’s text storage object. When Writing Tools reports changes, it provides range values relative to this string. If you initialize this property with a subset of your view’s content, you must adjust any ranges that Writing Tools provides to get the correct location in your text storage.

## See Also

### Getting the source text details

- [range](range.md): The unique identifier of the context object.

# attributedString (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

The portion of your view’s text to evaluate.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSAttributedString * attributedString;
```

<a id="discussion"></a>

## Discussion

The `UIWritingToolsCoordinator/Context` object initializes the value of this property at creation time and doesn’t change it during the course of an operation. Instead, it suggests changes to the text in the indicated range and reports those changes to your [UIWritingToolsCoordinatorDelegate](../delegate-swift.protocol.md) object. Use the methods of your delegate object to integrate those changes back into your view’s text storage.

It’s your responsibility to track the location of this text in your view’s text storage object. When Writing Tools reports changes, it provides range values relative to this string. If you initialize this property with a subset of your view’s content, you must adjust any ranges that Writing Tools provides to get the correct location in your text storage.

## See Also

### Getting the source text details

- [range](range.md): The unique identifier of the context object.
