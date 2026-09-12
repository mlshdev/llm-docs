> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscript/source](https://developer.apple.com/documentation/webkit/wkuserscript/source)

# source (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The script’s source code.

## Declaration

```swift
var source: String { get }
```

## See Also

### Inspecting Script Information

- [injectionTime](injectiontime.md): The time at which to inject the script into the webpage.
- [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
- [isForMainFrameOnly](isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.

# source (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The script’s source code.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * source;
```

## See Also

### Inspecting Script Information

- [injectionTime](injectiontime.md): The time at which to inject the script into the webpage.
- [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
- [forMainFrameOnly](isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.
