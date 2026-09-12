> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/defaultbackgroundconfiguration()](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/defaultbackgroundconfiguration())

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

A default background configuration. The system determines default values for the configuration according to the section where the view appears.

## See Also

### Configuring the background

- [backgroundConfiguration](backgroundconfiguration-52wng.md): The current background configuration of the view.
- [automaticallyUpdatesBackgroundConfiguration](automaticallyupdatesbackgroundconfiguration.md): A Boolean value that determines whether the view automatically updates its background configuration when its state changes.
- [backgroundView](backgroundview.md): The background view of the header or footer.
