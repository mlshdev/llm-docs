> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/pinmessageindices](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractionforpinoperation/pinmessageindices)

# pinMessageIndices (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of message indices referring to a predefined message table, used to specify the type and number of messages displayed during the PIN operation. `nil` by default.

## Declaration

```swift
var pinMessageIndices: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the reader does not display any message (reader specific). Typically, PIN verification takes 1 message; PIN modification takes 1 – 3 messages.

## See Also

### Configuring Messages

- [locale](locale.md): The locale for the displayed messages. If `nil`, the user’s current locale is used. By default, this value is the current locale of the system.

# PINMessageIndices (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of message indices referring to a predefined message table, used to specify the type and number of messages displayed during the PIN operation. `nil` by default.

## Declaration

```objectivec
@property (nullable) NSArray<NSNumber *> * PINMessageIndices;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the reader does not display any message (reader specific). Typically, PIN verification takes 1 message; PIN modification takes 1 – 3 messages.

## See Also

### Configuring Messages

- [locale](locale.md): The locale for the displayed messages. If `nil`, the user’s current locale is used. By default, this value is the current locale of the system.
