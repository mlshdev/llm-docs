> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/commanddelimiterkey/suffix

# suffix (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The command delimiter string that suffixes a command,by default, this is `]]`.

## Declaration

```swift
static let suffix: NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey
```

## See Also

### Delimiter Keys

- [prefix](prefix.md): The command delimiter string that prefixes a command, by default, this is `[[`.

# NSSpeechCommandSuffix (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The command delimiter string that suffixes a command,by default, this is `]]`.

## Declaration

```objectivec
extern NSSpeechCommandDelimiterKey const NSSpeechCommandSuffix;
```

## See Also

### Delimiter Keys

- [NSSpeechCommandPrefix](prefix.md): The command delimiter string that prefixes a command, by default, this is `[[`.
