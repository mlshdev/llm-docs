> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstorenode/value(for:)](https://developer.apple.com/documentation/coredata/nsincrementalstorenode/value(for:))

# value(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the given property.

## Declaration

```swift
func value(for prop: NSPropertyDescription) -> Any?
```

## Parameters

- `prop`: A property description for one of the properties in the receiver.

<a id="return-value"></a>

## Return Value

The value for the property specified by `prop`. May return an instance of `NSNull` for to-one relationships.

<a id="Discussion"></a>

## Discussion

If a relationship is `nil`, you should create a new value by invoking `newValueForRelationship:forObjectWithID:withContext:error:` on the `NSPersistentStore` object.

## See Also

### Managing Node Data

- [objectID](objectid.md): The object ID that identifies the data stored by the receiver.
- [update(withValues:version:)](update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [version](version.md): The version of data in the receiver.

# valueForPropertyDescription: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for the given property.

## Declaration

```objectivec
- (id) valueForPropertyDescription:(NSPropertyDescription *) prop;
```

## Parameters

- `prop`: A property description for one of the properties in the receiver.

<a id="return-value"></a>

## Return Value

The value for the property specified by `prop`. May return an instance of `NSNull` for to-one relationships.

<a id="Discussion"></a>

## Discussion

If a relationship is `nil`, you should create a new value by invoking `newValueForRelationship:forObjectWithID:withContext:error:` on the `NSPersistentStore` object.

## See Also

### Managing Node Data

- [objectID](objectid.md): The object ID that identifies the data stored by the receiver.
- [updateWithValues:version:](update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [version](version.md): The version of data in the receiver.
