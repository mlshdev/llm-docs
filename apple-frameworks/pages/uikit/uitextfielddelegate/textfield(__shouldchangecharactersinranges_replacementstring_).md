> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:shouldchangecharactersinranges:replacementstring:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:shouldchangecharactersinranges:replacementstring:))

# textField(\_:shouldChangeCharactersInRanges:replacementString:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
optional func textField(_ textField: UITextField, shouldChangeCharactersInRanges ranges: [NSValue], replacementString string: String) -> Bool
```

## Parameters

- `textField`: The text field asking the delegate
- `ranges`: The ranges of the text that should be deleted before replacing

<a id="return-value"></a>

## Return Value

Returns YES if the text at the `ranges` should be replaced.

<a id="discussion"></a>

## Discussion

Asks the delegate if the text at the specified `ranges` should be replaced with `string`.

If this method returns YES then the text field will, at its own discretion, choose any one of the specified `ranges` of text and replace it with the specified `replacementString` before deleting the text at the other ranges.

# textField:shouldChangeCharactersInRanges:replacementString: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (BOOL) textField:(UITextField *) textField shouldChangeCharactersInRanges:(NSArray<NSValue *> *) ranges replacementString:(NSString *) string;
```

## Parameters

- `textField`: The text field asking the delegate
- `ranges`: The ranges of the text that should be deleted before replacing

<a id="return-value"></a>

## Return Value

Returns YES if the text at the `ranges` should be replaced.

<a id="discussion"></a>

## Discussion

Asks the delegate if the text at the specified `ranges` should be replaced with `string`.

If this method returns YES then the text field will, at its own discretion, choose any one of the specified `ranges` of text and replace it with the specified `replacementString` before deleting the text at the other ranges.
