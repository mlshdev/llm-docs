> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/dictionary/custommirror

# customMirror

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mirror that reflects the dictionary.

## Declaration

```swift
var customMirror: Mirror { get }
```

## See Also

### Describing a Dictionary

- [description](description.md): Conforms when `Key` conforms to `Hashable`. A string that represents the contents of the dictionary.
- [debugDescription](debugdescription.md): Conforms when `Key` conforms to `Hashable`. A string that represents the contents of the dictionary, suitable for debugging.
- [hash(into:)](hash%28into_%29.md): Conforms when `Key` conforms to `Hashable` and `Value` conforms to `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.
