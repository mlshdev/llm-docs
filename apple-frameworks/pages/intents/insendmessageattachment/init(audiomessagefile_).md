> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendmessageattachment/init(audiomessagefile:)

# init(audioMessageFile:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a message attachment with an audio file.

## Declaration

```swift
init(audioMessageFile: INFile)
```

## Parameters

- `audioMessageFile`: An audio recording.

# attachmentWithAudioMessageFile: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a message attachment with an audio file.

## Declaration

```objectivec
+ (INSendMessageAttachment *) attachmentWithAudioMessageFile:(INFile *) audioMessageFile;
```

## Parameters

- `audioMessageFile`: An audio recording.
