> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/name](https://developer.apple.com/documentation/homekit/hmaccessory/name)

# name (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the accessory.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

Use the [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md) method to change the name to a value chosen by the user.

## See Also

### Identifying an Accessory

- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the accessory.
- [identifier](identifier.md): Deprecated. A unique identifier for the accessory.

# name (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Use the [updateName:completionHandler:](updatename%28__completionhandler_%29.md) method to change the name to a value chosen by the user.

## See Also

### Identifying an Accessory

- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Changes the name of the accessory.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the accessory.
- [identifier](identifier.md): Deprecated. A unique identifier for the accessory.
