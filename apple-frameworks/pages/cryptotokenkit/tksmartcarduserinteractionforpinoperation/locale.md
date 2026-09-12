> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/locale](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/locale)

# locale (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The locale for the displayed messages. If `nil`, the user’s current locale is used. By default, this value is the current locale of the system.

## Declaration

```swift
var locale: Locale! { get set }
```

## See Also

### Configuring Messages

- [pinMessageIndices](pinmessageindices.md): A list of message indices referring to a predefined message table, used to specify the type and number of messages displayed during the PIN operation. `nil` by default.

# locale (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The locale for the displayed messages. If `nil`, the user’s current locale is used. By default, this value is the current locale of the system.

## Declaration

```objectivec
@property (null_resettable) NSLocale * locale;
```

## See Also

### Configuring Messages

- [PINMessageIndices](pinmessageindices.md): A list of message indices referring to a predefined message table, used to specify the type and number of messages displayed during the PIN operation. `nil` by default.
