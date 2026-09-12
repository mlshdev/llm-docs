> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmactionset/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The action set’s unique identifier.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Identifiying an action set

- [name](name.md): The name of the action set.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the action set.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The action set’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Identifiying an action set

- [name](name.md): The name of the action set.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the action set.
