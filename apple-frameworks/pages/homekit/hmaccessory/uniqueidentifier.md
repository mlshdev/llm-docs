> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmaccessory/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the accessory.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Identifying an Accessory

- [name](name.md): The name of the accessory.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [identifier](identifier.md): Deprecated. A unique identifier for the accessory.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Identifying an Accessory

- [name](name.md): The name of the accessory.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [identifier](identifier.md): Deprecated. A unique identifier for the accessory.
