> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/architecture](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/architecture)

# architecture (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The architecture version of the app to launch.

## Declaration

```swift
var architecture: cpu_type_t { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `CPU_TYPE_ANY`, which causes the system to launch the app’s preferred architecture. You may specify a different value to force the system to launch that architecture. For a list of possible types, see the `<mach/machine.h>` header file.

## See Also

### Specifying launch attributes

- [appleEvent](appleevent.md): The first Apple event to send to the new app.
- [arguments](arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [environment](environment.md): The set of environment variables to set in a new app instance.

# architecture (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The architecture version of the app to launch.

## Declaration

```objectivec
@property cpu_type_t architecture;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `CPU_TYPE_ANY`, which causes the system to launch the app’s preferred architecture. You may specify a different value to force the system to launch that architecture. For a list of possible types, see the `<mach/machine.h>` header file.

## See Also

### Specifying launch attributes

- [appleEvent](appleevent.md): The first Apple event to send to the new app.
- [arguments](arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [environment](environment.md): The set of environment variables to set in a new app instance.
