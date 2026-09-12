> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvdigitentryviewcontroller/prompttext](https://developer.apple.com/documentation/tvuikit/tvdigitentryviewcontroller/prompttext)

# promptText (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A prompt that displays any additional required information.

## Declaration

```swift
var promptText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The prompt text is displayed immediately below the title text.

## See Also

### Configuring the Digit Entry View

- [numberOfDigits](numberofdigits.md): The number of required digits.
- [titleText](titletext.md): The title of the digit entry view.
- [isSecureDigitEntry](issecuredigitentry.md): A Boolean value that indicates whether an entered digit is immediately obscured.

# promptText (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A prompt that displays any additional required information.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * promptText;
```

<a id="Discussion"></a>

## Discussion

The prompt text is displayed immediately below the title text.

## See Also

### Configuring the Digit Entry View

- [numberOfDigits](numberofdigits.md): The number of required digits.
- [titleText](titletext.md): The title of the digit entry view.
- [secureDigitEntry](issecuredigitentry.md): A Boolean value that indicates whether an entered digit is immediately obscured.
