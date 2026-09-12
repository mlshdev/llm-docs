> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/register(_:)-5mq91](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/register(_:)-5mq91)

# register(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

## Declaration

```swift
func register(_ commandDescription: NSScriptCommandDescription)
```

<a id="Discussion"></a>

## Discussion

Also registers with the single, shared instance of [NSAppleEventManager](../nsappleeventmanager.md) to handle incoming Apple events that should be handled by the command.

## See Also

### Related Documentation

- [register(\_:)](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.
- [loadSuite(with:from:)](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

### Getting and Registering Command Descriptions

- [commandDescriptions(inSuite:)](commanddescriptions%28insuite_%29.md): Returns the command descriptions contained in the suite identified by `suiteName`.
- [commandDescription(withAppleEventClass:andAppleEventCode:)](commanddescription%28withappleeventclass_andappleeventcode_%29.md): Returns the command description identified by a suite’s four-character Apple event code of the class (`eventClass`) and the four-character Apple event code of the command (`commandCode`).

# registerCommandDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

## Declaration

```objectivec
- (void) registerCommandDescription:(NSScriptCommandDescription *) commandDescription;
```

<a id="Discussion"></a>

## Discussion

Also registers with the single, shared instance of [NSAppleEventManager](../nsappleeventmanager.md) to handle incoming Apple events that should be handled by the command.

## See Also

### Related Documentation

- [registerClassDescription:](register%28__%29-9aplw.md): Registers class description `classDescription` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the class name.
- [loadSuiteWithDictionary:fromBundle:](loadsuite%28with_from_%29.md): Loads the suite definition encapsulated in `dictionary`; previously, this suite definition was parsed from a `.scriptSuite` property list contained in a framework or in `bundle`.

### Getting and Registering Command Descriptions

- [commandDescriptionsInSuite:](commanddescriptions%28insuite_%29.md): Returns the command descriptions contained in the suite identified by `suiteName`.
- [commandDescriptionWithAppleEventClass:andAppleEventCode:](commanddescription%28withappleeventclass_andappleeventcode_%29.md): Returns the command description identified by a suite’s four-character Apple event code of the class (`eventClass`) and the four-character Apple event code of the command (`commandCode`).
