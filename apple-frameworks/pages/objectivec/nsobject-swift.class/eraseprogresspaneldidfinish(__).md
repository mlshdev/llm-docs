> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/eraseprogresspaneldidfinish(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/eraseprogresspaneldidfinish(_:))

# eraseProgressPanelDidFinish(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel after ordering out.

## Declaration

```swift
func eraseProgressPanelDidFinish(_ aNotification: Notification!)
```

## Parameters

- `aNotification`: Always `DREraseProgressPanelDidFinishNotification` You can retrieve the `DREraseProgressPanel` object in question by sending [object](../../foundation/nsnotification/object.md) to `aNotification`.

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message after the panel is removed from display.

# eraseProgressPanelDidFinish: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Notification sent by the panel after ordering out.

## Declaration

```objectivec
- (void) eraseProgressPanelDidFinish:(NSNotification *) aNotification;
```

## Parameters

- `aNotification`: Always `DREraseProgressPanelDidFinishNotification` You can retrieve the `DREraseProgressPanel` object in question by sending [object](../../foundation/nsnotification/object.md) to `aNotification`.

<a id="discussion"></a>

## Discussion

If the delegate implements this method it will receive the message after the panel is removed from display.
