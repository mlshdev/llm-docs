> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scrunningapplication/processid](https://developer.apple.com/documentation/screencapturekit/scrunningapplication/processid)

# processID (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The system process identifier of the app.

## Declaration

```swift
var processID: pid_t { get }
```

## See Also

### Inspecting an app

- [bundleIdentifier](bundleidentifier.md): The unique bundle identifier of the app.
- [applicationName](applicationname.md): The display name of the app.

# processID (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The system process identifier of the app.

## Declaration

```objectivec
@property (readonly) pid_t processID;
```

## See Also

### Inspecting an app

- [bundleIdentifier](bundleidentifier.md): The unique bundle identifier of the app.
- [applicationName](applicationname.md): The display name of the app.
