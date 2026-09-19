> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/decodableattributedstringkey/decode(from:)-3yywq

# decode(from:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Decodes an Objective-C value from the provided decoder, using a default implementation.

## Declaration

```swift
static func decode(from decoder: any Decoder) throws -> Self.Value
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="return-value"></a>

## Return Value

The decoded object.

<a id="Discussion"></a>

## Discussion

The default implementation decodes the object as a [Data](../data.md) instance, then uses an [NSKeyedUnarchiver](../nskeyedunarchiver.md) to unarchive the object.

This method throws an error if reading from the decoder fails, or if the data read is corrupted or otherwise invalid.
