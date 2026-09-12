> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phpersistentchange/changedetails(for:)](https://developer.apple.com/documentation/photos/phpersistentchange/changedetails(for:))

# changeDetails(for:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the change history that contains the local identifiers for object inserts, updates, and deletes.

## Declaration

```swift
func changeDetails(for objectType: PHObjectType) throws -> PHPersistentObjectChangeDetails
```

## Parameters

- `objectType`: The type of object to request change details for.

<a id="return-value"></a>

## Return Value

An object that represents the change details.

## See Also

### Getting the Change History

- [PHPersistentObjectChangeDetails](../phpersistentobjectchangedetails.md): An object that represents the local identifiers that change between requests using a change token.

# changeDetailsForObjectType:error: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the change history that contains the local identifiers for object inserts, updates, and deletes.

## Declaration

```objectivec
- (PHPersistentObjectChangeDetails *) changeDetailsForObjectType:(PHObjectType) objectType error:(NSError **) error;
```

## Parameters

- `objectType`: The type of object to request change details for.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An object that represents the change details. On failure, this method returns `nil`.

## See Also

### Getting the Change History

- [PHPersistentObjectChangeDetails](../phpersistentobjectchangedetails.md): An object that represents the local identifiers that change between requests using a change token.
