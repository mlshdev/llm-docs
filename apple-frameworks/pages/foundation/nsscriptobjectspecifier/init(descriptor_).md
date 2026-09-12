> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/init(descriptor:)](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns a new object specifier for an Apple event descriptor.

## Declaration

```swift
init?(descriptor: NSAppleEventDescriptor)
```

## Parameters

- `descriptor`: An Apple event descriptor. The descriptor must have the type `typeObjectSpecifier`.

<a id="return-value"></a>

## Return Value

An object specifier, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

If `objectSpecifierWithDescriptor:` is invoked and fails during the execution of a script command, information about the error that caused the failure is recorded in `[NSScriptCommand currentCommand]`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# objectSpecifierWithDescriptor: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns a new object specifier for an Apple event descriptor.

## Declaration

```objectivec
+ (NSScriptObjectSpecifier *) objectSpecifierWithDescriptor:(NSAppleEventDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An Apple event descriptor. The descriptor must have the type `typeObjectSpecifier`.

<a id="return-value"></a>

## Return Value

An object specifier, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

If `objectSpecifierWithDescriptor:` is invoked and fails during the execution of a script command, information about the error that caused the failure is recorded in `[NSScriptCommand currentCommand]`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
