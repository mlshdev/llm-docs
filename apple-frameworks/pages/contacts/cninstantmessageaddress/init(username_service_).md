> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cninstantmessageaddress/init(username:service:)](https://developer.apple.com/documentation/contacts/cninstantmessageaddress/init(username:service:))

# init(username:service:) (Swift)

**Framework:** Contacts  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a [CNInstantMessageAddress](../cninstantmessageaddress.md) object initialized with the specified user name and service.

## Declaration

```swift
init(username: String, service: String)
```

## Parameters

- `username`: The user name with which to initialize the [CNInstantMessageAddress](../cninstantmessageaddress.md) object.
- `service`: The service with which to Initialize the [CNInstantMessageAddress](../cninstantmessageaddress.md) object.

<a id="Return-Value"></a>

## Return Value

The initialized [CNInstantMessageAddress](../cninstantmessageaddress.md) object with the specified user name and service.

<a id="Discussion"></a>

## Discussion

User name and service are required to initialize [CNInstantMessageAddress](../cninstantmessageaddress.md) object.

# initWithUsername:service: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a [CNInstantMessageAddress](../cninstantmessageaddress.md) object initialized with the specified user name and service.

## Declaration

```objectivec
- (instancetype) initWithUsername:(NSString *) username service:(NSString *) service;
```

## Parameters

- `username`: The user name with which to initialize the [CNInstantMessageAddress](../cninstantmessageaddress.md) object.
- `service`: The service with which to Initialize the [CNInstantMessageAddress](../cninstantmessageaddress.md) object.

<a id="Return-Value"></a>

## Return Value

The initialized [CNInstantMessageAddress](../cninstantmessageaddress.md) object with the specified user name and service.

<a id="Discussion"></a>

## Discussion

User name and service are required to initialize [CNInstantMessageAddress](../cninstantmessageaddress.md) object.
