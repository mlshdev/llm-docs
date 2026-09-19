> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/commanddelimiterkey/prefix

# prefix (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The command delimiter string that prefixes a command, by default, this is `[[`.

## Declaration

```swift
static let prefix: NSSpeechSynthesizer.SpeechPropertyKey.CommandDelimiterKey
```

## See Also

### Delimiter Keys

- [suffix](suffix.md): The command delimiter string that suffixes a command,by default, this is `]]`.

# NSSpeechCommandPrefix (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The command delimiter string that prefixes a command, by default, this is `[[`.

## Declaration

```objectivec
extern NSSpeechCommandDelimiterKey const NSSpeechCommandPrefix;
```

## See Also

### Delimiter Keys

- [NSSpeechCommandSuffix](suffix.md): The command delimiter string that suffixes a command,by default, this is `]]`.
