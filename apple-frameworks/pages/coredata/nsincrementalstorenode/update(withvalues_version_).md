> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstorenode/update(withvalues:version:)](https://developer.apple.com/documentation/coredata/nsincrementalstorenode/update(withvalues:version:))

# update(withValues:version:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Update the values and version to reflect new data being saved to or loaded from the external store.

## Declaration

```swift
func update(withValues values: [String : Any], version: UInt64)
```

## Parameters

- `values`: A dictionary containing updated values, in the same format as that described in [init(objectID:withValues:version:)](init%28objectid_withvalues_version_%29.md).
- `version`: The version number for the transaction.

<a id="Discussion"></a>

## Discussion

Update the values and version to reflect new data being saved to or loaded from the external store.  // The values dictionary is in the same format as the initializer

## See Also

### Managing Node Data

- [objectID](objectid.md): The object ID that identifies the data stored by the receiver.
- [value(for:)](value%28for_%29.md): Returns the value for the given property.
- [version](version.md): The version of data in the receiver.

# updateWithValues:version: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Update the values and version to reflect new data being saved to or loaded from the external store.

## Declaration

```objectivec
- (void) updateWithValues:(NSDictionary<NSString *,id> *) values version:(uint64_t) version;
```

## Parameters

- `values`: A dictionary containing updated values, in the same format as that described in [initWithObjectID:withValues:version:](init%28objectid_withvalues_version_%29.md).
- `version`: The version number for the transaction.

<a id="Discussion"></a>

## Discussion

Update the values and version to reflect new data being saved to or loaded from the external store.  // The values dictionary is in the same format as the initializer

## See Also

### Managing Node Data

- [objectID](objectid.md): The object ID that identifies the data stored by the receiver.
- [valueForPropertyDescription:](value%28for_%29.md): Returns the value for the given property.
- [version](version.md): The version of data in the receiver.
