> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpseekcommandevent/type

# type (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The type of seek command event.

## Declaration

```swift
var type: MPSeekCommandEventType { get }
```

<a id="Discussion"></a>

## Discussion

The `type` property declares if a seek command is beginning or ending.

# type (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The type of seek command event.

## Declaration

```objectivec
@property (nonatomic, readonly) MPSeekCommandEventType type;
```

<a id="Discussion"></a>

## Discussion

The `type` property declares if a seek command is beginning or ending.
