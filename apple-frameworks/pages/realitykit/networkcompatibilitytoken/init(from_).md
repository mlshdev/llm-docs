> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/networkcompatibilitytoken/init(from:)](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken/init(from:))

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

Creates a new instance from a decoder.

## Declaration

```swift
required init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="discussion"></a>

## Discussion

Throws an error if reading from `decoder` fails, or if the data is corrupted or otherwise invalid.

## See Also

### Serializing tokens

- [encode(to:)](encode%28to_%29.md): Writes the token’s data into an encoder.
