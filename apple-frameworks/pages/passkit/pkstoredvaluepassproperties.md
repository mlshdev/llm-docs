> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassproperties](https://developer.apple.com/documentation/passkit/pkstoredvaluepassproperties)

# PKStoredValuePassProperties (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.

## Declaration

```swift
class PKStoredValuePassProperties
```

## Topics

### Creating a stored-value pass properties object

- [init(for:)](pkstoredvaluepassproperties/init%28for_%29.md): Creates a stored-value pass properties object for the specified pass.

### Reading the stored-value pass properties

- [balances](pkstoredvaluepassproperties/balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [expirationDate](pkstoredvaluepassproperties/expirationdate.md): The expiration date of a pass.
- [isBlocked](pkstoredvaluepassproperties/isblocked.md): A Boolean value that indicates the pass issuer disabled a stored-value pass.
- [isBlacklisted](pkstoredvaluepassproperties/isblacklisted.md): Deprecated. A Boolean value that indicates the pass issuer disabled a stored-value pass.

### Initializers

- [init(forPass:)](pkstoredvaluepassproperties/init%28forpass_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKTransitPassProperties](pktransitpassproperties.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Stored-value passes

- [PKTransitPassProperties](pktransitpassproperties.md): The properties of a transit pass.
- [PKSuicaPassProperties](pksuicapassproperties.md): The properties of a pass used as a ticket for the Suica transportation system.
- [PKStoredValuePassBalance](pkstoredvaluepassbalance.md): An object that represents a balance that’s available for transactions, such as points or money.

# PKStoredValuePassProperties (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.

## Declaration

```objectivec
@interface PKStoredValuePassProperties : NSObject
```

## Topics

### Creating a stored-value pass properties object

- [passPropertiesForPass:](pkstoredvaluepassproperties/init%28for_%29.md): Creates a stored-value pass properties object for the specified pass.

### Reading the stored-value pass properties

- [balances](pkstoredvaluepassproperties/balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [expirationDate](pkstoredvaluepassproperties/expirationdate.md): The expiration date of a pass.
- [blocked](pkstoredvaluepassproperties/blocked.md): A Boolean value that indicates the pass issuer disabled a stored-value pass.
- [blacklisted](pkstoredvaluepassproperties/isblacklisted.md): Deprecated. A Boolean value that indicates the pass issuer disabled a stored-value pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKTransitPassProperties](pktransitpassproperties.md)

## See Also

### Stored-value passes

- [PKTransitPassProperties](pktransitpassproperties.md): The properties of a transit pass.
- [PKSuicaPassProperties](pksuicapassproperties.md): The properties of a pass used as a ticket for the Suica transportation system.
- [PKStoredValuePassBalance](pkstoredvaluepassbalance.md): An object that represents a balance that’s available for transactions, such as points or money.
