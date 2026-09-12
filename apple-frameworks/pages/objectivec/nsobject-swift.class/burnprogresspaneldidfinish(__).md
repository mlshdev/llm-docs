> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/burnprogresspaneldidfinish(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/burnprogresspaneldidfinish(_:))

# burnProgressPanelDidFinish(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel after ordering out.

## Declaration

```swift
func burnProgressPanelDidFinish(_ aNotification: Notification!)
```

## Parameters

- `aNotification`: Always `DRBurnProgressPanelDidFinishNotification`

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message after the panel is removed from display.

# burnProgressPanelDidFinish: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel after ordering out.

## Declaration

```objectivec
- (void) burnProgressPanelDidFinish:(NSNotification *) aNotification;
```

## Parameters

- `aNotification`: Always `DRBurnProgressPanelDidFinishNotification`

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message after the panel is removed from display.
