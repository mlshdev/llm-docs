> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/write(to:)](https://developer.apple.com/documentation/swift/string/write(to:))

# write(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the string into the given output stream.

## Declaration

```swift
func write<Target>(to target: inout Target) where Target : TextOutputStream
```

## Parameters

- `target`: An output stream.

## See Also

### Writing to a File or URL

- [write(\_:)](write%28__%29.md): Appends the given string to this string.
