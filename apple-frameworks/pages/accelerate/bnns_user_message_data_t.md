> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_user_message_data_t](https://developer.apple.com/documentation/accelerate/bnns_user_message_data_t)

# bnns_user_message_data_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Additional user-defined logging argument for message-logging callbacks.

## Declaration

```swift
struct bnns_user_message_data_t
```

## Topics

### Initializers

- [init()](bnns_user_message_data_t/init%28%29.md)
- [init(size:data:)](bnns_user_message_data_t/init%28size_data_%29.md): Creates a logging argument structure from the pointer to the additional logging data.

### Instance Properties

- [data](bnns_user_message_data_t/data.md): A pointer to the additional logging data.
- [size](bnns_user_message_data_t/size.md): The size of the additional logging data.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask(\_:\_:)](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask(\_:\_:)](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.

# bnns_user_message_data_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Additional user-defined logging argument for message-logging callbacks.

## Declaration

```objectivec
typedef struct { ... } bnns_user_message_data_t;
```

## Topics

### Instance Properties

- [data](bnns_user_message_data_t/data.md): A pointer to the additional logging data.
- [size](bnns_user_message_data_t/size.md): The size of the additional logging data.

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
