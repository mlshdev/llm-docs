> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/init(processidentifier:)](https://developer.apple.com/documentation/scriptingbridge/sbapplication/init(processidentifier:))

# init(processIdentifier:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.

## Declaration

```swift
init?(processIdentifier pid: pid_t)
```

## Parameters

- `pid`: A BSD process ID specifying an application that is OSA-compliant. Often you can get the process ID of a process using the [processIdentifier](https://developer.apple.com/documentation/foundation/process/processidentifier) method of `NSTask`.

<a id="return-value"></a>

## Return Value

An initialized `SBApplication` that you can use to communicate with the target application specified by the process ID. Returns `nil` if no such application can be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

You should avoid using this method unless you know nothing about an external application but its PID. In most cases, it is better to use [init(bundleIdentifier:)](init%28bundleidentifier_%29.md), which will dynamically locate the external application’s path at runtime, or [init(url:)](init%28url_%29-6xbe5.md), which is not dependent on the external application being open at the time the method is called.

## See Also

### Initializing a Scriptable Application Object

- [init(bundleIdentifier:)](init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.
- [init(url:)](init%28url_%29-6xbe5.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.

# initWithProcessIdentifier: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.

## Declaration

```objectivec
- (SBApplication *) initWithProcessIdentifier:(pid_t) pid;
```

## Parameters

- `pid`: A BSD process ID specifying an application that is OSA-compliant. Often you can get the process ID of a process using the [processIdentifier](https://developer.apple.com/documentation/foundation/process/processidentifier) method of `NSTask`.

<a id="return-value"></a>

## Return Value

An initialized `SBApplication` that you can use to communicate with the target application specified by the process ID. Returns `nil` if no such application can be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

You should avoid using this method unless you know nothing about an external application but its PID. In most cases, it is better to use [initWithBundleIdentifier:](init%28bundleidentifier_%29.md), which will dynamically locate the external application’s path at runtime, or [initWithURL:](init%28url_%29-6xbe5.md), which is not dependent on the external application being open at the time the method is called.

## See Also

### Related Documentation

- [applicationWithProcessIdentifier:](applicationwithprocessidentifier_.md): Returns the shared instance representing a target application specified by its process identifier.

### Initializing a Scriptable Application Object

- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.
- [initWithURL:](init%28url_%29-6xbe5.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.
