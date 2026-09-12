> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/init(url:)-6xbe5](https://developer.apple.com/documentation/scriptingbridge/sbapplication/init(url:)-6xbe5)

# init(url:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.

## Declaration

```swift
init?(url: URL)
```

## Parameters

- `url`: A Universal Resource Locator (URL) specifying an application that is OSA-compliant.

<a id="return-value"></a>

## Return Value

An initialized `SBApplication` that you can use to communicate with the target application specified by the process ID. Returns `nil` if an application could not be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

This approach to initializing `SBApplication` objects should be used only if you know for certain the URL of the target application. In most cases, it is better to use [applicationWithBundleIdentifier:](applicationwithbundleidentifier_.md) which dynamically locates the target application at runtime. Even so, you should rarely have to initialize an `SBApplication` yourself.

This method currently supports file URLs (`file:`) and remote application URLs (`eppc:`). It checks whether a file exists at the specified path, but it does not check whether an application identified via `eppc:` exists.

## See Also

### Initializing a Scriptable Application Object

- [init(bundleIdentifier:)](init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.
- [init(processIdentifier:)](init%28processidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.

# initWithURL: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns an instance of an `SBApplication` subclass that represents the target application identified by the given URL.

## Declaration

```objectivec
- (SBApplication *) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: A Universal Resource Locator (URL) specifying an application that is OSA-compliant.

<a id="return-value"></a>

## Return Value

An initialized `SBApplication` that you can use to communicate with the target application specified by the process ID. Returns `nil` if an application could not be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

This approach to initializing `SBApplication` objects should be used only if you know for certain the URL of the target application. In most cases, it is better to use [applicationWithBundleIdentifier:](applicationwithbundleidentifier_.md) which dynamically locates the target application at runtime. Even so, you should rarely have to initialize an `SBApplication` yourself.

This method currently supports file URLs (`file:`) and remote application URLs (`eppc:`). It checks whether a file exists at the specified path, but it does not check whether an application identified via `eppc:` exists.

## See Also

### Related Documentation

- [applicationWithURL:](applicationwithurl_.md): Returns the shared instance representing a target application specified by the given URL.

### Initializing a Scriptable Application Object

- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.
- [initWithProcessIdentifier:](init%28processidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given process identifier.
