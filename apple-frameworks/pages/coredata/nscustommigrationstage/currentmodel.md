> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nscustommigrationstage/currentmodel

# currentModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The reference that represents the migration’s source model.

## Declaration

```swift
var currentModel: NSManagedObjectModelReference { get }
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the `currentModel` parameter you specify when creating the migration stage.

## See Also

### Accessing model references

- [nextModel](nextmodel.md): The reference that represents the migration’s destination model.

# currentModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The reference that represents the migration’s source model.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectModelReference * currentModel;
```

<a id="Discussion"></a>

## Discussion

Core Data sets this property to the `currentModel` parameter you specify when creating the migration stage.

## See Also

### Accessing model references

- [nextModel](nextmodel.md): The reference that represents the migration’s destination model.
