> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phpersistentobjectchangedetails/updatedlocalidentifiers](https://developer.apple.com/documentation/photos/phpersistentobjectchangedetails/updatedlocalidentifiers)

# updatedLocalIdentifiers (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The local identifiers the system updates since the change token you specify.

## Declaration

```swift
var updatedLocalIdentifiers: Set<String> { get }
```

<a id="Discussion"></a>

## Discussion

This value includes assets the user moves to the trash or hides, so they may later be available if the user removes an asset from the trash or unhides it.

## See Also

### Getting the Change Details

- [insertedLocalIdentifiers](insertedlocalidentifiers.md): The local identifiers the system inserts since the change token you specify.
- [deletedLocalIdentifiers](deletedlocalidentifiers.md): The local identifiers the system deletes since the change token you specify.

# updatedLocalIdentifiers (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The local identifiers the system updates since the change token you specify.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSSet<NSString *> * updatedLocalIdentifiers;
```

<a id="Discussion"></a>

## Discussion

This value includes assets the user moves to the trash or hides, so they may later be available if the user removes an asset from the trash or unhides it.

## See Also

### Getting the Change Details

- [insertedLocalIdentifiers](insertedlocalidentifiers.md): The local identifiers the system inserts since the change token you specify.
- [deletedLocalIdentifiers](deletedlocalidentifiers.md): The local identifiers the system deletes since the change token you specify.
