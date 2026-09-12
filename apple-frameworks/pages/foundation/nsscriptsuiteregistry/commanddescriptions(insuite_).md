> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/commanddescriptions(insuite:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/commanddescriptions(insuite:))

# commandDescriptions(inSuite:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the command descriptions contained in the suite identified by `suiteName`.

## Declaration

```swift
func commandDescriptions(inSuite suiteName: String) -> [String : NSScriptCommandDescription]?
```

<a id="Discussion"></a>

## Discussion

Each command description (instance of [NSScriptCommandDescription](../nsscriptcommanddescription.md)) in the returned dictionary is identified by command name.

## See Also

### Getting and Registering Command Descriptions

- [commandDescription(withAppleEventClass:andAppleEventCode:)](commanddescription%28withappleeventclass_andappleeventcode_%29.md): Returns the command description identified by a suite’s four-character Apple event code of the class (`eventClass`) and the four-character Apple event code of the command (`commandCode`).
- [register(\_:)](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

# commandDescriptionsInSuite: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the command descriptions contained in the suite identified by `suiteName`.

## Declaration

```objectivec
- (NSDictionary<NSString *,NSScriptCommandDescription *> *) commandDescriptionsInSuite:(NSString *) suiteName;
```

<a id="Discussion"></a>

## Discussion

Each command description (instance of [NSScriptCommandDescription](../nsscriptcommanddescription.md)) in the returned dictionary is identified by command name.

## See Also

### Getting and Registering Command Descriptions

- [commandDescriptionWithAppleEventClass:andAppleEventCode:](commanddescription%28withappleeventclass_andappleeventcode_%29.md): Returns the command description identified by a suite’s four-character Apple event code of the class (`eventClass`) and the four-character Apple event code of the command (`commandCode`).
- [registerCommandDescription:](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.
