> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nscoder/decodetoplevelobject(forkey:)

# decodeTopLevelObject(forKey:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.2) · iPadOS 9.0+ (deprecated in 27.2) · Mac Catalyst 9.0+ (deprecated in 27.2) · macOS 10.11+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2) · Swift 4.0+

Decodes the previously-encoded object associated by a key.

## Declaration

```swift
@nonobjc func decodeTopLevelObject(forKey key: String) throws -> Any?
```

## Parameters

- `key`: The key that identifies the object to decode.

<a id="return-value"></a>

## Return Value

The decoded object, or `nil` if decoding fails.

## See Also

### Decoding Top-Level Objects

- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-7tmft.md): Decode an object as an expected type, failing if the archived type doesn’t match.
- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md): Decode an object as one of several expected types, failing if the archived type doesn’t match any of the types.
- [decodeTopLevelObject()](decodetoplevelobject%28%29.md): Deprecated. Decodes a previously-encoded object.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-3w6pd.md): Decode an object as one of several expected types, failing if the archived type does not match.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-5lnnn.md): Decode an object as one of several expected types, failing if the archived type does not match.
