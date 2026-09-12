> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dump(_:name:indent:maxdepth:maxitems:)](https://developer.apple.com/documentation/swift/dump(_:name:indent:maxdepth:maxitems:))

# dump(\_:name:indent:maxDepth:maxItems:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Dumps the given object’s contents using its mirror to standard output.

## Declaration

```swift
@discardableResult func dump<T>(_ value: T, name: String? = nil, indent: Int = 0, maxDepth: Int = .max, maxItems: Int = .max) -> T
```

## Parameters

- `value`: The value to output to the `target` stream.
- `name`: A label to use when writing the contents of `value`. When `nil` is passed, the label is omitted. The default is `nil`.
- `indent`: The number of spaces to use as an indent for each line of the output. The default is `0`.
- `maxDepth`: The maximum depth to descend when writing the contents of a value that has nested components. The default is `Int.max`.
- `maxItems`: The maximum number of elements for which to write the full contents. The default is `Int.max`.

<a id="return-value"></a>

## Return Value

The instance passed as `value`.

## See Also

### Printing and Dumping

- [print(\_:separator:terminator:)](print%28__separator_terminator_%29.md): Writes the textual representations of the given items into the standard output.
- [print(\_:separator:terminator:to:)](print%28__separator_terminator_to_%29.md): Writes the textual representations of the given items into the given output stream.
- [debugPrint(\_:separator:terminator:)](debugprint%28__separator_terminator_%29.md): Writes the textual representations of the given items most suitable for debugging into the standard output.
- [debugPrint(\_:separator:terminator:to:)](debugprint%28__separator_terminator_to_%29.md): Writes the textual representations of the given items most suitable for debugging into the given output stream.
- [dump(\_:to:name:indent:maxDepth:maxItems:)](dump%28__to_name_indent_maxdepth_maxitems_%29.md): Dumps the given object’s contents using its mirror to the specified output stream.
