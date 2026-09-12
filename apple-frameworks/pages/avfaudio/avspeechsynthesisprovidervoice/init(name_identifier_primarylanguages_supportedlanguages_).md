> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovidervoice/init(name:identifier:primarylanguages:supportedlanguages:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovidervoice/init(name:identifier:primarylanguages:supportedlanguages:))

# init(name:identifier:primaryLanguages:supportedLanguages:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a voice with a name, an identifier, and language information.

## Declaration

```swift
init(name: String, identifier: String, primaryLanguages: [String], supportedLanguages: [String])
```

## Parameters

- `name`: The localized name of the voice.
- `identifier`: The unique identifier for the voice.
- `primaryLanguages`: A list of BCP 47 codes that identify the primary languages.
- `supportedLanguages`: A list of BCP 47 codes that identify the languages the voice supports.

# initWithName:identifier:primaryLanguages:supportedLanguages: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a voice with a name, an identifier, and language information.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name identifier:(NSString *) identifier primaryLanguages:(NSArray<NSString *> *) primaryLanguages supportedLanguages:(NSArray<NSString *> *) supportedLanguages;
```

## Parameters

- `name`: The localized name of the voice.
- `identifier`: The unique identifier for the voice.
- `primaryLanguages`: A list of BCP 47 codes that identify the primary languages.
- `supportedLanguages`: A list of BCP 47 codes that identify the languages the voice supports.
