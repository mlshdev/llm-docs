> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:shouldchangetextinranges:replacementtext:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:shouldchangetextinranges:replacementtext:))

# textView(\_:shouldChangeTextInRanges:replacementText:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
optional func textView(_ textView: UITextView, shouldChangeTextInRanges ranges: [NSValue], replacementText text: String) -> Bool
```

## Parameters

- `textView`: The text view asking the delegate
- `ranges`: The ranges of the text that should be deleted before replacing

<a id="return-value"></a>

## Return Value

Returns true if the text at the `ranges` should be replaced.

<a id="discussion"></a>

## Discussion

Asks the delegate if the text at the specified `ranges` should be replaced with `text`.

If this method returns YES then the text view will, at its own discretion, choose any one of the specified `ranges` of text and replace it with the specified `replacementText` before deleting the text at the other ranges. If the delegate does not implement this method then the `textView:shouldChangeTextInRange:replacementText:` method will be called and passed the union range instead. If the delegate also does not implement that method then YES is assumed.

# textView:shouldChangeTextInRanges:replacementText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (BOOL) textView:(UITextView *) textView shouldChangeTextInRanges:(NSArray<NSValue *> *) ranges replacementText:(NSString *) text;
```

## Parameters

- `textView`: The text view asking the delegate
- `ranges`: The ranges of the text that should be deleted before replacing

<a id="return-value"></a>

## Return Value

Returns true if the text at the `ranges` should be replaced.

<a id="discussion"></a>

## Discussion

Asks the delegate if the text at the specified `ranges` should be replaced with `text`.

If this method returns YES then the text view will, at its own discretion, choose any one of the specified `ranges` of text and replace it with the specified `replacementText` before deleting the text at the other ranges. If the delegate does not implement this method then the `textView:shouldChangeTextInRange:replacementText:` method will be called and passed the union range instead. If the delegate also does not implement that method then YES is assumed.
