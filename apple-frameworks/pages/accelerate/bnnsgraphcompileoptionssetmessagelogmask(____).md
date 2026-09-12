> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcompileoptionssetmessagelogmask(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssetmessagelogmask(_:_:))

# BNNSGraphCompileOptionsSetMessageLogMask(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the mask for compile-time messages.

## Declaration

```swift
func BNNSGraphCompileOptionsSetMessageLogMask(_ options: bnns_graph_compile_options_t, _ log_level_mask: UInt32)
```

## Parameters

- `options`: The compilation options object.
- `log_level_mask`: The bit mask of levels that BNNS logs.

<a id="Discussion"></a>

## Discussion

The default log mask is [BNNSGraphMessageLevelUnsupported](bnnsgraphmessagelevelunsupported.md) | [BNNSGraphMessageLevelWarning](bnnsgraphmessagelevelwarning.md) | [BNNSGraphMessageLevelError](bnnsgraphmessagelevelerror.md).

The following code adds a custom graph compile-message callback function that prints [BNNSGraphMessageLevelInfo](bnnsgraphmessagelevelinfo.md) level messages to the console:

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

- [BNNSGraphContextSetMessageLogMask(\_:\_:)](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

# BNNSGraphCompileOptionsSetMessageLogMask (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the mask for compile-time messages.

## Declaration

```objectivec
void BNNSGraphCompileOptionsSetMessageLogMask(bnns_graph_compile_options_t options, uint32_t log_level_mask);
```

## Parameters

- `options`: The compilation options object.
- `log_level_mask`: The bit mask of levels that BNNS logs.

<a id="Discussion"></a>

## Discussion

The default log mask is [BNNSGraphMessageLevelUnsupported](bnnsgraphmessagelevelunsupported.md) | [BNNSGraphMessageLevelWarning](bnnsgraphmessagelevelwarning.md) | [BNNSGraphMessageLevelError](bnnsgraphmessagelevelerror.md).

The following code adds a custom graph compile-message callback function that prints [BNNSGraphMessageLevelInfo](bnnsgraphmessagelevelinfo.md) level messages to the console:

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

- [BNNSGraphContextSetMessageLogMask](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.
