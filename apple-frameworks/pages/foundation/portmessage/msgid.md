> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/portmessage/msgid](https://developer.apple.com/documentation/foundation/portmessage/msgid)

# msgid (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the identifier for the receiver.

## Declaration

```swift
var msgid: UInt32 { get set }
```

<a id="return-value"></a>

## Return Value

The identifier for the receiver.

<a id="Discussion"></a>

## Discussion

Cooperating applications can use this to define different types of messages, such as connection requests, RPCs, errors, and so on.

# msgid (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the identifier for the receiver.

## Declaration

```objectivec
@property uint32_t msgid;
```

<a id="return-value"></a>

## Return Value

The identifier for the receiver.

<a id="Discussion"></a>

## Discussion

Cooperating applications can use this to define different types of messages, such as connection requests, RPCs, errors, and so on.
