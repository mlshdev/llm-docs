> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstore/identifier

# identifier (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the persistent store.

## Declaration

```swift
var identifier: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The identifier is used as part of the managed object IDs for each object in the store.

<a id="Special-Considerations"></a>

### Special Considerations

`NSPersistentStore` provides a default implementation to provide a globally unique identifier for the store instance.

## See Also

### Related Documentation

- [metadata](metadata.md): The metadata for the persistent store.

### Managing Store Attributes

- [isReadOnly](isreadonly.md): A Boolean value that indicates whether the persistent store is read-only.
- [url](url.md): The URL for the persistent store.

# identifier (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the persistent store.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The identifier is used as part of the managed object IDs for each object in the store.

<a id="Special-Considerations"></a>

### Special Considerations

`NSPersistentStore` provides a default implementation to provide a globally unique identifier for the store instance.

## See Also

### Related Documentation

- [metadata](metadata.md): The metadata for the persistent store.

### Managing Store Attributes

- [readOnly](isreadonly.md): A Boolean value that indicates whether the persistent store is read-only.
- [URL](url.md): The URL for the persistent store.
