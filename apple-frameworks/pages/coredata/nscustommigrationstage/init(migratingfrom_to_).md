> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscustommigrationstage/init(migratingfrom:to:)](https://developer.apple.com/documentation/coredata/nscustommigrationstage/init(migratingfrom:to:))

# init(migratingFrom:to:)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+ · Swift 5.8+

Creates a custom migration stage with the specified source and destination model references.

## Declaration

```swift
convenience init(migratingFrom currentModel: NSManagedObjectModelReference, to nextModel: NSManagedObjectModelReference)
```

## Parameters

- `currentModel`: The reference that represents the migration’s source model.
- `nextModel`: The reference that represents the migration’s destination model.

## See Also

### Creating a custom migration stage

- [NSManagedObjectModelReference](../nsmanagedobjectmodelreference.md): An object that describes a specific version of an object model.
