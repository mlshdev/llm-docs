> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/runningapplications(withbundleidentifier:)](https://developer.apple.com/documentation/appkit/nsrunningapplication/runningapplications(withbundleidentifier:))

# runningApplications(withBundleIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns an array of currently running applications with the specified bundle identifier.

## Declaration

```swift
class func runningApplications(withBundleIdentifier bundleIdentifier: String) -> [NSRunningApplication]
```

## Parameters

- `bundleIdentifier`: The bundle identifier.

<a id="return-value"></a>

## Return Value

An array of `NSRunningApplications`, or an empty array if no applications match the bundle identifier.

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

## See Also

### Getting running application instances

- [init(processIdentifier:)](init%28processidentifier_%29.md): Returns the running application with the given process identifier, or nil if no application has that pid.
- [current](current.md): Returns an `NSRunningApplication` representing this application.

# runningApplicationsWithBundleIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns an array of currently running applications with the specified bundle identifier.

## Declaration

```objectivec
+ (NSArray<NSRunningApplication *> *) runningApplicationsWithBundleIdentifier:(NSString *) bundleIdentifier;
```

## Parameters

- `bundleIdentifier`: The bundle identifier.

<a id="return-value"></a>

## Return Value

An array of `NSRunningApplications`, or an empty array if no applications match the bundle identifier.

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

## See Also

### Getting running application instances

- [runningApplicationWithProcessIdentifier:](init%28processidentifier_%29.md): Returns the running application with the given process identifier, or nil if no application has that pid.
- [currentApplication](current.md): Returns an `NSRunningApplication` representing this application.
