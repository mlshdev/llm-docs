> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/name](https://developer.apple.com/documentation/homekit/hmservice/name)

# name (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The user specified name of the service.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

Rename services by calling the [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md) method with a value given by the user.

## See Also

### Identifying the service

- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the service to the specified string.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the service.

# name (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The user specified name of the service.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Rename services by calling the [updateName:completionHandler:](updatename%28__completionhandler_%29.md) method with a value given by the user.

## See Also

### Identifying the service

- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the service to the specified string.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the service.
