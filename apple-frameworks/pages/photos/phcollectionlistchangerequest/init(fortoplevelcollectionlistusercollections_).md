> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/init(fortoplevelcollectionlistusercollections:)

# init(forTopLevelCollectionListUserCollections:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a request to add, remove, or rearrange child collections in the top-level collection list.

## Declaration

```swift
convenience init?(forTopLevelCollectionListUserCollections childCollections: PHFetchResult<PHCollection>)
```

## Parameters

- `childCollections`: The child collections to modify.

## See Also

### Creating a Change Request

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified collection list.
- [init(for:childCollections:)](init%28for_childcollections_%29.md): Creates a request for modifying the specified collection list, with a fetch result for tracking changes.

# changeRequestForTopLevelCollectionListUserCollections: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a request to add, remove, or rearrange child collections in the top-level collection list.

## Declaration

```objectivec
+ (instancetype) changeRequestForTopLevelCollectionListUserCollections:(PHFetchResult<__kindof PHCollection *> *) childCollections;
```

## Parameters

- `childCollections`: The child collections to modify.

## See Also

### Creating a Change Request

- [changeRequestForCollectionList:](init%28for_%29.md): Creates a request for modifying the specified collection list.
- [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md): Creates a request for modifying the specified collection list, with a fetch result for tracking changes.
