> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swhighlightpersistenceevent/init(highlight:trigger:)

# init(highlight:trigger:) (Swift)

**Framework:** Shared with You  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a persistence event.

## Declaration

```swift
init(highlight: SWHighlight, trigger: SWHighlightPersistenceEventTrigger)
```

## Parameters

- `highlight`: The related hightlight for the event.
- `trigger`: The trigger persistence event for the highlight.

# initWithHighlight:trigger: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a persistence event.

## Declaration

```objectivec
- (instancetype) initWithHighlight:(SWHighlight *) highlight trigger:(SWHighlightPersistenceEventTrigger) trigger;
```

## Parameters

- `highlight`: The related hightlight for the event.
- `trigger`: The trigger persistence event for the highlight.
