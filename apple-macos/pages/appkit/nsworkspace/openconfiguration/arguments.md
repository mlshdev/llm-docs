> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/arguments](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/arguments)

# arguments (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The set of command-line arguments to pass to a new app instance at launch time.

## Declaration

```swift
var arguments: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. When launching a new instance of an app, use this property to specify any additional launch arguments. The system inserts the app’s path as the first element in the array.

If the calling process is sandboxed, the system ignores the value of this property.

## See Also

### Specifying launch attributes

- [appleEvent](appleevent.md): The first Apple event to send to the new app.
- [environment](environment.md): The set of environment variables to set in a new app instance.
- [architecture](architecture.md): The architecture version of the app to launch.

# arguments (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The set of command-line arguments to pass to a new app instance at launch time.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * arguments;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. When launching a new instance of an app, use this property to specify any additional launch arguments. The system inserts the app’s path as the first element in the array.

If the calling process is sandboxed, the system ignores the value of this property.

## See Also

### Specifying launch attributes

- [appleEvent](appleevent.md): The first Apple event to send to the new app.
- [environment](environment.md): The set of environment variables to set in a new app instance.
- [architecture](architecture.md): The architecture version of the app to launch.
