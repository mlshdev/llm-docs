> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/addobserver(_:)](https://developer.apple.com/documentation/pencilkit/pktoolpicker/addobserver(_:))

# addObserver(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the specified object to the list of objects to notify when the picker configuration changes.

## Declaration

```swift
func addObserver(_ observer: any PKToolPickerObserver)
```

## Parameters

- `observer`: The object to notify when changes occur.

## See Also

### Detecting changes to the picker

- [removeObserver(\_:)](removeobserver%28__%29.md): Removes the specified object from the list of objects to notify when the picker configuration changes.
- [PKToolPickerObserver](../pktoolpickerobserver.md): An interface you use to detect when the user changes the selected tools and drawing characteristics of a tool picker object.

# addObserver: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the specified object to the list of objects to notify when the picker configuration changes.

## Declaration

```objectivec
- (void) addObserver:(id<PKToolPickerObserver>) observer;
```

## Parameters

- `observer`: The object to notify when changes occur.

## See Also

### Detecting changes to the picker

- [removeObserver:](removeobserver%28__%29.md): Removes the specified object from the list of objects to notify when the picker configuration changes.
- [PKToolPickerObserver](../pktoolpickerobserver.md): An interface you use to detect when the user changes the selected tools and drawing characteristics of a tool picker object.
