> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktextprovider/textproviderwithformat:](https://developer.apple.com/documentation/clockkit/clktextprovider/textproviderwithformat:)

# textProviderWithFormat:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider built from the specified format string.

## Declaration

```objectivec
+ (CLKTextProvider *) textProviderWithFormat:(NSString *) format;
```

## Parameters

- `format`: A format string to use when building the text provider. To insert content from another text provider into the string, use the `%@` placeholder. For more information and examples about the placeholders you can use in this string, see [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) and [String Format Specifiers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265). This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A text provider object built from the specified arguments.

<a id="Discussion"></a>

## Discussion

Use this method to create a text provider comprising text and the content of other objects, including other text providers.

<a id="Set-Up-Multicolor-Text"></a>

### Set Up Multicolor Text

The graphic complications support multicolor text in some text fields. To create multicolor text, build a composite text provider using two or more text providers with different tint colors.

```objc
CLKTextProvider *energyTextProvider = [CLKSimpleTextProvider textProviderWithText:myMoveString];
energyTextProvider.tintColor = myEnergyColor;

CLKTextProvider *exerciseTextProvider = [CLKSimpleTextProvider textProviderWithText:myExerciseString];
exerciseTextProvider.tintColor = myExerciseColor;

CLKTextProvider *standTextProvider = [CLKSimpleTextProvider textProviderWithText:myStandString];
standTextProvider.tintColor = myStandColor;

NSString *separatorString = NSLocalizedString(MY_LOCALIZED_SEPERATOR, @"Seperator for compound data strings.");

CLKTextProvider *multiColorTextProvider = [CLKTextProvider textProviderWithFormat:@"%@%@%@%@%@",
                                           energyTextProvider,
                                           separatorString,
                                           exerciseTextProvider,
                                           separatorString,
                                           standTextProvider];

multiColorTextProvider.tintColor = UIColor.darkTextColor;
```

Tinted graphic complications flatten multicolor text, and display the text using the tint color selected by the user.
