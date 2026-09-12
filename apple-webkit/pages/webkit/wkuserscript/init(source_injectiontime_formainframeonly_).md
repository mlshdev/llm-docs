> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscript/init(source:injectiontime:formainframeonly:)](https://developer.apple.com/documentation/webkit/wkuserscript/init(source:injectiontime:formainframeonly:))

# init(source:injectionTime:forMainFrameOnly:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Creates a user script object that contains the specified source code and attributes.

## Declaration

```swift
init(source: String, injectionTime: WKUserScriptInjectionTime, forMainFrameOnly: Bool)
```

## Parameters

- `source`: The script’s source code.
- `injectionTime`: The time at which to inject the script into the webpage. For a list of possible values, see [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md).
- `forMainFrameOnly`: A Boolean value that indicates whether to inject the script into the main frame. Specify [true](https://developer.apple.com/documentation/swift/true) to inject the script only into the main frame, or [false](https://developer.apple.com/documentation/swift/false) to inject it into all frames.

<a id="return-value"></a>

## Return Value

An initialized user script, or `nil` if initialization failed.

<a id="Discussion"></a>

## Discussion

This method sets the script’s content world to the object in the [page](../wkcontentworld/page.md) property of [WKContentWorld](../wkcontentworld.md).

## See Also

### Creating a User Script Object

- [init(source:injectionTime:forMainFrameOnly:in:)](init%28source_injectiontime_formainframeonly_in_%29.md): Creates a user script object that is scoped to a particular content world.

# initWithSource:injectionTime:forMainFrameOnly: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Creates a user script object that contains the specified source code and attributes.

## Declaration

```objectivec
- (instancetype) initWithSource:(NSString *) source injectionTime:(WKUserScriptInjectionTime) injectionTime forMainFrameOnly:(BOOL) forMainFrameOnly;
```

## Parameters

- `source`: The script’s source code.
- `injectionTime`: The time at which to inject the script into the webpage. For a list of possible values, see [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md).
- `forMainFrameOnly`: A Boolean value that indicates whether to inject the script into the main frame. Specify [true](https://developer.apple.com/documentation/swift/true) to inject the script only into the main frame, or [false](https://developer.apple.com/documentation/swift/false) to inject it into all frames.

<a id="return-value"></a>

## Return Value

An initialized user script, or `nil` if initialization failed.

<a id="Discussion"></a>

## Discussion

This method sets the script’s content world to the object in the [pageWorld](../wkcontentworld/page.md) property of [WKContentWorld](../wkcontentworld.md).

## See Also

### Creating a User Script Object

- [initWithSource:injectionTime:forMainFrameOnly:inContentWorld:](init%28source_injectiontime_formainframeonly_in_%29.md): Creates a user script object that is scoped to a particular content world.
