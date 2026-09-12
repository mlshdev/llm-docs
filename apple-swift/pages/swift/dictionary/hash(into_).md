> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/hash(into:)](https://developer.apple.com/documentation/swift/dictionary/hash(into:))

# hash(into:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hashes the essential components of this value by feeding them into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hasher to use when combining the components of this instance.

## See Also

### Describing a Dictionary

- [description](description.md): Conforms when `Key` conforms to `Hashable`. A string that represents the contents of the dictionary.
- [debugDescription](debugdescription.md): Conforms when `Key` conforms to `Hashable`. A string that represents the contents of the dictionary, suitable for debugging.
- [customMirror](custommirror.md): Conforms when `Key` conforms to `Hashable`. A mirror that reflects the dictionary.
