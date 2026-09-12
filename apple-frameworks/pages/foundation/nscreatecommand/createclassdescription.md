> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscreatecommand/createclassdescription](https://developer.apple.com/documentation/foundation/nscreatecommand/createclassdescription)

# createClassDescription (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description for the class that is to be created.

## Declaration

```swift
var createClassDescription: NSScriptClassDescription { get }
```

<a id="return-value"></a>

## Return Value

The class description for the class that is to be created.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Getting information about a create command

- [resolvedKeyDictionary](resolvedkeydictionary.md): Returns a dictionary that contains the properties that were specified in the `make` Apple event command that has been converted to this `NSCreateCommand` object.

# createClassDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description for the class that is to be created.

## Declaration

```objectivec
@property (retain, readonly) NSScriptClassDescription * createClassDescription;
```

<a id="return-value"></a>

## Return Value

The class description for the class that is to be created.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Getting information about a create command

- [resolvedKeyDictionary](resolvedkeydictionary.md): Returns a dictionary that contains the properties that were specified in the `make` Apple event command that has been converted to this `NSCreateCommand` object.
