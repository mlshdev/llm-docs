> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/formattingstringsfilename](https://developer.apple.com/documentation/appkit/nsruleeditor/formattingstringsfilename)

# formattingStringsFilename (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the rule editor’s strings file.

## Declaration

```swift
var formattingStringsFilename: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The `NSRuleEditor` class looks for a strings file with the given name in the main bundle and (if appropriate) the bundle containing the nib file from which it was loaded. If it finds a strings file resource with the given name, `NSRuleEditor` loads it and sets it as the formatting dictionary for the receiver. You can obtain the resulting dictionary using the [formattingDictionary](formattingdictionary.md) property\].

If you assign a new dictionary to the [formattingDictionary](formattingdictionary.md) property, it sets the current to formatting strings file name to `nil`.

## See Also

### Working with Formatting

- [formattingDictionary](formattingdictionary.md): The formatting dictionary for the rule editor.

# formattingStringsFilename (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the rule editor’s strings file.

## Declaration

```objectivec
@property (copy, nullable) NSString * formattingStringsFilename;
```

<a id="Discussion"></a>

## Discussion

The `NSRuleEditor` class looks for a strings file with the given name in the main bundle and (if appropriate) the bundle containing the nib file from which it was loaded. If it finds a strings file resource with the given name, `NSRuleEditor` loads it and sets it as the formatting dictionary for the receiver. You can obtain the resulting dictionary using the [formattingDictionary](formattingdictionary.md) property\].

If you assign a new dictionary to the [formattingDictionary](formattingdictionary.md) property, it sets the current to formatting strings file name to `nil`.

## See Also

### Working with Formatting

- [formattingDictionary](formattingdictionary.md): The formatting dictionary for the rule editor.
