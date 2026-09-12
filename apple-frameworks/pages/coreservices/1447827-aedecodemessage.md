> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447827-aedecodemessage](https://developer.apple.com/documentation/coreservices/1447827-aedecodemessage)

# AEDecodeMessage(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Decodes a Mach message and converts it into an Apple event and its related reply.

## Declaration

```swift
func AEDecodeMessage(_ header: UnsafeMutablePointer<mach_msg_header_t>!, _ event: UnsafeMutablePointer<AppleEvent>!, _ reply: UnsafeMutablePointer<AppleEvent>!) -> OSStatus
```

## Parameters

- `header`: A pointer to a Mach message header for the event to be decoded.
- `event`: A pointer to a null Apple event descriptor (one with descriptor type `typeNull`). On successful completion, contains the decoded Apple event. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.
- `reply`: A pointer to a null Apple event descriptor. On successful completion, contains the reply event from the decoded Apple event. To send the reply, you use the following:

  <a id="2555989"></a>

  **Listing 1**

  ```occ
  AESendMessage(reply, NULL, kAENoReply, kAEDefaultTimeout);
  ```

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The Apple Event Manager provides the following functions (in macOS only) for working with Apple events at a lower level: [AEGetRegisteredMachPort()](1449736-aegetregisteredmachport.md), `AEDecodeMessage`, [AESendMessage(\_:\_:\_:\_:)](1442994-aesendmessage.md), and [AEProcessMessage(\_:)](1444387-aeprocessmessage.md). See the descriptions for those functions for more information on when you might use them.

## See Also

### Working With Lower Level Apple Event Functions

- [AEGetRegisteredMachPort()](1449736-aegetregisteredmachport.md): Returns the Mach port (in the form of a `mach_port_t`) that was registered with the bootstrap server for this process.
- [AESendMessage(\_:\_:\_:\_:)](1442994-aesendmessage.md): Sends an AppleEvent to a target process without some of the overhead required by `AESend`.
- [AEProcessMessage(\_:)](1444387-aeprocessmessage.md): Decodes and dispatches a low level Mach message event to an event handler, including packaging and returning the reply to the sender.

# AEDecodeMessage (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Decodes a Mach message and converts it into an Apple event and its related reply.

## Declaration

```objectivec
OSStatus AEDecodeMessage(mach_msg_header_t *header, AppleEvent *event, AppleEvent *reply);
```

## Parameters

- `header`: A pointer to a Mach message header for the event to be decoded.
- `event`: A pointer to a null Apple event descriptor (one with descriptor type `typeNull`). On successful completion, contains the decoded Apple event. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting descriptor after it has finished using it.
- `reply`: A pointer to a null Apple event descriptor. On successful completion, contains the reply event from the decoded Apple event. To send the reply, you use the following:

  <a id="2555989"></a>

  **Listing 1**

  ```occ
  AESendMessage(reply, NULL, kAENoReply, kAEDefaultTimeout);
  ```

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The Apple Event Manager provides the following functions (in macOS only) for working with Apple events at a lower level: [AEGetRegisteredMachPort](1449736-aegetregisteredmachport.md), `AEDecodeMessage`, [AESendMessage](1442994-aesendmessage.md), and [AEProcessMessage](1444387-aeprocessmessage.md). See the descriptions for those functions for more information on when you might use them.

## See Also

### Working With Lower Level Apple Event Functions

- [AEGetRegisteredMachPort](1449736-aegetregisteredmachport.md): Returns the Mach port (in the form of a `mach_port_t`) that was registered with the bootstrap server for this process.
- [AESendMessage](1442994-aesendmessage.md): Sends an AppleEvent to a target process without some of the overhead required by `AESend`.
- [AEProcessMessage](1444387-aeprocessmessage.md): Decodes and dispatches a low level Mach message event to an event handler, including packaging and returning the reply to the sender.
