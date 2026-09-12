> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/description](https://developer.apple.com/documentation/swift/dictionary/description)

# description

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that represents the contents of the dictionary.

## Declaration

```swift
var description: String { get }
```

## See Also

### Describing a Dictionary

- [debugDescription](debugdescription.md): Conforms when `Key` conforms to `Hashable`. A string that represents the contents of the dictionary, suitable for debugging.
- [customMirror](custommirror.md): Conforms when `Key` conforms to `Hashable`. A mirror that reflects the dictionary.
- [hash(into:)](hash%28into_%29.md): Conforms when `Key` conforms to `Hashable` and `Value` conforms to `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.
