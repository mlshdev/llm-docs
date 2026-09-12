> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmzone/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmzone/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a zone.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Identifying a Zone

- [name](name.md): The name of the zone.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the zone.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a zone.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Identifying a Zone

- [name](name.md): The name of the zone.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the zone.
