> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/readline(strippingnewline:)](https://developer.apple.com/documentation/swift/readline(strippingnewline:))

# readLine(strippingNewline:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string read from standard input through the end of the current line or until EOF is reached.

## Declaration

```swift
func readLine(strippingNewline: Bool = true) -> String?
```

## Parameters

- `strippingNewline`: If `true`, newline characters and character combinations are stripped from the result; otherwise, newline characters or character combinations are preserved. The default is `true`.

<a id="return-value"></a>

## Return Value

The string of characters read from standard input. If EOF has already been reached when `readLine()` is called, the result is `nil`.

<a id="discussion"></a>

## Discussion

Standard input is interpreted as `UTF-8`. Invalid bytes are replaced by Unicode [replacement characters](https://unicode.org/glossary/#replacement_character).

## See Also

### Command Line Input

- [CommandLine](commandline.md): Command-line arguments for the current process.
