> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_lockdown_mode_enabled](https://developer.apple.com/documentation/os/os_lockdown_mode_enabled)

# os_lockdown_mode_enabled

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
extern bool os_lockdown_mode_enabled();
```

<a id="return-value"></a>

## Return Value

True if Lockdown Mode is enabled; false if Lockdown Mode is disabled or not supported on the platform.

<a id="discussion"></a>

## Discussion

Returns a cached value indicating whether Lockdown Mode is currently enabled on the system.

This function will abort the process if an unexpected error occurs while querying the Lockdown Mode state.
