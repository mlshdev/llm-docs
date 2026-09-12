> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/setshared(_:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/setshared(_:))

# setShared(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the single, shared instance of `NSScriptSuiteRegistry` to `registry`.

## Declaration

```swift
class func setShared(_ registry: NSScriptSuiteRegistry)
```

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Getting and Setting the Shared Instance

- [shared()](shared%28%29.md): Returns the single, shared instance of `NSScriptSuiteRegistry`, creating it first if it doesn’t exist.

# setSharedScriptSuiteRegistry: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the single, shared instance of `NSScriptSuiteRegistry` to `registry`.

## Declaration

```objectivec
+ (void) setSharedScriptSuiteRegistry:(NSScriptSuiteRegistry *) registry;
```

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Getting and Setting the Shared Instance

- [sharedScriptSuiteRegistry](shared%28%29.md): Returns the single, shared instance of `NSScriptSuiteRegistry`, creating it first if it doesn’t exist.
