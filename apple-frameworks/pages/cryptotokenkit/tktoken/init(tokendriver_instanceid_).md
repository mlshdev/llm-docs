> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/init(tokendriver:instanceid:)](https://developer.apple.com/documentation/cryptotokenkit/tktoken/init(tokendriver:instanceid:))

# init(tokenDriver:instanceID:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token with the driver you specify.

## Declaration

```swift
init(tokenDriver: TKTokenDriver, instanceID: TKToken.InstanceID)
```

## Parameters

- `tokenDriver`: The driver of the token.
- `instanceID`: A unique, persistent identifier for this token. This value is typically generated from the serial number of the target hardware.

<a id="return-value"></a>

## Return Value

A new token object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating Tokens

- [TKToken.InstanceID](instanceid.md): A type that represents the instance identifier of a token.

# initWithTokenDriver:instanceID: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a token with the driver you specify.

## Declaration

```objectivec
- (instancetype) initWithTokenDriver:(TKTokenDriver *) tokenDriver instanceID:(TKTokenInstanceID) instanceID;
```

## Parameters

- `tokenDriver`: The driver of the token.
- `instanceID`: A unique, persistent identifier for this token. This value is typically generated from the serial number of the target hardware.

<a id="return-value"></a>

## Return Value

A new token object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating Tokens

- [TKTokenInstanceID](instanceid.md): A type that represents the instance identifier of a token.
