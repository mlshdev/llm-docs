> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodeobject(of:forkey:)-7tmft](https://developer.apple.com/documentation/foundation/nscoder/decodeobject(of:forkey:)-7tmft)

# decodeObject(of:forKey:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decode an object as an expected type, failing if the archived type doesn’t match.

## Declaration

```swift
func decodeObject<DecodedObjectType>(of cls: DecodedObjectType.Type, forKey key: String) -> DecodedObjectType? where DecodedObjectType : NSObject, DecodedObjectType : NSCoding
```

## Parameters

- `cls`: The expected class of the object being decoded.
- `key`: The key indicating the member to decode.

<a id="return-value"></a>

## Return Value

The decoded object, or `nil` if decoding fails.

<a id="Discussion"></a>

## Discussion

If the coder responds [true](https://developer.apple.com/documentation/swift/true) to [requiresSecureCoding](requiressecurecoding.md), then the coder calls [failWithError(\_:)](failwitherror%28__%29.md) in either of the following cases:

- The class indicated by `cls` doesn’t implement [NSSecureCoding](../nssecurecoding.md).
- The unarchived class doesn’t match `cls`, nor do any of its superclasses.

If the coder doesn’t require secure coding, it ignores the `cls` parameter and does not check the decoded object.

## See Also

### Decoding Top-Level Objects

- [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md): Decode an object as one of several expected types, failing if the archived type doesn’t match any of the types.
- [decodeTopLevelObject()](decodetoplevelobject%28%29.md): Deprecated. Decodes a previously-encoded object.
- [decodeTopLevelObject(forKey:)](decodetoplevelobject%28forkey_%29.md): Deprecated. Decodes the previously-encoded object associated by a key.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-3w6pd.md): Decode an object as one of several expected types, failing if the archived type does not match.
- [decodeTopLevelObject(of:forKey:)](decodetoplevelobject%28of_forkey_%29-5lnnn.md): Decode an object as one of several expected types, failing if the archived type does not match.
