> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsquitcommand/saveoptions](https://developer.apple.com/documentation/foundation/nsquitcommand/saveoptions)

# saveOptions (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a constant indicating how to deal with closing any modified documents.

## Declaration

```swift
var saveOptions: NSSaveOptions { get }
```

<a id="return-value"></a>

## Return Value

A constant indicating how to deal with closing any modified documents. The default value returned is `NSSaveOptionsAsk`. See “Constants” in [NSCloseCommand](../nsclosecommand.md) for a list of possible return values.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# saveOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a constant indicating how to deal with closing any modified documents.

## Declaration

```objectivec
@property (readonly) NSSaveOptions saveOptions;
```

<a id="return-value"></a>

## Return Value

A constant indicating how to deal with closing any modified documents. The default value returned is `NSSaveOptionsAsk`. See “Constants” in [NSCloseCommand](../nsclosecommand.md) for a list of possible return values.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
