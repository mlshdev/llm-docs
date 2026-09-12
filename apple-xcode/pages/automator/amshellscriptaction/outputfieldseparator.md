> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amshellscriptaction/outputfieldseparator](https://developer.apple.com/documentation/automator/amshellscriptaction/outputfieldseparator)

# outputFieldSeparator (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A string to use as a delimiter in the string output by the action.

## Declaration

```swift
var outputFieldSeparator: String { get }
```

<a id="Discussion"></a>

## Discussion

Upon completion, the Automator framework converts an output string provided by the action into an array (or list), to be passed to the next action in the workflow for further processing. The elements in this array are derived from fields delimited by the output field separator. The default value is the separator character returned by [inputFieldSeparator](inputfieldseparator.md). Override this method if you want a different delimiter for output.

## See Also

### Handling the I/O Separator Character

- [inputFieldSeparator](inputfieldseparator.md): A string to use as the delimiter between items in the string passed to the action through standard input.
- [remapLineEndings](remaplineendings.md): A Boolean value that indicates whether you want automatic remapping of carriage return (`\r`) to newline (`\n`) characters in the input string.

# outputFieldSeparator (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A string to use as a delimiter in the string output by the action.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSString * outputFieldSeparator;
```

<a id="Discussion"></a>

## Discussion

Upon completion, the Automator framework converts an output string provided by the action into an array (or list), to be passed to the next action in the workflow for further processing. The elements in this array are derived from fields delimited by the output field separator. The default value is the separator character returned by [inputFieldSeparator](inputfieldseparator.md). Override this method if you want a different delimiter for output.

## See Also

### Handling the I/O Separator Character

- [inputFieldSeparator](inputfieldseparator.md): A string to use as the delimiter between items in the string passed to the action through standard input.
- [remapLineEndings](remaplineendings.md): A Boolean value that indicates whether you want automatic remapping of carriage return (`\r`) to newline (`\n`) characters in the input string.
