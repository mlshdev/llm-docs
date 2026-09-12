> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscribbleinteraction/ishandlingwriting](https://developer.apple.com/documentation/uikit/uiscribbleinteraction/ishandlingwriting)

# isHandlingWriting (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the user is actively writing in a text view.

## Declaration

```swift
var isHandlingWriting: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) in between calls to [scribbleInteractionWillBeginWriting(\_:)](../uiscribbleinteractiondelegate/scribbleinteractionwillbeginwriting%28__%29.md) and [scribbleInteractionDidFinishWriting(\_:)](../uiscribbleinteractiondelegate/scribbleinteractiondidfinishwriting%28__%29.md) when the user is writing.

# handlingWriting (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the user is actively writing in a text view.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHandlingWriting) BOOL handlingWriting;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) in between calls to [scribbleInteractionWillBeginWriting:](../uiscribbleinteractiondelegate/scribbleinteractionwillbeginwriting%28__%29.md) and [scribbleInteractionDidFinishWriting:](../uiscribbleinteractiondelegate/scribbleinteractiondidfinishwriting%28__%29.md) when the user is writing.
