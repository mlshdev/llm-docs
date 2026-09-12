> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptsuiteregistry/commanddescription(withappleeventclass:andappleeventcode:)](https://developer.apple.com/documentation/foundation/nsscriptsuiteregistry/commanddescription(withappleeventclass:andappleeventcode:))

# commandDescription(withAppleEventClass:andAppleEventCode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the command description identified by a suite’s four-character Apple event code of the class (`eventClass`) and the four-character Apple event code of the command (`commandCode`).

## Declaration

```swift
func commandDescription(withAppleEventClass appleEventClassCode: FourCharCode, andAppleEventCode appleEventIDCode: FourCharCode) -> NSScriptCommandDescription?
```

## See Also

### Getting and Registering Command Descriptions

- [commandDescriptions(inSuite:)](commanddescriptions%28insuite_%29.md): Returns the command descriptions contained in the suite identified by `suiteName`.
- [register(\_:)](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.

# commandDescriptionWithAppleEventClass:andAppleEventCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the command description identified by a suite’s four-character Apple event code of the class (`eventClass`) and the four-character Apple event code of the command (`commandCode`).

## Declaration

```objectivec
- (NSScriptCommandDescription *) commandDescriptionWithAppleEventClass:(FourCharCode) appleEventClassCode andAppleEventCode:(FourCharCode) appleEventIDCode;
```

## See Also

### Getting and Registering Command Descriptions

- [commandDescriptionsInSuite:](commanddescriptions%28insuite_%29.md): Returns the command descriptions contained in the suite identified by `suiteName`.
- [registerCommandDescription:](register%28__%29-5mq91.md): Registers command description `commandDesc` for use by Cocoa’s built-in scripting support by storing it in a per-suite internal dictionary under the command name.
