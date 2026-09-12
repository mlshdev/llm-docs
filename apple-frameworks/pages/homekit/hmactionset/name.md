> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/name](https://developer.apple.com/documentation/homekit/hmactionset/name)

# name (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the action set.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

Action set names must be unique within a home.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Identifiying an action set

- [uniqueIdentifier](uniqueidentifier.md): The action set’s unique identifier.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the action set.

# name (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the action set.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Action set names must be unique within a home.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Identifiying an action set

- [uniqueIdentifier](uniqueidentifier.md): The action set’s unique identifier.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the action set.
