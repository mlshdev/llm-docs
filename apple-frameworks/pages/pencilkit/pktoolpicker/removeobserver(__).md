> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/removeobserver(_:)](https://developer.apple.com/documentation/pencilkit/pktoolpicker/removeobserver(_:))

# removeObserver(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes the specified object from the list of objects to notify when the picker configuration changes.

## Declaration

```swift
func removeObserver(_ observer: any PKToolPickerObserver)
```

## Parameters

- `observer`: The object to stop sending notifications to.

## See Also

### Detecting changes to the picker

- [addObserver(\_:)](addobserver%28__%29.md): Adds the specified object to the list of objects to notify when the picker configuration changes.
- [PKToolPickerObserver](../pktoolpickerobserver.md): An interface you use to detect when the user changes the selected tools and drawing characteristics of a tool picker object.

# removeObserver: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes the specified object from the list of objects to notify when the picker configuration changes.

## Declaration

```objectivec
- (void) removeObserver:(id<PKToolPickerObserver>) observer;
```

## Parameters

- `observer`: The object to stop sending notifications to.

## See Also

### Detecting changes to the picker

- [addObserver:](addobserver%28__%29.md): Adds the specified object to the list of objects to notify when the picker configuration changes.
- [PKToolPickerObserver](../pktoolpickerobserver.md): An interface you use to detect when the user changes the selected tools and drawing characteristics of a tool picker object.
