> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516422-cssetcomponentsthreadmode](https://developer.apple.com/documentation/coreservices/1516422-cssetcomponentsthreadmode)

# CSSetComponentsThreadMode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.8)

Sets whether or not using thread-unsafe components is allowed in the current thread.

## Declaration

```objectivec
void CSSetComponentsThreadMode(CSComponentsThreadMode mode);
```

## Parameters

- `mode`: A flag that determines whether the current thread is restricted to calling components that are thread-safe. You should set this flag to `kCSAcceptThreadSafeComponentsOnlyMode` whenever you want the current thread to call only components that are thread-safe.

<a id="discussion"></a>

## Discussion

Core Services maintains a component thread-mode flag for each thread in the current process. The default value of this flag is `kCSAcceptAllComponentsMode`, which means the thread can call any component regardless of whether the component is thread-safe. Applications and other high-level code that call component-based APIs (such as QuickTime) from preemptive threads should call this function from their thread beforehand and pass in the value `kCSAcceptThreadSafeComponentsOnlyMode`. 

A thread’s component thread-mode flag can safely retain its default value only if the thread is the main thread or if it participates in cooperative locking, such as Carbon Thread Manager-style cooperative threads and application threads that perform their own private locking.

## See Also

### Accessing the Thread Safety Mode

- [CSGetComponentsThreadMode](1516409-csgetcomponentsthreadmode.md): Deprecated. Indicates whether using thread-unsafe components is allowed in the current thread.
