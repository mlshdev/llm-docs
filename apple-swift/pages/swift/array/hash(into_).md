> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/hash(into:)](https://developer.apple.com/documentation/swift/array/hash(into:))

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

### Describing an Array

- [description](description.md): A textual representation of the array and its elements.
- [debugDescription](debugdescription.md): A textual representation of the array and its elements, suitable for debugging.
- [customMirror](custommirror.md): A mirror that reflects the array.
