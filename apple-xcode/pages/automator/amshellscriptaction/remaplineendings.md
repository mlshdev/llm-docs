> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amshellscriptaction/remaplineendings](https://developer.apple.com/documentation/automator/amshellscriptaction/remaplineendings)

# remapLineEndings (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether you want automatic remapping of carriage return (`\r`) to newline (`\n`) characters in the input string.

## Declaration

```swift
var remapLineEndings: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). Override to return [true](https://developer.apple.com/documentation/swift/true) if you want the remapping to occur.

## See Also

### Handling the I/O Separator Character

- [inputFieldSeparator](inputfieldseparator.md): A string to use as the delimiter between items in the string passed to the action through standard input.
- [outputFieldSeparator](outputfieldseparator.md): A string to use as a delimiter in the string output by the action.

# remapLineEndings (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

A Boolean value that indicates whether you want automatic remapping of carriage return (`\r`) to newline (`\n`) characters in the input string.

## Declaration

```objectivec
@property (atomic, readonly) BOOL remapLineEndings;
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). Override to return [true](https://developer.apple.com/documentation/swift/true) if you want the remapping to occur.

## See Also

### Handling the I/O Separator Character

- [inputFieldSeparator](inputfieldseparator.md): A string to use as the delimiter between items in the string passed to the action through standard input.
- [outputFieldSeparator](outputfieldseparator.md): A string to use as a delimiter in the string output by the action.
