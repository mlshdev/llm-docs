> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplay/removeobserver(_:)](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplay/removeobserver(_:))

# removeObserver(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Removes a display configuration change observer.

## Declaration

```swift
func removeObserver(_ observer: any VZGraphicsDisplayObserver)
```

## Parameters

- `observer`: The observer to remove from notifications about display configuration changes.

## See Also

### Observing changes to the display configuration

- [addObserver(\_:)](addobserver%28__%29.md): Adds an observer to notify about display configuration changes.
- [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md): A protocol you implement to observe state changes in graphic displays.

# removeObserver: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Removes a display configuration change observer.

## Declaration

```objectivec
- (void) removeObserver:(id<VZGraphicsDisplayObserver>) observer;
```

## Parameters

- `observer`: The observer to remove from notifications about display configuration changes.

## See Also

### Observing changes to the display configuration

- [addObserver:](addobserver%28__%29.md): Adds an observer to notify about display configuration changes.
- [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md): A protocol you implement to observe state changes in graphic displays.
