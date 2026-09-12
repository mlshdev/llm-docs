> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542814-timeout_constants](https://developer.apple.com/documentation/coreservices/1542814-timeout_constants)

# Timeout Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify a timeout value.

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [kAEDefaultTimeout](1542814-timeout_constants/kaedefaulttimeout.md): The timeout value is determined by the Apple Event Manager. The default timeout value is about one minute.
- [kNoTimeOut](1542814-timeout_constants/knotimeout.md): Your application is willing to wait indefinitely. Most commonly, you instead provide a timeout value (in ticks) that will provide a reasonable amount of time for the current operation.
