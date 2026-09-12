> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscript/isformainframeonly](https://developer.apple.com/documentation/webkit/wkuserscript/isformainframeonly)

# isForMainFrameOnly (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether to inject the script into the main frame or all frames.

## Declaration

```swift
var isForMainFrameOnly: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the web view injects the script only into the main frame. When the value is [false](https://developer.apple.com/documentation/swift/false), the web view injects the script into all frames.

## See Also

### Inspecting Script Information

- [source](source.md): The script’s source code.
- [injectionTime](injectiontime.md): The time at which to inject the script into the webpage.
- [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.

# forMainFrameOnly (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether to inject the script into the main frame or all frames.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isForMainFrameOnly) BOOL forMainFrameOnly;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the web view injects the script only into the main frame. When the value is [false](https://developer.apple.com/documentation/swift/false), the web view injects the script into all frames.

## See Also

### Inspecting Script Information

- [source](source.md): The script’s source code.
- [injectionTime](injectiontime.md): The time at which to inject the script into the webpage.
- [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md): Constants for the times at which to inject script content into a webpage.
