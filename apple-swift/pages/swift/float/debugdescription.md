> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float/debugdescription

# debugDescription

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A textual representation of the value, suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

This property has the same value as the `description` property, except that NaN values are printed in an extended format.

## See Also

### Describing a Float

- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
- [description](description.md): A textual representation of the value.
- [customMirror](custommirror.md): A mirror that reflects the `Float` instance.
- [hashValue](hashvalue.md): The hash value.
