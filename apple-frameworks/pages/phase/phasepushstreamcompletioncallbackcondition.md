> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamcompletioncallbackcondition](https://developer.apple.com/documentation/phase/phasepushstreamcompletioncallbackcondition)

# PHASEPushStreamCompletionCallbackCondition (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A status that describes the results after the app schedules a push-stream buffer.

## Declaration

```swift
enum PHASEPushStreamCompletionCallbackCondition
```

<a id="overview"></a>

## Overview

A [PHASEPushStreamNode](phasepushstreamnode.md) object provides an instance of this class to the completion closure after the app schedules a buffer by calling [scheduleBuffer(buffer:completionCallbackType:completionHandler:)](phasepushstreamnode/schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md).

## Topics

### Conditions

- [PHASEPushStreamCompletionCallbackCondition.dataRendered](phasepushstreamcompletioncallbackcondition/datarendered.md): Indicates the framework invokes the callback when the engine processes the audio for output.

### Initializers

- [init(rawValue:)](phasepushstreamcompletioncallbackcondition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing Audio Data

- [scheduleBuffer(buffer:)](phasepushstreamnode/schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer(buffer:time:options:)](phasepushstreamnode/schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer(buffer:time:options:completionCallbackType:completionHandler:)](phasepushstreamnode/schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer(buffer:completionCallbackType:completionHandler:)](phasepushstreamnode/schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.

# PHASEPushStreamCompletionCallbackCondition (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A status that describes the results after the app schedules a push-stream buffer.

## Declaration

```objectivec
enum PHASEPushStreamCompletionCallbackCondition : NSInteger;
```

<a id="overview"></a>

## Overview

A [PHASEPushStreamNode](phasepushstreamnode.md) object provides an instance of this class to the completion closure after the app schedules a buffer by calling [scheduleBuffer:completionCallbackType:completionHandler:](phasepushstreamnode/schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md).

## Topics

### Conditions

- [PHASEPushStreamCompletionDataRendered](phasepushstreamcompletioncallbackcondition/datarendered.md): Indicates the framework invokes the callback when the engine processes the audio for output.

## See Also

### Providing Audio Data

- [scheduleBuffer:](phasepushstreamnode/schedulebuffer%28buffer_%29.md): Schedules audio data for playback.
- [scheduleBuffer:atTime:options:](phasepushstreamnode/schedulebuffer%28buffer_time_options_%29.md): Schedules audio data playback at a specific time.
- [scheduleBuffer:atTime:options:completionCallbackType:completionHandler:](phasepushstreamnode/schedulebuffer%28buffer_time_options_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback at a specific time with a completion handler.
- [scheduleBuffer:completionCallbackType:completionHandler:](phasepushstreamnode/schedulebuffer%28buffer_completioncallbacktype_completionhandler_%29.md): Schedules audio data playback with a completion handler.
