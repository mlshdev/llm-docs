> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteraction-2dap8/handlingwriting](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteraction-2dap8/handlingwriting)

# handlingWriting

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the user is actively writing.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHandlingWriting) BOOL handlingWriting;
```

<a id="Discussion"></a>

## Discussion

Set to [true](https://developer.apple.com/documentation/swift/true) in between calls to [indirectScribbleInteraction:willBeginWritingInElement:](../uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction_willbeginwritinginelement_.md) and [indirectScribbleInteraction:didFinishWritingInElement:](../uiindirectscribbleinteractiondelegate-3jmnk/indirectscribbleinteraction_didfinishwritinginelement_.md) calls.
