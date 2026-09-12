> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscript/injectiontime](https://developer.apple.com/documentation/webkit/wkuserscript/injectiontime)

# injectionTime (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The time at which to inject the script into the webpage.

## Declaration

```swift
var injectionTime: WKUserScriptInjectionTime { get }
```

<a id="Discussion"></a>

## Discussion

The value is one of the constants of the enumerated type [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md).

## See Also

### Inspecting Script Information

- [source](source.md): The script’s source code.
- [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
- [isForMainFrameOnly](isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.

# injectionTime (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The time at which to inject the script into the webpage.

## Declaration

```objectivec
@property (nonatomic, readonly) WKUserScriptInjectionTime injectionTime;
```

<a id="Discussion"></a>

## Discussion

The value is one of the constants of the enumerated type [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md).

## See Also

### Inspecting Script Information

- [source](source.md): The script’s source code.
- [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
- [forMainFrameOnly](isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.
