> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450556-dcsgettermrangeinstring](https://developer.apple.com/documentation/coreservices/1450556-dcsgettermrangeinstring)

# DCSGetTermRangeInString(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Determines the range of the longest word or phrase with respect to an offset.

## Declaration

```swift
func DCSGetTermRangeInString(_ dictionary: DCSDictionary?, _ textString: CFString, _ offset: CFIndex) -> CFRange
```

## Parameters

- `dictionary`: This parameter is reserved for future use, so pass `NULL`. Dictionary Services searches in all active dictionaries.
- `textString`: Text that contains the word or phrase to look up.
- `offset`: A character offset in the `textString` parameter.

<a id="return_value"></a>

## Return Value

The range that specifies the location, around the specified offset, of the word or phrase , or the constant `kCFNotFound`.

<a id="discussion"></a>

## Discussion

You can use this function to determine the range of text that contains a word or phrase. After you determine the range, you can pass the result to the  functions [DCSCopyTextDefinition(\_:\_:\_:)](1446842-dcscopytextdefinition.md) and `HIDictionaryWindowShow(_:_:_:_:_:_:_:)`.

To see how this works, follow these steps:

1. In macOS 10.5 or later, open Text Edit.
2. Type `It is a foggy day in San Francisco, California.`
3. Control-click `Francisco` (don’t select it). Then, choose “Lookup in Dictionary”.

Note that the Dictionary window appears with a definition of San Francisco. The function  `DCSGetTermRangeInString` automatically detected the range of the phrase San Francisco, using `Francisco` as the text string to search for and a character offset in this string. The function expanded the range until it found a possible match.

You can also point the cursor at the word `Francisco` and, without making a selection or clicking, type Command-Control-D.  `DCSGetTermRangeInString` detects the range. 

The function `DCSGetTermRangeInString` only returns the range. You must call [DCSCopyTextDefinition(\_:\_:\_:)](1446842-dcscopytextdefinition.md) to copy the definition and `HIDictionaryWindowShow(_:_:_:_:_:_:_:)` to display the definition in a Dictionary window.

## See Also

### Related Documentation

- [Dictionary Services Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/DictionaryServicesProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40006152)

# DCSGetTermRangeInString (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Determines the range of the longest word or phrase with respect to an offset.

## Declaration

```objectivec
CFRange DCSGetTermRangeInString(DCSDictionaryRef dictionary, CFStringRef textString, CFIndex offset);
```

## Parameters

- `dictionary`: This parameter is reserved for future use, so pass `NULL`. Dictionary Services searches in all active dictionaries.
- `textString`: Text that contains the word or phrase to look up.
- `offset`: A character offset in the `textString` parameter.

<a id="return_value"></a>

## Return Value

The range that specifies the location, around the specified offset, of the word or phrase , or the constant `kCFNotFound`.

<a id="discussion"></a>

## Discussion

You can use this function to determine the range of text that contains a word or phrase. After you determine the range, you can pass the result to the  functions [DCSCopyTextDefinition](1446842-dcscopytextdefinition.md) and `HIDictionaryWindowShow`.

To see how this works, follow these steps:

1. In macOS 10.5 or later, open Text Edit.
2. Type `It is a foggy day in San Francisco, California.`
3. Control-click `Francisco` (don’t select it). Then, choose “Lookup in Dictionary”.

Note that the Dictionary window appears with a definition of San Francisco. The function  `DCSGetTermRangeInString` automatically detected the range of the phrase San Francisco, using `Francisco` as the text string to search for and a character offset in this string. The function expanded the range until it found a possible match.

You can also point the cursor at the word `Francisco` and, without making a selection or clicking, type Command-Control-D.  `DCSGetTermRangeInString` detects the range. 

The function `DCSGetTermRangeInString` only returns the range. You must call [DCSCopyTextDefinition](1446842-dcscopytextdefinition.md) to copy the definition and `HIDictionaryWindowShow` to display the definition in a Dictionary window.

## See Also

### Related Documentation

- [Dictionary Services Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/DictionaryServicesProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40006152)
