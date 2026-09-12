> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/hash(into:)](https://developer.apple.com/documentation/swift/string/hash(into:))

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

### Describing a String

- [description](description.md): The value of this string.
- [debugDescription](debugdescription.md): A representation of the string that is suitable for debugging.
- [customMirror](custommirror.md): A mirror that reflects the `String` instance.
- [hashValue](hashvalue.md): The hash value.
