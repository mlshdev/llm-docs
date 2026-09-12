> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservicegroup/services](https://developer.apple.com/documentation/homekit/hmservicegroup/services)

# services (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Array of the services in the service group.

## Declaration

```swift
var services: [HMService] { get }
```

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [uniqueIdentifier](uniqueidentifier.md): The unique identifier for the service group.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [addService(\_:completionHandler:)](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService(\_:completionHandler:)](removeservice%28__completionhandler_%29.md): Removes a service from the service group.

# services (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Array of the services in the service group.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMService *> * services;
```

## See Also

### Managing Service Groups

- [name](name.md): The name of the service group.
- [uniqueIdentifier](uniqueidentifier.md): The unique identifier for the service group.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the service group.
- [addService:completionHandler:](addservice%28__completionhandler_%29.md): Adds a new service to the service group.
- [removeService:completionHandler:](removeservice%28__completionhandler_%29.md): Removes a service from the service group.
