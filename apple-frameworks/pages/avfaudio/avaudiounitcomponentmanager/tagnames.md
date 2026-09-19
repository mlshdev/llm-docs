> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/tagnames

# tagNames (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of all tags the audio unit associates with the current user, and the system tags the audio units define.

## Declaration

```swift
var tagNames: [String] { get }
```

## See Also

### Getting audio unit tags

- [standardLocalizedTagNames](standardlocalizedtagnames.md): An array of the localized standard system tags the audio units define.

# tagNames (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of all tags the audio unit associates with the current user, and the system tags the audio units define.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * tagNames;
```

## See Also

### Getting audio unit tags

- [standardLocalizedTagNames](standardlocalizedtagnames.md): An array of the localized standard system tags the audio units define.
