> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcell/defaultbackgroundconfiguration()](https://developer.apple.com/documentation/uikit/uicollectionviewcell/defaultbackgroundconfiguration())

# defaultBackgroundConfiguration()

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS

Retrieves a background configuration with system default values.

## Declaration

```swift
@MainActor @preconcurrency func defaultBackgroundConfiguration() -> UIBackgroundConfiguration
```

<a id="return-value"></a>

## Return Value

A default background configuration. The system determines default values for the configuration according to the section where the cell appears.

## See Also

### Configuring the background

- [backgroundConfiguration](backgroundconfiguration-rgj4.md): The current background configuration of the cell.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the cell automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The view that displays behind the cell’s other content.
- [selectedBackgroundView](selectedbackgroundview.md): The view that displays just above the background view for a selected cell.
