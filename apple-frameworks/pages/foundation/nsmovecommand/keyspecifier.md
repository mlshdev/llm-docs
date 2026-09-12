> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmovecommand/keyspecifier](https://developer.apple.com/documentation/foundation/nsmovecommand/keyspecifier)

# keySpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier for the object or objects to be moved.

## Declaration

```swift
var keySpecifier: NSScriptObjectSpecifier { get }
```

<a id="return-value"></a>

## Return Value

A specifier for the object or objects to be moved.

<a id="Discussion"></a>

## Discussion

Note that this specifier may be different than the specifier set by [setReceiversSpecifier(\_:)](setreceiversspecifier%28__%29.md), which sets the container specifier. For example, for a command such as `move the third circle to the location of the first circle`, the receiver might identify a document (which has a list of graphics), while the key specifier identifies the particular graphic to be moved.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Working with specifiers

- [setReceiversSpecifier(\_:)](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

# keySpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier for the object or objects to be moved.

## Declaration

```objectivec
@property (retain, readonly) NSScriptObjectSpecifier * keySpecifier;
```

<a id="return-value"></a>

## Return Value

A specifier for the object or objects to be moved.

<a id="Discussion"></a>

## Discussion

Note that this specifier may be different than the specifier set by [setReceiversSpecifier:](setreceiversspecifier%28__%29.md), which sets the container specifier. For example, for a command such as `move the third circle to the location of the first circle`, the receiver might identify a document (which has a list of graphics), while the key specifier identifies the particular graphic to be moved.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Working with specifiers

- [setReceiversSpecifier:](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.
