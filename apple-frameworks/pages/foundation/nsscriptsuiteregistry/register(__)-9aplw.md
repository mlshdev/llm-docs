> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/register(_:)-9aplw](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/register(_:)-9aplw)

# register(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.

## Declaration

```swift
func register(_ classDescription: NSScriptClassDescription)
```

## See Also

### Related Documentation

- [loadSuite(with:from:)](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.
- [register(\_:)](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

### Getting and Registering Class Descriptions

- [classDescriptions(inSuite:)](classdescriptions%28insuite_%29.md): Returns the class descriptions contained in the suite identified by `suiteName`.
- [classDescription(withAppleEventCode:)](classdescription%28withappleeventcode_%29.md): Returns the class description associated with the given four-character Apple event code, `code`.

# registerClassDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.

## Declaration

```objectivec
- (void) registerClassDescription:(NSScriptClassDescription *) classDescription;
```

## See Also

### Related Documentation

- [loadSuiteWithDictionary:fromBundle:](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.
- [registerCommandDescription:](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

### Getting and Registering Class Descriptions

- [classDescriptionsInSuite:](classdescriptions%28insuite_%29.md): Returns the class descriptions contained in the suite identified by `suiteName`.
- [classDescriptionWithAppleEventCode:](classdescription%28withappleeventcode_%29.md): Returns the class description associated with the given four-character Apple event code, `code`.
