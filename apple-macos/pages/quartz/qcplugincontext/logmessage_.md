> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext/logmessage:](https://developer.apple.com/documentation/quartz/qcplugincontext/logmessage:)

# logMessage:

**Interface language:** Objective-C

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Writes a message to the Quartz Composer log.

## Declaration

```objectivec
- (void) logMessage:(NSString *) format;
```

## Parameters

- `format`: The string to write to the log. The default location for the log is the standard output.

<a id="Discussion"></a>

## Discussion

This method is an alternative to using the functions [NSLog(\_:\_:)](https://developer.apple.com/documentation/foundation/nslog%28_:_:%29) or `printf`.
