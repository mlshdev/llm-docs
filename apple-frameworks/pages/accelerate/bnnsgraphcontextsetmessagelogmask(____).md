> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextsetmessagelogmask(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextsetmessagelogmask(_:_:))

# BNNSGraphContextSetMessageLogMask(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets mask for log messages that are logged (either via `os_log` or the user specified callback)

## Declaration

```swift
func BNNSGraphContextSetMessageLogMask(_ context: bnns_graph_context_t, _ log_level_mask: UInt32) -> Int32
```

<a id="discussion"></a>

## Discussion

- `context`: context to set callbacks for
- `log_level_mask`: bitmask of levels to log for (Default is BNNSGraphMessageLevelUnsupported | BNNSGraphMessageLevelWarning | BNNSGraphMessageLevelError)

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask(\_:\_:)](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

# BNNSGraphContextSetMessageLogMask (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets mask for log messages that are logged (either via `os_log` or the user specified callback)

## Declaration

```objectivec
int BNNSGraphContextSetMessageLogMask(bnns_graph_context_t context, uint32_t log_level_mask);
```

<a id="discussion"></a>

## Discussion

- `context`: context to set callbacks for
- `log_level_mask`: bitmask of levels to log for (Default is BNNSGraphMessageLevelUnsupported | BNNSGraphMessageLevelWarning | BNNSGraphMessageLevelError)

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.
