> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/identifier](https://developer.apple.com/documentation/homekit/hmaccessory/identifier)

# identifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A unique identifier for the accessory.

> Use [uniqueIdentifier](uniqueidentifier.md) instead.

## Declaration

```swift
var identifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

An identifier is stable for as long as an accessory is in a home. If an accessory is removed from a home, it will get a new identifier when it is next added to a home.

## See Also

### Identifying an Accessory

- [name](name.md): The name of the accessory.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the accessory.

# identifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A unique identifier for the accessory.

> Use [uniqueIdentifier](uniqueidentifier.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * identifier;
```

<a id="Discussion"></a>

## Discussion

An identifier is stable for as long as an accessory is in a home. If an accessory is removed from a home, it will get a new identifier when it is next added to a home.

## See Also

### Identifying an Accessory

- [name](name.md): The name of the accessory.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the accessory.
