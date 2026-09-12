> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssetcommand/keyspecifier](https://developer.apple.com/documentation/foundation/nssetcommand/keyspecifier)

# keySpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier that identifies the attribute or relationship that is to be set for the receiver of the `set` AppleScript command.

## Declaration

```swift
var keySpecifier: NSScriptObjectSpecifier { get }
```

<a id="return-value"></a>

## Return Value

A specifier that identifies the attribute or relationship that is to be set for the receiver of the `set` AppleScript command.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Working with specifiers

- [setReceiversSpecifier(\_:)](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

# keySpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier that identifies the attribute or relationship that is to be set for the receiver of the `set` AppleScript command.

## Declaration

```objectivec
@property (retain, readonly) NSScriptObjectSpecifier * keySpecifier;
```

<a id="return-value"></a>

## Return Value

A specifier that identifies the attribute or relationship that is to be set for the receiver of the `set` AppleScript command.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Working with specifiers

- [setReceiversSpecifier:](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.
