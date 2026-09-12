> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/formattingdictionary](https://developer.apple.com/documentation/appkit/nsruleeditor/formattingdictionary)

# formattingDictionary (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The formatting dictionary for the rule editor.

## Declaration

```swift
var formattingDictionary: [String : String]? { get set }
```

<a id="Discussion"></a>

## Discussion

If you assign a new the formatting dictionary to this property, it sets the current to formatting strings file name to `nil`.

## See Also

### Working with Formatting

- [formattingStringsFilename](formattingstringsfilename.md): The name of the rule editor’s strings file.

# formattingDictionary (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The formatting dictionary for the rule editor.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,NSString *> * formattingDictionary;
```

<a id="Discussion"></a>

## Discussion

If you assign a new the formatting dictionary to this property, it sets the current to formatting strings file name to `nil`.

## See Also

### Working with Formatting

- [formattingStringsFilename](formattingstringsfilename.md): The name of the rule editor’s strings file.
