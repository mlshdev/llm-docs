> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioionode/setvoiceprocessingenabled(_:)](https://developer.apple.com/documentation/avfaudio/avaudioionode/setvoiceprocessingenabled(_:))

# setVoiceProcessingEnabled(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Enables or disables voice processing on the I/O node.

## Declaration

```swift
func setVoiceProcessingEnabled(_ enabled: Bool) throws
```

## Parameters

- `enabled`: The Boolean value that indicates whether to enable voice processing.

## See Also

### Getting and Setting the Voice Processing State

- [isVoiceProcessingEnabled](isvoiceprocessingenabled.md): A Boolean value that indicates whether voice processing is in an enabled state.

# setVoiceProcessingEnabled:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Enables or disables voice processing on the I/O node.

## Declaration

```objectivec
- (BOOL) setVoiceProcessingEnabled:(BOOL) enabled error:(NSError **) outError;
```

## Parameters

- `enabled`: The Boolean value that indicates whether to enable voice processing.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

## See Also

### Getting and Setting the Voice Processing State

- [voiceProcessingEnabled](isvoiceprocessingenabled.md): A Boolean value that indicates whether voice processing is in an enabled state.
