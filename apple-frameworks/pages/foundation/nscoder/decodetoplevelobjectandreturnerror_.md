> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetoplevelobjectandreturnerror:](https://developer.apple.com/documentation/foundation/nscoder/decodetoplevelobjectandreturnerror:)

# decodeTopLevelObjectAndReturnError:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a previously-encoded object, populating an error if decoding fails.

## Declaration

```objectivec
- (id) decodeTopLevelObjectAndReturnError:(NSError **) error;
```

## Parameters

- `error`: An [NSError](../nserror.md) reference. On return, if this value is not `nil`, it represents an error encountered while decoding.

<a id="return-value"></a>

## Return Value

The decoded object, or `nil` if decoding fails.

## See Also

### Decoding Top-Level Objects

- [decodeTopLevelObjectOfClass:forKey:error:](decodetoplevelobjectofclass_forkey_error_.md): Decode an object as an expected type, failing if the archived type does not match.
- [decodeTopLevelObjectOfClasses:forKey:error:](decodetoplevelobjectofclasses_forkey_error_.md): Decode an object as one of several expected types, failing if the archived type does not match.
- [decodeTopLevelObjectForKey:error:](decodetoplevelobjectforkey_error_.md): Decodes the previously-encoded object associated by a key, populating an error if decoding fails.
