> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmservice/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the service.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Identifying the service

- [name](name.md): The user specified name of the service.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the service to the specified string.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the service.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Identifying the service

- [name](name.md): The user specified name of the service.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the service to the specified string.
