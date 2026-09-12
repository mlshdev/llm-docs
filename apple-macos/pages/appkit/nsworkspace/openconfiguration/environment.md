> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/environment](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/environment)

# environment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The set of environment variables to set in a new app instance.

## Declaration

```swift
var environment: [String : String] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty dictionary. When launching a new instance of an app, use this property to specify the key/value pairs for any environment variables.

If the calling process is sandboxed, the system ignores the value of this property.

## See Also

### Specifying launch attributes

- [appleEvent](appleevent.md): The first Apple event to send to the new app.
- [arguments](arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [architecture](architecture.md): The architecture version of the app to launch.

# environment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The set of environment variables to set in a new app instance.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,NSString *> * environment;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty dictionary. When launching a new instance of an app, use this property to specify the key/value pairs for any environment variables.

If the calling process is sandboxed, the system ignores the value of this property.

## See Also

### Specifying launch attributes

- [appleEvent](appleevent.md): The first Apple event to send to the new app.
- [arguments](arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [architecture](architecture.md): The architecture version of the app to launch.
