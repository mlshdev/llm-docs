> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/burnprogresspanelwillbegin(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/burnprogresspanelwillbegin(_:))

# burnProgressPanelWillBegin(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel before display.

## Declaration

```swift
func burnProgressPanelWillBegin(_ aNotification: Notification!)
```

## Parameters

- `aNotification`: Always `DRBurnProgressPanelDidFinishNotification`

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message immediately before the panel is displayed.

# burnProgressPanelWillBegin: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel before display.

## Declaration

```objectivec
- (void) burnProgressPanelWillBegin:(NSNotification *) aNotification;
```

## Parameters

- `aNotification`: Always `DRBurnProgressPanelDidFinishNotification`

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message immediately before the panel is displayed.
