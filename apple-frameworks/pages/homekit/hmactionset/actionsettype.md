> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmactionset/actionsettype](https://developer.apple.com/documentation/homekit/hmactionset/actionsettype)

# actionSetType (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of the action set, such as built-in or user-defined.

## Declaration

```swift
var actionSetType: String { get }
```

<a id="Discussion"></a>

## Discussion

An action set type can be user-defined, trigger-owned, or one of the built-in types. Note that built-in action sets cannot be removed from the home, and trigger-owned action sets cannot be executed, renamed, or associated with another trigger.

## See Also

### Specifying a type

- [Action Set Types](../action-set-types.md): The types of action sets that you can define.

# actionSetType (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The type of the action set, such as built-in or user-defined.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * actionSetType;
```

<a id="Discussion"></a>

## Discussion

An action set type can be user-defined, trigger-owned, or one of the built-in types. Note that built-in action sets cannot be removed from the home, and trigger-owned action sets cannot be executed, renamed, or associated with another trigger.

## See Also

### Specifying a type

- [Action Set Types](../action-set-types.md): The types of action sets that you can define.
