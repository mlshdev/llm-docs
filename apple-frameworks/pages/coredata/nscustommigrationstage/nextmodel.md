> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscustommigrationstage/nextmodel](https://developer.apple.com/documentation/coredata/nscustommigrationstage/nextmodel)

# nextModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The reference that represents the migration’s destination model.

## Declaration

```swift
var nextModel: NSManagedObjectModelReference { get }
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the `nextModel` parameter you specify when creating the migration stage.

## See Also

### Accessing model references

- [currentModel](currentmodel.md): The reference that represents the migration’s source model.

# nextModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The reference that represents the migration’s destination model.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectModelReference * nextModel;
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the `nextModel` parameter you specify when creating the migration stage.

## See Also

### Accessing model references

- [currentModel](currentmodel.md): The reference that represents the migration’s source model.
