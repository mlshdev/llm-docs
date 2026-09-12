> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationmain](https://developer.apple.com/documentation/appkit/nsapplicationmain)

# NSApplicationMain

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Called by the main function to create and run the application.

## Declaration

```objectivec
extern int NSApplicationMain(int argc, const char * argv[]);
```

## Parameters

- `argc`: The number of arguments in the `argv` parameter.
- `argv`: An array of pointers containing the arguments passed to the application at startup.

<a id="return-value"></a>

## Return Value

This method never returns a result code. Instead, it calls the `exit` function to exit the application and terminate the process. If you want to determine why the application exited, you should look at the result code from the `exit` function instead.

<a id="Discussion"></a>

## Discussion

Creates the application, loads the main nib file from the application’s main bundle, and runs the application. You must call this function from the main thread of your application, and you typically call it only once from your application’s `main` function. Your `main` function is usually generated automatically by Xcode.

<a id="Special-Considerations"></a>

### Special Considerations

`NSApplicationMain` itself ignores the `argc` and `argv` arguments. Instead, Cocoa gets its arguments indirectly through `_NSGetArgv`, `_NSGetArgc`, and `_NSGetEnviron` (see \<crt_externs.h\>).

## See Also

### Life Cycle

- [NSApplication](nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.
- [NSRunningApplication](nsrunningapplication.md): An object that can manipulate and provide information for a single instance of an app.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.
