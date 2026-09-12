> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/applicationwithbundleidentifier:](https://developer.apple.com/documentation/scriptingbridge/sbapplication/applicationwithbundleidentifier:)

# applicationWithBundleIdentifier:

**Interface language:** Objective-C

**Framework:** Scripting Bridge  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns the shared instance representing the target application specified by its bundle identifier.

## Declaration

```objectivec
+ (SBApplication *) applicationWithBundleIdentifier:(NSString *) ident;
```

## Parameters

- `ident`: A bundle identifier specifying an application that is OSA-compliant.

<a id="return-value"></a>

## Return Value

An instance of a `SBApplication` subclass that represents the target application whose bundle identifier is `ident`. Returns `nil` if no such application can be found or if the application does not have a scripting interface.

<a id="discussion"></a>

## Discussion

For applications that declare themselves to have a dynamic scripting interface, this method will launch the application if it is not already running.

## See Also

### Related Documentation

- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Returns an instance of an `SBApplication` subclass that represents the target application identified by the given bundle identifier.

### Getting a Scriptable Application Instance

- [applicationWithProcessIdentifier:](applicationwithprocessidentifier_.md): Returns the shared instance representing a target application specified by its process identifier.
- [applicationWithURL:](applicationwithurl_.md): Returns the shared instance representing a target application specified by the given URL.
