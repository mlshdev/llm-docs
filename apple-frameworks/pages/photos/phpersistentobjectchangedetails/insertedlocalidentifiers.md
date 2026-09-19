> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phpersistentobjectchangedetails/insertedlocalidentifiers

# insertedLocalIdentifiers (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The local identifiers the system inserts since the change token you specify.

## Declaration

```swift
var insertedLocalIdentifiers: Set<String> { get }
```

## See Also

### Getting the Change Details

- [updatedLocalIdentifiers](updatedlocalidentifiers.md): The local identifiers the system updates since the change token you specify.
- [deletedLocalIdentifiers](deletedlocalidentifiers.md): The local identifiers the system deletes since the change token you specify.

# insertedLocalIdentifiers (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The local identifiers the system inserts since the change token you specify.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSSet<NSString *> * insertedLocalIdentifiers;
```

## See Also

### Getting the Change Details

- [updatedLocalIdentifiers](updatedlocalidentifiers.md): The local identifiers the system updates since the change token you specify.
- [deletedLocalIdentifiers](deletedlocalidentifiers.md): The local identifiers the system deletes since the change token you specify.
