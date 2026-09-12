> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/event/enddate](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/event/enddate)

# endDate (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The end date of the operation that the event represents.

## Declaration

```swift
var endDate: Date? { get }
```

## See Also

### Inspecting Event Properties

- [type](type.md): The type of event, either setup, import, or export.
- [identifier](identifier.md): A unique identifier for the event in a container.
- [storeIdentifier](storeidentifier.md): The associated store identifier in the container for the event.
- [succeeded](succeeded.md): A Boolean value that indicates whether the operation the event represents is successful.
- [startDate](startdate.md): The start date of the operation that the event represents.
- [error](error.md): An error that indicates why an operation fails.

# endDate (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The end date of the operation that the event represents.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * endDate;
```

## See Also

### Inspecting Event Properties

- [type](type.md): The type of event, either setup, import, or export.
- [identifier](identifier.md): A unique identifier for the event in a container.
- [storeIdentifier](storeidentifier.md): The associated store identifier in the container for the event.
- [succeeded](succeeded.md): A Boolean value that indicates whether the operation the event represents is successful.
- [startDate](startdate.md): The start date of the operation that the event represents.
- [error](error.md): An error that indicates why an operation fails.
