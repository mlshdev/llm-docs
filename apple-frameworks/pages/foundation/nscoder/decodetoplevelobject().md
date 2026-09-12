> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetoplevelobject()](https://developer.apple.com/documentation/foundation/nscoder/decodetoplevelobject())

# decodeTopLevelObject()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 9.0+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Decodes a previously-encoded object.

> Use decodeTopLevelObject(of:forKey:) instead

## Declaration

```swift
@nonobjc func decodeTopLevelObject() throws -> Any?
```

<a id="return-value"></a>

## Return Value

The decoded object, or `nil` if decoding fails.

## See Also

### Decoding Top-Level Objects

- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-7tmft.md): Decode an object as an expected type, failing if the archived type doesn’t match.
- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md): Decode an object as one of several expected types, failing if the archived type doesn’t match any of the types.
- [decodeTopLevelObject(forKey:)](decodetoplevelobject%28forkey_%29.md): Deprecated. Decodes the previously-encoded object associated by a key.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-3w6pd.md): Decode an object as one of several expected types, failing if the archived type does not match.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-5lnnn.md): Decode an object as one of several expected types, failing if the archived type does not match.
