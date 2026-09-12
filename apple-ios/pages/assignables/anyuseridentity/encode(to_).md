> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/anyuseridentity/encode(to:)](https://developer.apple.com/documentation/assignables/anyuseridentity/encode(to:))

# encode(to:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Encodes this value into the given encoder.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

If the value fails to encode anything, `encoder` will encode an empty keyed container in its place.

This function throws an error if any values are invalid for the given encoder’s format.

## See Also

### Instance Methods

- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
