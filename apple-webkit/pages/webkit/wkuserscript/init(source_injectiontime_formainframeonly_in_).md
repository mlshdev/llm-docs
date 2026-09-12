> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkuserscript/init(source:injectiontime:formainframeonly:in:)](https://developer.apple.com/documentation/webkit/wkuserscript/init(source:injectiontime:formainframeonly:in:))

# init(source:injectionTime:forMainFrameOnly:in:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a user script object that is scoped to a particular content world.

## Declaration

```swift
init(source: String, injectionTime: WKUserScriptInjectionTime, forMainFrameOnly: Bool, in contentWorld: WKContentWorld)
```

## Parameters

- `source`: The script’s source code.
- `injectionTime`: The time at which to inject the script into the webpage. For a list of possible values, see [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md).
- `forMainFrameOnly`: A Boolean value that indicates whether to inject the script into the main frame. Specify [true](https://developer.apple.com/documentation/swift/true) to inject the script only into the main frame, or [false](https://developer.apple.com/documentation/swift/false) to inject it into all frames.
- `contentWorld`: The namespace in which to evaluate the script. This parameter doesn’t apply to changes your script makes to the underlying web content, such as the document’s DOM structure. Those changes remain visible to all scripts, regardless of which content world you specify. For more information about content worlds, see [WKContentWorld](../wkcontentworld.md).

<a id="return-value"></a>

## Return Value

An initialized user script, or `nil` if initialization failed.

## See Also

### Creating a User Script Object

- [init(source:injectionTime:forMainFrameOnly:)](init%28source_injectiontime_formainframeonly_%29.md): Creates a user script object that contains the specified source code and attributes.

# initWithSource:injectionTime:forMainFrameOnly:inContentWorld: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a user script object that is scoped to a particular content world.

## Declaration

```objectivec
- (instancetype) initWithSource:(NSString *) source injectionTime:(WKUserScriptInjectionTime) injectionTime forMainFrameOnly:(BOOL) forMainFrameOnly inContentWorld:(WKContentWorld *) contentWorld;
```

## Parameters

- `source`: The script’s source code.
- `injectionTime`: The time at which to inject the script into the webpage. For a list of possible values, see [WKUserScriptInjectionTime](../wkuserscriptinjectiontime.md).
- `forMainFrameOnly`: A Boolean value that indicates whether to inject the script into the main frame. Specify [true](https://developer.apple.com/documentation/swift/true) to inject the script only into the main frame, or [false](https://developer.apple.com/documentation/swift/false) to inject it into all frames.
- `contentWorld`: The namespace in which to evaluate the script. This parameter doesn’t apply to changes your script makes to the underlying web content, such as the document’s DOM structure. Those changes remain visible to all scripts, regardless of which content world you specify. For more information about content worlds, see [WKContentWorld](../wkcontentworld.md).

<a id="return-value"></a>

## Return Value

An initialized user script, or `nil` if initialization failed.

## See Also

### Creating a User Script Object

- [initWithSource:injectionTime:forMainFrameOnly:](init%28source_injectiontime_formainframeonly_%29.md): Creates a user script object that contains the specified source code and attributes.
