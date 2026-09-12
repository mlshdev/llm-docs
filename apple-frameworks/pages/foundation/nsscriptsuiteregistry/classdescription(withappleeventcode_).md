> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/classdescription(withappleeventcode:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/classdescription(withappleeventcode:))

# classDescription(withAppleEventCode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description associated with the given four-character Apple event code, `code`.

## Declaration

```swift
func classDescription(withAppleEventCode appleEventCode: FourCharCode) -> NSScriptClassDescription?
```

<a id="Discussion"></a>

## Discussion

Overriding behavior is important here. Multiple classes can have the same code if the classes have an uninterrupted linear inheritance from one another. For example, if class B is a subclass of A and class C is a subclass of B, and all three classes have the same four-character Apple event code, then this method returns the class description for class C.

## See Also

### Getting and Registering Class Descriptions

- [classDescriptions(inSuite:)](classdescriptions%28insuite_%29.md): Returns the class descriptions contained in the suite identified by `suiteName`.
- [register(\_:)](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.

# classDescriptionWithAppleEventCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description associated with the given four-character Apple event code, `code`.

## Declaration

```objectivec
- (NSScriptClassDescription *) classDescriptionWithAppleEventCode:(FourCharCode) appleEventCode;
```

<a id="Discussion"></a>

## Discussion

Overriding behavior is important here. Multiple classes can have the same code if the classes have an uninterrupted linear inheritance from one another. For example, if class B is a subclass of A and class C is a subclass of B, and all three classes have the same four-character Apple event code, then this method returns the class description for class C.

## See Also

### Getting and Registering Class Descriptions

- [classDescriptionsInSuite:](classdescriptions%28insuite_%29.md): Returns the class descriptions contained in the suite identified by `suiteName`.
- [registerClassDescription:](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.
