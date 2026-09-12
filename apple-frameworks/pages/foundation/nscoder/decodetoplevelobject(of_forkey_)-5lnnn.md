> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetoplevelobject(of:forkey:)-5lnnn](https://developer.apple.com/documentation/foundation/nscoder/decodetoplevelobject(of:forkey:)-5lnnn)

# decodeTopLevelObject(of:forKey:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decode an object as one of several expected types, failing if the archived type does not match.

## Declaration

```swift
@nonobjc func decodeTopLevelObject(of classes: [AnyClass]?, forKey key: String) throws -> Any?
```

## Parameters

- `classes`: An array of expected classes that the object being decoded should match at least one of.
- `key`: The key indicating the member to decode.

<a id="return-value"></a>

## Return Value

The decoded object, or `nil` if decoding fails.

<a id="Discussion"></a>

## Discussion

This method is equivalent to [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-7tmft.md), but allows you to specify a set of classes that the decoded object can match. If [requiresSecureCoding](requiressecurecoding.md) is `true`, the decoded object’s class must be a member of the classes parameter, or a sublcass of a member.

## See Also

### Decoding Top-Level Objects

- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-7tmft.md): Decode an object as an expected type, failing if the archived type doesn’t match.
- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md): Decode an object as one of several expected types, failing if the archived type doesn’t match any of the types.
- [decodeTopLevelObject()](decodetoplevelobject%28%29.md): Deprecated. Decodes a previously-encoded object.
- [decodeTopLevelObject(forKey:)](decodetoplevelobject%28forkey_%29.md): Deprecated. Decodes the previously-encoded object associated by a key.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-3w6pd.md): Decode an object as one of several expected types, failing if the archived type does not match.
