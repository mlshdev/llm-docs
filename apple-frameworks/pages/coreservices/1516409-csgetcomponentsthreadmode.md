> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516409-csgetcomponentsthreadmode](https://developer.apple.com/documentation/coreservices/1516409-csgetcomponentsthreadmode)

# CSGetComponentsThreadMode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Indicates whether using thread-unsafe components is allowed in the current thread.

## Declaration

```objectivec
CSComponentsThreadMode CSGetComponentsThreadMode(void);
```

<a id="return_value"></a>

## Return Value

A flag that indicates whether using thread-unsafe components is allowed in the current thread.

## See Also

### Accessing the Thread Safety Mode

- [CSSetComponentsThreadMode](1516422-cssetcomponentsthreadmode.md): Deprecated. Sets whether or not using thread-unsafe components is allowed in the current thread.
