> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/appleevent](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/appleevent)

# appleEvent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The first Apple event to send to the new app.

## Declaration

```swift
var appleEvent: NSAppleEventDescriptor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which causes the system to send a default Apple event, as needed. The system sends the event only if an instance of the app is already running.

## See Also

### Specifying launch attributes

- [arguments](arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [environment](environment.md): The set of environment variables to set in a new app instance.
- [architecture](architecture.md): The architecture version of the app to launch.

# appleEvent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The first Apple event to send to the new app.

## Declaration

```objectivec
@property (strong, nullable) NSAppleEventDescriptor * appleEvent;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which causes the system to send a default Apple event, as needed. The system sends the event only if an instance of the app is already running.

## See Also

### Specifying launch attributes

- [arguments](arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [environment](environment.md): The set of environment variables to set in a new app instance.
- [architecture](architecture.md): The architecture version of the app to launch.
