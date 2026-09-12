> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/debugprint(_:separator:terminator:to:)](https://developer.apple.com/documentation/swift/debugprint(_:separator:terminator:to:))

# debugPrint(\_:separator:terminator:to:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the textual representations of the given items most suitable for debugging into the given output stream.

## Declaration

```swift
func debugPrint<Target>(_ items: Any..., separator: String = " ", terminator: String = "\n", to output: inout Target) where Target : TextOutputStream
```

## Parameters

- `items`: Zero or more items to print.
- `separator`: A string to print between each item. The default is a single space (`" "`).
- `terminator`: The string to print after all items have been printed. The default is a newline (`"\n"`).
- `output`: An output stream to receive the text representation of each item.

<a id="discussion"></a>

## Discussion

You can pass zero or more items to the `debugPrint(_:separator:terminator:to:)` function. The textual representation for each item is the same as that obtained by calling `String(reflecting: item)`. The following example prints a closed range of integers to a string:

```swift
var range = "My range: "
debugPrint(1...5, to: &range)
// range == "My range: ClosedRange(1...5)\n"
```

To print the items separated by something other than a space, pass a string as `separator`.

```swift
var separated = ""
debugPrint(1.0, 2.0, 3.0, 4.0, 5.0, separator: " ... ", to: &separated)
// separated == "1.0 ... 2.0 ... 3.0 ... 4.0 ... 5.0\n"
```

The output from each call to `debugPrint(_:separator:terminator:to:)` includes a newline by default. To print the items without a trailing newline, pass an empty string as `terminator`.

```swift
var numbers = ""
for n in 1...5 {
    debugPrint(n, terminator: "", to: &numbers)
}
// numbers == "12345"
```

## See Also

### Printing and Dumping

- [print(\_:separator:terminator:)](print%28__separator_terminator_%29.md): Writes the textual representations of the given items into the standard output.
- [print(\_:separator:terminator:to:)](print%28__separator_terminator_to_%29.md): Writes the textual representations of the given items into the given output stream.
- [debugPrint(\_:separator:terminator:)](debugprint%28__separator_terminator_%29.md): Writes the textual representations of the given items most suitable for debugging into the standard output.
- [dump(\_:name:indent:maxDepth:maxItems:)](dump%28__name_indent_maxdepth_maxitems_%29.md): Dumps the given object’s contents using its mirror to standard output.
- [dump(\_:to:name:indent:maxDepth:maxItems:)](dump%28__to_name_indent_maxdepth_maxitems_%29.md): Dumps the given object’s contents using its mirror to the specified output stream.
