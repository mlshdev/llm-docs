> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallgroup/init(groupname:groupid:)](https://developer.apple.com/documentation/intents/incallgroup/init(groupname:groupid:))

# init(groupName:groupId:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+ · watchOS 7.3+

Creates a call record with the group details.

## Declaration

```swift
init(groupName: String?, groupId: String?)
```

## Parameters

- `groupName`: The name contributed the user to their group call. This field can be `nil`.
- `groupId`: A unique identifier that disguishes call groups. This field can be `nil`.

<a id="return-value"></a>

## Return Value

An initialized [INCallGroup](../incallgroup.md) object or `nil` if the user did not initialize the object.

# initWithGroupName:groupId: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+ · watchOS 7.3+

Creates a call record with the group details.

## Declaration

```objectivec
- (instancetype) initWithGroupName:(NSString *) groupName groupId:(NSString *) groupId;
```

## Parameters

- `groupName`: The name contributed the user to their group call. This field can be `nil`.
- `groupId`: A unique identifier that disguishes call groups. This field can be `nil`.

<a id="return-value"></a>

## Return Value

An initialized [INCallGroup](../incallgroup.md) object or `nil` if the user did not initialize the object.
