> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575306-ioexitthread](https://developer.apple.com/documentation/kernel/1575306-ioexitthread)

# IOExitThread

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Deprecated function - use thread_terminate(). Terminate execution of current thread.

## Declaration

```objectivec
void IOExitThread(void);
```

<a id="discussion"></a>

## Discussion

This function destroys the currently running thread, and does not return.
