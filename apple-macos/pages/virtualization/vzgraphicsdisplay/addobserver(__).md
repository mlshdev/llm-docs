> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplay/addobserver(_:)](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplay/addobserver(_:))

# addObserver(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Adds an observer to notify about display configuration changes.

## Declaration

```swift
func addObserver(_ observer: any VZGraphicsDisplayObserver)
```

## Parameters

- `observer`: The new observer the framework notifies about display configuration changes.

## See Also

### Observing changes to the display configuration

- [removeObserver(\_:)](removeobserver%28__%29.md): Removes a display configuration change observer.
- [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md): A protocol you implement to observe state changes in graphic displays.

# addObserver: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Adds an observer to notify about display configuration changes.

## Declaration

```objectivec
- (void) addObserver:(id<VZGraphicsDisplayObserver>) observer;
```

## Parameters

- `observer`: The new observer the framework notifies about display configuration changes.

## See Also

### Observing changes to the display configuration

- [removeObserver:](removeobserver%28__%29.md): Removes a display configuration change observer.
- [VZGraphicsDisplayObserver](../vzgraphicsdisplayobserver.md): A protocol you implement to observe state changes in graphic displays.
