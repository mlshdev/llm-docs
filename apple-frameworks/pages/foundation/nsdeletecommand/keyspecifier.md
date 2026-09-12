> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdeletecommand/keyspecifier](https://developer.apple.com/documentation/foundation/nsdeletecommand/keyspecifier)

# keySpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier for the object or objects to be deleted.

## Declaration

```swift
var keySpecifier: NSScriptObjectSpecifier { get }
```

<a id="return-value"></a>

## Return Value

A specifier for the object or objects to be deleted.

<a id="Discussion"></a>

## Discussion

Note that this may be different than the specifier or specifiers set by [setReceiversSpecifier(\_:)](setreceiversspecifier%28__%29.md).

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

### Working with specifiers

- [setReceiversSpecifier(\_:)](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.

# keySpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier for the object or objects to be deleted.

## Declaration

```objectivec
@property (retain, readonly) NSScriptObjectSpecifier * keySpecifier;
```

<a id="return-value"></a>

## Return Value

A specifier for the object or objects to be deleted.

<a id="Discussion"></a>

## Discussion

Note that this may be different than the specifier or specifiers set by [setReceiversSpecifier:](setreceiversspecifier%28__%29.md).

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

### Working with specifiers

- [setReceiversSpecifier:](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier.
