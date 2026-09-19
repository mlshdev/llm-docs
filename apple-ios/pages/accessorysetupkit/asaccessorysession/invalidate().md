> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/invalidate()

# invalidate() (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Invalidate the session by stopping any operations.

## Declaration

```swift
func invalidate()
```

<a id="discussion"></a>

## Discussion

This call breaks any retain cycles. The session is unusable after calling `invalidate`.

## See Also

### Managing the session life cycle

- [activate(on:eventHandler:)](activate%28on_eventhandler_%29.md): Activate the session and start delivering events to an event handler.

# invalidate (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Invalidate the session by stopping any operations.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="discussion"></a>

## Discussion

This call breaks any retain cycles. The session is unusable after calling `invalidate`.

## See Also

### Managing the session life cycle

- [activateWithQueue:eventHandler:](activate%28on_eventhandler_%29.md): Activate the session and start delivering events to an event handler.
