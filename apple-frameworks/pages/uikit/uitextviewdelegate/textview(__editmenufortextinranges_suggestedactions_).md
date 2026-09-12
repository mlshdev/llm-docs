> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:editmenufortextinranges:suggestedactions:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:editmenufortextinranges:suggestedactions:))

# textView(\_:editMenuForTextInRanges:suggestedActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
optional func textView(_ textView: UITextView, editMenuForTextInRanges ranges: [NSValue], suggestedActions: [UIMenuElement]) -> UIMenu?
```

## Parameters

- `textView`: The text view requesting the menu.
- `ranges`: The text ranges for which the menu is presented for.
- `suggestedActions`: The actions and commands that the system suggests.

<a id="return-value"></a>

## Return Value

Return a UIMenu describing the desired menu hierarchy. Return @c nil to present the default system menu.

<a id="discussion"></a>

## Discussion

Asks the delegate for the menu to be shown for the specified text ranges.

If the delegate does not implement this method then the `textView:editMenuForTextInRange:suggestedActions:` method will be called and passed the union range instead. If the delegate also does not implement that method then `nil` is assumed.

# textView:editMenuForTextInRanges:suggestedActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (UIMenu *) textView:(UITextView *) textView editMenuForTextInRanges:(NSArray<NSValue *> *) ranges suggestedActions:(NSArray<UIMenuElement *> *) suggestedActions;
```

## Parameters

- `textView`: The text view requesting the menu.
- `ranges`: The text ranges for which the menu is presented for.
- `suggestedActions`: The actions and commands that the system suggests.

<a id="return-value"></a>

## Return Value

Return a UIMenu describing the desired menu hierarchy. Return @c nil to present the default system menu.

<a id="discussion"></a>

## Discussion

Asks the delegate for the menu to be shown for the specified text ranges.

If the delegate does not implement this method then the `textView:editMenuForTextInRange:suggestedActions:` method will be called and passed the union range instead. If the delegate also does not implement that method then `nil` is assumed.
