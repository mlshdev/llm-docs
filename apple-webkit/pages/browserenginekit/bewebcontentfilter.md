> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter)

# BEWebContentFilter (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+

An object that represents a web content filter.

## Declaration

```swift
class BEWebContentFilter
```

## Topics

### Managing URL blocking

- [allow(\_:completionHandler:)](bewebcontentfilter/allow%28__completionhandler_%29.md): Adds a previously blocked URL to the web content filter’s allow list.

### Evaluating URLs

- [evaluateURL(\_:completionHandler:)](bewebcontentfilter/evaluateurl%28__completionhandler_%29.md): Determines whether to block a URL.
- [shouldEvaluateURLs](bewebcontentfilter/shouldevaluateurls.md): Determines whether the built-in web content filter is active.

### Instance Methods

- [evaluateURL(\_:mainFrameURL:isMainFrame:completionHandler:)](bewebcontentfilter/evaluateurl%28__mainframeurl_ismainframe_completionhandler_%29.md)
- [requestPermission(for:referrerURL:presenting:completionHandler:)](bewebcontentfilter/requestpermission%28for_referrerurl_presenting_completionhandler_%29.md)

### Enumerations

- [BEWebContentFilter.PermissionDecision](bewebcontentfilter/permissiondecision.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Extension capabilities

- [ProcessCapability](processcapability.md): Capabilities of a helper extension process.
- [BEProcessCapability](beprocesscapability-76ijx.md): Capabilities of a helper extension process.
- [MediaEnvironment](mediaenvironment.md): An object that identifies a media playback or streaming environment.
- [BEMediaEnvironment](bemediaenvironment-15xci.md): An object that identifies a media playback or streaming environment.
- [RenderingExtensionFeature](renderingextensionfeature.md): Features of a rendering extension.

# BEWebContentFilter (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+

An object that represents a web content filter.

## Declaration

```objectivec
@interface BEWebContentFilter : NSObject
```

## Topics

### Managing URL blocking

- [allowURL:completionHandler:](bewebcontentfilter/allow%28__completionhandler_%29.md): Adds a previously blocked URL to the web content filter’s allow list.

### Evaluating URLs

- [evaluateURL:completionHandler:](bewebcontentfilter/evaluateurl%28__completionhandler_%29.md): Determines whether to block a URL.
- [shouldEvaluateURLs](bewebcontentfilter/shouldevaluateurls.md): Determines whether the built-in web content filter is active.

### Instance Methods

- [evaluateURL:mainFrameURL:isMainFrame:completionHandler:](bewebcontentfilter/evaluateurl%28__mainframeurl_ismainframe_completionhandler_%29.md)
- [requestPermissionForURL:referrerURL:presentingView:completionHandler:](bewebcontentfilter/requestpermission%28for_referrerurl_presenting_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Extension capabilities

- [BEProcessCapability](beprocesscapability-7av05.md): Capabilities of a helper extension process.
- [BEMediaEnvironment](bemediaenvironment-n91a.md): An object that identifies a media playback or streaming environment.
- [BEProcessCapabilityGrant](beprocesscapabilitygrant.md): An object that represents a granted capability.
