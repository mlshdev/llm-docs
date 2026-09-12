> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/easession/init(accessory:forprotocol:)](https://developer.apple.com/documentation/externalaccessory/easession/init(accessory:forprotocol:))

# init(accessory:forProtocol:) (Swift)

**Framework:** External Accessory  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes the session for the specified accessory and protocol.

## Declaration

```swift
init?(accessory: EAAccessory, forProtocol protocolString: String)
```

## Parameters

- `accessory`: The accessory with which you want to communicate. You can get a list of accessory objects from the [EAAccessoryManager](../eaaccessorymanager.md) object.
- `protocolString`: The protocol to use when communicating with the accessory. This protocol must be one that the accessory understands. All communications with the accessory are expected to use this protocol.

<a id="return-value"></a>

## Return Value

The initialized session object. This method may return `nil` if the accessory does not recognize the specified protocol or there was an error communicating with the accessory.

<a id="Discussion"></a>

## Discussion

There can be only one session object at a time for a given accessory and protocol combination.

# initWithAccessory:forProtocol: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes the session for the specified accessory and protocol.

## Declaration

```objectivec
- (instancetype) initWithAccessory:(EAAccessory *) accessory forProtocol:(NSString *) protocolString;
```

## Parameters

- `accessory`: The accessory with which you want to communicate. You can get a list of accessory objects from the [EAAccessoryManager](../eaaccessorymanager.md) object.
- `protocolString`: The protocol to use when communicating with the accessory. This protocol must be one that the accessory understands. All communications with the accessory are expected to use this protocol.

<a id="return-value"></a>

## Return Value

The initialized session object. This method may return `nil` if the accessory does not recognize the specified protocol or there was an error communicating with the accessory.

<a id="Discussion"></a>

## Discussion

There can be only one session object at a time for a given accessory and protocol combination.
