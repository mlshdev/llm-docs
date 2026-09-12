> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservicegroup/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmservicegroup/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the service group.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [services](services.md): Array of the services in the service group.
- [addService(\_:completionHandler:)](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService(\_:completionHandler:)](removeservice%28__completionhandler_%29.md): Removes a service from the service group.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for the service group.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [services](services.md): Array of the services in the service group.
- [addService:completionHandler:](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService:completionHandler:](removeservice%28__completionhandler_%29.md): Removes a service from the service group.
