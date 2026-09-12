> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcompileoptionssetmessagelogcallback(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssetmessagelogcallback(_:_:_:))

# BNNSGraphCompileOptionsSetMessageLogCallback(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies a customized callback function that reports compile-time messages.

## Declaration

```swift
func BNNSGraphCompileOptionsSetMessageLogCallback(_ options: bnns_graph_compile_options_t, _ log_callback: bnns_graph_compile_message_fn_t, _ additional_logging_arguments: UnsafeMutablePointer<bnns_user_message_data_t>?)
```

## Parameters

- `options`: The compilation options object.
- `log_callback`: The message-logging callback function.
- `additional_logging_arguments`: Additional data for the message-logging functions that BNNS passes unaltered to the callback function.

<a id="Discussion"></a>

## Discussion

If you don’t specify this callback, default callback functions log messages to [os_log](../os/os_log.md).

The following code adds a custom graph compile message callback function that prints [BNNSGraphMessageLevelInfo](bnnsgraphmessagelevelinfo.md) level messages to the console:

```swift
let options = BNNSGraphCompileOptionsMakeDefault()
defer {
    BNNSGraphCompileOptionsDestroy(options)
}

BNNSGraphCompileOptionsSetMessageLogMask(options, BNNSGraphMessageLevelInfo.rawValue)
BNNSGraphCompileOptionsSetMessageLogCallback(options, messageLogCallback, nil)

func messageLogCallback(msg_level: BNNSGraphMessageLevel,
                        error_msg: UnsafePointer<CChar>,
                        source_location: UnsafePointer<CChar>?,
                        user_message_data_t:UnsafeMutablePointer<user_message_data_t>?) {
    
    print(NSString(cString: error_msg, encoding: NSUTF8StringEncoding) ?? "")
    if let source_location = source_location {
        print(NSString(cString: source_location, encoding: NSUTF8StringEncoding) ?? "")
    }
}
```

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask(\_:\_:)](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask(\_:\_:)](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

# BNNSGraphCompileOptionsSetMessageLogCallback (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies a customized callback function that reports compile-time messages.

## Declaration

```objectivec
void BNNSGraphCompileOptionsSetMessageLogCallback(bnns_graph_compile_options_t options, bnns_graph_compile_message_fn_t log_callback, bnns_user_message_data_t *additional_logging_arguments);
```

## Parameters

- `options`: The compilation options object.
- `log_callback`: The message-logging callback function.
- `additional_logging_arguments`: Additional data for the message-logging functions that BNNS passes unaltered to the callback function.

<a id="Discussion"></a>

## Discussion

If you don’t specify this callback, default callback functions log messages to [os_log](../os/os_log.md).

The following code adds a custom graph compile message callback function that prints [BNNSGraphMessageLevelInfo](bnnsgraphmessagelevelinfo.md) level messages to the console:

```swift
let options = BNNSGraphCompileOptionsMakeDefault()
defer {
    BNNSGraphCompileOptionsDestroy(options)
}

BNNSGraphCompileOptionsSetMessageLogMask(options, BNNSGraphMessageLevelInfo.rawValue)
BNNSGraphCompileOptionsSetMessageLogCallback(options, messageLogCallback, nil)

func messageLogCallback(msg_level: BNNSGraphMessageLevel,
                        error_msg: UnsafePointer<CChar>,
                        source_location: UnsafePointer<CChar>?,
                        user_message_data_t:UnsafeMutablePointer<user_message_data_t>?) {
    
    print(NSString(cString: error_msg, encoding: NSUTF8StringEncoding) ?? "")
    if let source_location = source_location {
        print(NSString(cString: source_location, encoding: NSUTF8StringEncoding) ?? "")
    }
}
```

## See Also

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.
