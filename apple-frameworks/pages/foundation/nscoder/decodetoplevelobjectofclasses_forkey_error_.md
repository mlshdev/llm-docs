> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetoplevelobjectofclasses:forkey:error:](https://developer.apple.com/documentation/foundation/nscoder/decodetoplevelobjectofclasses:forkey:error:)

# decodeTopLevelObjectOfClasses:forKey:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decode an object as one of several expected types, failing if the archived type does not match.

## Declaration

```objectivec
- (id) decodeTopLevelObjectOfClasses:(NSSet<Class> *) classes forKey:(NSString *) key error:(NSError **) error;
```

## Parameters

- `classes`: A set of expected classes that the object being decoded should match at least one of.
- `key`: The archive key indicating the member to decode.
- `error`: On return, an [NSError](../nserror.md) indicating why decoding failed, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

The decoded object, or `nil` if decoding fails.

<a id="Discussion"></a>

## Discussion

This method is equivalent to [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md), but allows you to specify a set of classes that the decoded object can match. If [requiresSecureCoding](requiressecurecoding.md) is [true](https://developer.apple.com/documentation/swift/true), the decoded object’s class must be a member of the classes parameter, or a sublcass of a member.

## See Also

### Decoding Top-Level Objects

- [decodeTopLevelObjectOfClass:forKey:error:](decodetoplevelobjectofclass_forkey_error_.md): Decode an object as an expected type, failing if the archived type does not match.
- [decodeTopLevelObjectAndReturnError:](decodetoplevelobjectandreturnerror_.md): Decodes a previously-encoded object, populating an error if decoding fails.
- [decodeTopLevelObjectForKey:error:](decodetoplevelobjectforkey_error_.md): Decodes the previously-encoded object associated by a key, populating an error if decoding fails.
