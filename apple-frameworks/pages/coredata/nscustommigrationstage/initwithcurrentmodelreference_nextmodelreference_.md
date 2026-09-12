> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscustommigrationstage/initwithcurrentmodelreference:nextmodelreference:](https://developer.apple.com/documentation/coredata/nscustommigrationstage/initwithcurrentmodelreference:nextmodelreference:)

# initWithCurrentModelReference:nextModelReference:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a custom migration stage with the specified source and destination model references.

## Declaration

```objectivec
- (instancetype) initWithCurrentModelReference:(NSManagedObjectModelReference *) currentModel nextModelReference:(NSManagedObjectModelReference *) nextModel;
```

## Parameters

- `currentModel`: The reference that represents the migration’s source model.
- `nextModel`: The reference that represents the migration’s destination model.

<a id="return-value"></a>

## Return Value

An initialized custom migration stage, or `nil` if Core Data can’t create one.

## See Also

### Creating a custom migration stage

- [NSManagedObjectModelReference](../nsmanagedobjectmodelreference.md): An object that describes a specific version of an object model.
