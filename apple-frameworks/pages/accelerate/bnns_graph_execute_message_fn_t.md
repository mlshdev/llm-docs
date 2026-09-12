> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_execute_message_fn_t](https://developer.apple.com/documentation/accelerate/bnns_graph_execute_message_fn_t)

# bnns_graph_execute_message_fn_t (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The graph execute-message logging callback function.

## Declaration

```swift
typealias bnns_graph_execute_message_fn_t = (BNNSGraphMessageLevel, UnsafePointer<CChar>, UnsafePointer<CChar>?, UnsafeMutablePointer<bnns_user_message_data_t>?) -> Void
```

## See Also

### Specifying a context’s execute-time message callback

- [BNNSGraphContextSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcontextsetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports execution-time messages.
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

# bnns_graph_execute_message_fn_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The graph execute-message logging callback function.

## Declaration

```objectivec
typedef void (*)(BNNSGraphMessageLevel, const char *, const char *, bnns_user_message_data_t *) bnns_graph_execute_message_fn_t;
```

## See Also

### Specifying a context’s execute-time message callback

- [BNNSGraphContextSetMessageLogCallback](bnnsgraphcontextsetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports execution-time messages.
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.
