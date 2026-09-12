> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/context/range](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/context/range)

# range (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

The unique identifier of the context object.

## Declaration

```swift
var range: NSRange { get }
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

The [NSWritingToolsCoordinator.Context](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.

## See Also

### Getting the source text details

- [attributedString](attributedstring.md): The portion of your view’s text to evaluate.

# range (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

The unique identifier of the context object.

## Declaration

```objectivec
@property (readonly) NSRange range;
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](../../adding-writing-tools-support-to-a-custom-nsview.md)

<a id="discussion"></a>

## Discussion

The [NSWritingToolsCoordinatorContext](../context.md) object initializes the value of this property at creation time. Use this value to identify the context object within your app.

## See Also

### Getting the source text details

- [attributedString](attributedstring.md): The portion of your view’s text to evaluate.
