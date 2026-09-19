> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/speechxtnddata/1462619-synthcreator

# synthCreator (Swift)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The synthesizer’s creator ID, identical to the value stored in the `synthManufacturer` field of a speech version information structure. You should set this field to the appropriate value before calling `GetSpeechInfo` or `SetSpeechInfo`.

## Declaration

```swift
var synthCreator: OSType
```

# synthCreator (Objective-C)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The synthesizer’s creator ID, identical to the value stored in the `synthManufacturer` field of a speech version information structure. You should set this field to the appropriate value before calling `GetSpeechInfo` or `SetSpeechInfo`.

## Declaration

```objectivec
OSType synthCreator;
```
