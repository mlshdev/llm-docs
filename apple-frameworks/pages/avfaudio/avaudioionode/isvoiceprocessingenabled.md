> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioionode/isvoiceprocessingenabled

# isVoiceProcessingEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether voice processing is in an enabled state.

## Declaration

```swift
var isVoiceProcessingEnabled: Bool { get }
```

## See Also

### Getting and Setting the Voice Processing State

- [setVoiceProcessingEnabled(\_:)](setvoiceprocessingenabled%28__%29.md): Enables or disables voice processing on the I/O node.

# voiceProcessingEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether voice processing is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVoiceProcessingEnabled) BOOL voiceProcessingEnabled;
```

## See Also

### Getting and Setting the Voice Processing State

- [setVoiceProcessingEnabled:error:](setvoiceprocessingenabled%28__%29.md): Enables or disables voice processing on the I/O node.
