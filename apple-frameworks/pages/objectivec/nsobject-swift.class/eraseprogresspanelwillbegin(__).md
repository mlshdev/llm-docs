> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/eraseprogresspanelwillbegin(_:)

# eraseProgressPanelWillBegin(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel before display.

## Declaration

```swift
func eraseProgressPanelWillBegin(_ aNotification: Notification!)
```

## Parameters

- `aNotification`: Always `DREraseProgressPanelWillBeginNotification` You can retrieve the `DREraseProgressPanel` object in question by sending [object](../../foundation/nsnotification/object.md) to `aNotification`.

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message immediately before the panel is displayed.

# eraseProgressPanelWillBegin: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel before display.

## Declaration

```objectivec
- (void) eraseProgressPanelWillBegin:(NSNotification *) aNotification;
```

## Parameters

- `aNotification`: Always `DREraseProgressPanelWillBeginNotification` You can retrieve the `DREraseProgressPanel` object in question by sending [object](../../foundation/nsnotification/object.md) to `aNotification`.

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message immediately before the panel is displayed.
