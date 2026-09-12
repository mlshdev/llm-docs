> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesapptranscriptpresentation/contentsizethatfits(_:)](https://developer.apple.com/documentation/messages/msmessagesapptranscriptpresentation/contentsizethatfits(_:))

# contentSizeThatFits(\_:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The size of your messages view, given the provided maximum size.

## Declaration

```swift
func contentSizeThatFits(_ size: CGSize) -> CGSize
```

## Parameters

- `size`: The maximum available size, in points.

<a id="Discussion"></a>

## Discussion

The system calls this method only when the Messages app needs to update the view’s size and the view controller is presenting a live view in the transcript or input field (the view controller’s [presentationStyle](../msmessagesappviewcontroller/presentationstyle.md) property is set to the [MSMessagesAppPresentationStyle.transcript](../msmessagesapppresentationstyle/transcript.md) value). Typically, the view’s size needs updating when the live message is added to the transcript, when the transcript’s width changes, or when the locale or dynamic type size changes.

The [MSMessagesAppViewController](../msmessagesappviewcontroller.md) class’s default implementation of the [contentSizeThatFits(\_:)](contentsizethatfits%28__%29.md) method simply returns the `size` parameter. Override this method to return an appropriate size for your live message view that fits within the provided size. The returned value must be equal to or smaller than the `size` parameter.

# contentSizeThatFits: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The size of your messages view, given the provided maximum size.

## Declaration

```objectivec
- (CGSize) contentSizeThatFits:(CGSize) size;
```

## Parameters

- `size`: The maximum available size, in points.

<a id="Discussion"></a>

## Discussion

The system calls this method only when the Messages app needs to update the view’s size and the view controller is presenting a live view in the transcript or input field (the view controller’s [presentationStyle](../msmessagesappviewcontroller/presentationstyle.md) property is set to the [MSMessagesAppPresentationStyleTranscript](../msmessagesapppresentationstyle/transcript.md) value). Typically, the view’s size needs updating when the live message is added to the transcript, when the transcript’s width changes, or when the locale or dynamic type size changes.

The [MSMessagesAppViewController](../msmessagesappviewcontroller.md) class’s default implementation of the [contentSizeThatFits:](contentsizethatfits%28__%29.md) method simply returns the `size` parameter. Override this method to return an appropriate size for your live message view that fits within the provided size. The returned value must be equal to or smaller than the `size` parameter.
