> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:shouldanimatepasteof:to:)](https://developer.apple.com/documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:shouldanimatepasteof:to:))

# textPasteConfigurationSupporting(\_:shouldAnimatePasteOf:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate if the paste or drop operation should be animated.

## Declaration

```swift
optional func textPasteConfigurationSupporting(_ textPasteConfigurationSupporting: any UITextPasteConfigurationSupporting, shouldAnimatePasteOf attributedString: NSAttributedString, to textRange: UITextRange) -> Bool
```

## Parameters

- `textPasteConfigurationSupporting`: The object that received the paste or drop request.
- `attributedString`: The text that will be added to the text view.
- `textRange`: The position in the text view where the paste or drop operation will place the text.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the paste or drop operation should not be animated; otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If you don’t want the system to animate the paste or drop operation, implement this method and return [false](https://developer.apple.com/documentation/swift/false). The operation is animated if you return [true](https://developer.apple.com/documentation/swift/true) or if this method isn’t implemented.

# textPasteConfigurationSupporting:shouldAnimatePasteOfAttributedString:toRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate if the paste or drop operation should be animated.

## Declaration

```objectivec
- (BOOL) textPasteConfigurationSupporting:(id<UITextPasteConfigurationSupporting>) textPasteConfigurationSupporting shouldAnimatePasteOfAttributedString:(NSAttributedString *) attributedString toRange:(UITextRange *) textRange;
```

## Parameters

- `textPasteConfigurationSupporting`: The object that received the paste or drop request.
- `attributedString`: The text that will be added to the text view.
- `textRange`: The position in the text view where the paste or drop operation will place the text.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the paste or drop operation should not be animated; otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If you don’t want the system to animate the paste or drop operation, implement this method and return [false](https://developer.apple.com/documentation/swift/false). The operation is animated if you return [true](https://developer.apple.com/documentation/swift/true) or if this method isn’t implemented.
