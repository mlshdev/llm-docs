> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewcontroller/cancelediting()](https://developer.apple.com/documentation/eventkitui/ekeventeditviewcontroller/cancelediting())

# cancelEditing() (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Ends the editing session and discards any changes that were made to the event.

## Declaration

```swift
func cancelEditing()
```

<a id="Discussion"></a>

## Discussion

This method is the programmatic equivalent of the user tapping Cancel. The delegate won’t receive the [eventEditViewController(\_:didCompleteWith:)](../ekeventeditviewdelegate/eventeditviewcontroller%28__didcompletewith_%29.md) message, so you must dismiss the controller after calling this method.

# cancelEditing (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Ends the editing session and discards any changes that were made to the event.

## Declaration

```objectivec
- (void) cancelEditing;
```

<a id="Discussion"></a>

## Discussion

This method is the programmatic equivalent of the user tapping Cancel. The delegate won’t receive the [eventEditViewController:didCompleteWithAction:](../ekeventeditviewdelegate/eventeditviewcontroller%28__didcompletewith_%29.md) message, so you must dismiss the controller after calling this method.
