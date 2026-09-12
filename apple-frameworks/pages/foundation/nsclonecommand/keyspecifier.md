> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclonecommand/keyspecifier](https://developer.apple.com/documentation/foundation/nsclonecommand/keyspecifier)

# keySpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier for the object or objects to be cloned.

## Declaration

```swift
var keySpecifier: NSScriptObjectSpecifier { get }
```

<a id="return-value"></a>

## Return Value

A specifier for the object or objects to be cloned.

<a id="Discussion"></a>

## Discussion

For example, the specifier may indicate that a document’s third rectangle should be cloned. The returned specifier is valid only in the context of the `NSCloneCommand` object; for example, if you send the specifier a [container](../nsscriptobjectspecifier/container.md) message, the result is `nil`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Working with specifiers

- [setReceiversSpecifier(\_:)](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier;.

# keySpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier for the object or objects to be cloned.

## Declaration

```objectivec
@property (retain, readonly) NSScriptObjectSpecifier * keySpecifier;
```

<a id="return-value"></a>

## Return Value

A specifier for the object or objects to be cloned.

<a id="Discussion"></a>

## Discussion

For example, the specifier may indicate that a document’s third rectangle should be cloned. The returned specifier is valid only in the context of the `NSCloneCommand` object; for example, if you send the specifier a [containerSpecifier](../nsscriptobjectspecifier/container.md) message, the result is `nil`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Working with specifiers

- [setReceiversSpecifier:](setreceiversspecifier%28__%29.md): Sets the receiver’s object specifier;.
