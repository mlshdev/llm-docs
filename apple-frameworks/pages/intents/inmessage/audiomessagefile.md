> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/audiomessagefile](https://developer.apple.com/documentation/intents/inmessage/audiomessagefile)

# audioMessageFile (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 10.0)

An audio recording that Siri plays to the message recipient.

> Use attachmentFile instead

## Declaration

```swift
@NSCopying var audioMessageFile: INFile? { get }
```

## See Also

### Getting the Content

- [content](content.md): The text that Siri recites to the message recipient.

# audioMessageFile (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.0+ (deprecated in 10.0)

An audio recording that Siri plays to the message recipient.

> Use attachmentFile instead

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INFile * audioMessageFile;
```

```objectivec
@property (atomic, copy, readonly, nullable) INFile * audioMessageFile;
```

## See Also

### Getting the Content

- [content](content.md): The text that Siri recites to the message recipient.
