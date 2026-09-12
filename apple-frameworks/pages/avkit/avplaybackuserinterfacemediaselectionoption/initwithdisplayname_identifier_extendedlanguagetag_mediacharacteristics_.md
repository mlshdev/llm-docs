> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectionoption/initwithdisplayname:identifier:extendedlanguagetag:mediacharacteristics:](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectionoption/initwithdisplayname:identifier:extendedlanguagetag:mediacharacteristics:)

# initWithDisplayName:identifier:extendedLanguageTag:mediaCharacteristics:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new media selection option with the specified attributes.

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) displayName identifier:(NSString *) identifier extendedLanguageTag:(NSString *) extendedLanguageTag mediaCharacteristics:(NSArray<NSString *> *) mediaCharacteristics;
```

## Parameters

- `displayName`: Human-readable name displayed in user interfaces.
- `identifier`: Unique system identifier for programmatic selection.
- `extendedLanguageTag`: IETF BCP 47 language identifier, or `nil` for language-neutral content.
- `mediaCharacteristics`: The media characteristics describing accessibility features and content properties of this option.
