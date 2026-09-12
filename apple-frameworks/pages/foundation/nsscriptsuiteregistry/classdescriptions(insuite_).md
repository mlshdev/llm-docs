> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/classdescriptions(insuite:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/classdescriptions(insuite:))

# classDescriptions(inSuite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class descriptions contained in the suite identified by `suiteName`.

## Declaration

```swift
func classDescriptions(inSuite suiteName: String) -> [String : NSScriptClassDescription]?
```

<a id="Discussion"></a>

## Discussion

Each class description (instance of [NSScriptClassDescription](../nsscriptclassdescription.md)) in the returned dictionary is identified by class name.

## See Also

### Getting and Registering Class Descriptions

- [classDescription(withAppleEventCode:)](classdescription%28withappleeventcode_%29.md): Returns the class description associated with the given four-character Apple event code, `code`.
- [register(\_:)](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.

# classDescriptionsInSuite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class descriptions contained in the suite identified by `suiteName`.

## Declaration

```objectivec
- (NSDictionary<NSString *,NSScriptClassDescription *> *) classDescriptionsInSuite:(NSString *) suiteName;
```

<a id="Discussion"></a>

## Discussion

Each class description (instance of [NSScriptClassDescription](../nsscriptclassdescription.md)) in the returned dictionary is identified by class name.

## See Also

### Getting and Registering Class Descriptions

- [classDescriptionWithAppleEventCode:](classdescription%28withappleeventcode_%29.md): Returns the class description associated with the given four-character Apple event code, `code`.
- [registerClassDescription:](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.
