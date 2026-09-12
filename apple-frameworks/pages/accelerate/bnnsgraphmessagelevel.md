> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphmessagelevel](https://developer.apple.com/documentation/accelerate/bnnsgraphmessagelevel)

# BNNSGraphMessageLevel (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the mask for compile-time messages.

## Declaration

```swift
struct BNNSGraphMessageLevel
```

## Topics

### Graph message levels

- [init(\_:)](bnnsgraphmessagelevel/init%28__%29.md): Creates a new instance.
- [init(rawValue:)](bnnsgraphmessagelevel/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance properties

- [rawValue](bnnsgraphmessagelevel/rawvalue.md): The corresponding value of the raw type.
- [BNNSGraphMessageLevelInfo](bnnsgraphmessagelevelinfo.md): A constant that specifies information message types.
- [BNNSGraphMessageLevelWarning](bnnsgraphmessagelevelwarning.md): A constant that specifies warning message types.
- [BNNSGraphMessageLevelError](bnnsgraphmessagelevelerror.md): A constant that specifies error message types.
- [BNNSGraphMessageLevelUnsupported](bnnsgraphmessagelevelunsupported.md): A constant that specifies unsupported function message types.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask(\_:\_:)](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask(\_:\_:)](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphCompileOptionsSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

# BNNSGraphMessageLevel (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the mask for compile-time messages.

## Declaration

```objectivec
typedef enum { ... } BNNSGraphMessageLevel;
```

## Topics

### Instance properties

- [BNNSGraphMessageLevelInfo](bnnsgraphmessagelevelinfo.md): A constant that specifies information message types.
- [BNNSGraphMessageLevelWarning](bnnsgraphmessagelevelwarning.md): A constant that specifies warning message types.
- [BNNSGraphMessageLevelError](bnnsgraphmessagelevelerror.md): A constant that specifies error message types.
- [BNNSGraphMessageLevelUnsupported](bnnsgraphmessagelevelunsupported.md): A constant that specifies unsupported function message types.

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphCompileOptionsSetMessageLogCallback](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.
