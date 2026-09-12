> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacemediaselectionoptionsource/initwithdisplayname:identifier:extendedlanguagetag:](https://developer.apple.com/documentation/avkit/avinterfacemediaselectionoptionsource/initwithdisplayname:identifier:extendedlanguagetag:)

# initWithDisplayName:identifier:extendedLanguageTag:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method

Initializes a new media selection option with the specified attributes.

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) displayName identifier:(NSString *) identifier extendedLanguageTag:(NSString *) extendedLanguageTag;
```

## Parameters

- `displayName`: Human-readable name displayed in user interfaces.
- `identifier`: Unique system identifier for programmatic selection.
- `extendedLanguageTag`: IETF BCP 47 language identifier, or nil for language-neutral content.
