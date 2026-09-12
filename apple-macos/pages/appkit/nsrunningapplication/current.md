> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/current](https://developer.apple.com/documentation/appkit/nsrunningapplication/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Returns an `NSRunningApplication` representing this application.

## Declaration

```swift
class var current: NSRunningApplication { get }
```

<a id="return-value"></a>

## Return Value

An `NSRunningApplication` instance for the current application.

## See Also

### Getting running application instances

- [init(processIdentifier:)](init%28processidentifier_%29.md): Returns the running application with the given process identifier, or nil if no application has that pid.
- [runningApplications(withBundleIdentifier:)](runningapplications%28withbundleidentifier_%29.md): Returns an array of currently running applications with the specified bundle identifier.

# currentApplication (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Returns an `NSRunningApplication` representing this application.

## Declaration

```objectivec
@property (class, strong, readonly) NSRunningApplication * currentApplication;
```

<a id="return-value"></a>

## Return Value

An `NSRunningApplication` instance for the current application.

## See Also

### Getting running application instances

- [runningApplicationWithProcessIdentifier:](init%28processidentifier_%29.md): Returns the running application with the given process identifier, or nil if no application has that pid.
- [runningApplicationsWithBundleIdentifier:](runningapplications%28withbundleidentifier_%29.md): Returns an array of currently running applications with the specified bundle identifier.
