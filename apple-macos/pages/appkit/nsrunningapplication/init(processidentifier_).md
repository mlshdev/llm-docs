> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/init(processidentifier:)](https://developer.apple.com/documentation/appkit/nsrunningapplication/init(processidentifier:))

# init(processIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.6+

Returns the running application with the given process identifier, or nil if no application has that pid.

## Declaration

```swift
convenience init?(processIdentifier pid: pid_t)
```

## Parameters

- `pid`: The process identifier.

<a id="return-value"></a>

## Return Value

An instance of `NSRunningApplication` for the specified `pid`, or nil if the application has no process identifier.

<a id="Discussion"></a>

## Discussion

Applications that do not have `PIDs` cannot be returned from this method.

## See Also

### Getting running application instances

- [runningApplications(withBundleIdentifier:)](runningapplications%28withbundleidentifier_%29.md): Returns an array of currently running applications with the specified bundle identifier.
- [current](current.md): Returns an `NSRunningApplication` representing this application.

# runningApplicationWithProcessIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the running application with the given process identifier, or nil if no application has that pid.

## Declaration

```objectivec
+ (instancetype) runningApplicationWithProcessIdentifier:(pid_t) pid;
```

## Parameters

- `pid`: The process identifier.

<a id="return-value"></a>

## Return Value

An instance of `NSRunningApplication` for the specified `pid`, or nil if the application has no process identifier.

<a id="Discussion"></a>

## Discussion

Applications that do not have `PIDs` cannot be returned from this method.

## See Also

### Getting running application instances

- [runningApplicationsWithBundleIdentifier:](runningapplications%28withbundleidentifier_%29.md): Returns an array of currently running applications with the specified bundle identifier.
- [currentApplication](current.md): Returns an `NSRunningApplication` representing this application.
