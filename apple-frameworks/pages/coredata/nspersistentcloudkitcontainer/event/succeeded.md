> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/event/succeeded](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/event/succeeded)

# succeeded (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the operation the event represents is successful.

## Declaration

```swift
var succeeded: Bool { get }
```

## See Also

### Inspecting Event Properties

- [type](type.md): The type of event, either setup, import, or export.
- [identifier](identifier.md): A unique identifier for the event in a container.
- [storeIdentifier](storeidentifier.md): The associated store identifier in the container for the event.
- [startDate](startdate.md): The start date of the operation that the event represents.
- [endDate](enddate.md): The end date of the operation that the event represents.
- [error](error.md): An error that indicates why an operation fails.

# succeeded (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the operation the event represents is successful.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL succeeded;
```

## See Also

### Inspecting Event Properties

- [type](type.md): The type of event, either setup, import, or export.
- [identifier](identifier.md): A unique identifier for the event in a container.
- [storeIdentifier](storeidentifier.md): The associated store identifier in the container for the event.
- [startDate](startdate.md): The start date of the operation that the event represents.
- [endDate](enddate.md): The end date of the operation that the event represents.
- [error](error.md): An error that indicates why an operation fails.
