> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscriptinjectiontime](https://developer.apple.com/documentation/webkit/wkuserscriptinjectiontime)

# WKUserScriptInjectionTime (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Constants for the times at which to inject script content into a webpage.

## Declaration

```swift
enum WKUserScriptInjectionTime
```

## Topics

### Script-Injection Times

- [WKUserScriptInjectionTime.atDocumentStart](wkuserscriptinjectiontime/atdocumentstart.md): A constant to inject the script after the creation of the webpage’s document element, but before loading any other content.
- [WKUserScriptInjectionTime.atDocumentEnd](wkuserscriptinjectiontime/atdocumentend.md): A constant to inject the script after the document finishes loading, but before loading any other subresources.

### Initializers

- [init(rawValue:)](wkuserscriptinjectiontime/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Script Information

- [source](wkuserscript/source.md): The script’s source code.
- [injectionTime](wkuserscript/injectiontime.md): The time at which to inject the script into the webpage.
- [isForMainFrameOnly](wkuserscript/isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.

# WKUserScriptInjectionTime (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Constants for the times at which to inject script content into a webpage.

## Declaration

```objectivec
enum WKUserScriptInjectionTime : NSInteger;
```

## Topics

### Script-Injection Times

- [WKUserScriptInjectionTimeAtDocumentStart](wkuserscriptinjectiontime/atdocumentstart.md): A constant to inject the script after the creation of the webpage’s document element, but before loading any other content.
- [WKUserScriptInjectionTimeAtDocumentEnd](wkuserscriptinjectiontime/atdocumentend.md): A constant to inject the script after the document finishes loading, but before loading any other subresources.

## See Also

### Inspecting Script Information

- [source](wkuserscript/source.md): The script’s source code.
- [injectionTime](wkuserscript/injectiontime.md): The time at which to inject the script into the webpage.
- [forMainFrameOnly](wkuserscript/isformainframeonly.md): A Boolean value that indicates whether to inject the script into the main frame or all frames.
