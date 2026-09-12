> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471646-memory_attribute_selectors/gestaltlaunchcanreturn](https://developer.apple.com/documentation/coreservices/1471646-memory_attribute_selectors/gestaltlaunchcanreturn)

# gestaltLaunchCanReturn

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltLaunchCanReturn = 1
```

<a id="discussion"></a>

## Discussion

If this bit is set, the `_Launch` trap macro can return to the caller. The `_Launch` trap macro in system software version 7.0 (and in earlier versions running MultiFinder) gives your application the option to continue running after it launches another application. In earlier versions of system software not running MultiFinder, the `_Launch` trap macro forces the launching application to quit.
