> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvdigitentryviewcontroller/issecuredigitentry

# isSecureDigitEntry (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A Boolean value that indicates whether an entered digit is immediately obscured.

## Declaration

```swift
var isSecureDigitEntry: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The defualt value is `NO`.

## See Also

### Configuring the Digit Entry View

- [numberOfDigits](numberofdigits.md): The number of required digits.
- [titleText](titletext.md): The title of the digit entry view.
- [promptText](prompttext.md): A prompt that displays any additional required information.

# secureDigitEntry (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A Boolean value that indicates whether an entered digit is immediately obscured.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isSecureDigitEntry) BOOL secureDigitEntry;
```

<a id="Discussion"></a>

## Discussion

The defualt value is `NO`.

## See Also

### Configuring the Digit Entry View

- [numberOfDigits](numberofdigits.md): The number of required digits.
- [titleText](titletext.md): The title of the digit entry view.
- [promptText](prompttext.md): A prompt that displays any additional required information.
