> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchfsrefspec/1450600-asyncrefcon](https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec/1450600-asyncrefcon)

# asyncRefCon (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.10)

A pointer to an arbitrary application-definedvalue, passed in the Carbon event notifying you of an application’slaunch or termination (if you have registered for such notification).The value of this field can be `NULL`.

## Declaration

```swift
var asyncRefCon: UnsafeMutableRawPointer!
```

# asyncRefCon (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.10)

A pointer to an arbitrary application-definedvalue, passed in the Carbon event notifying you of an application’slaunch or termination (if you have registered for such notification).The value of this field can be `NULL`.

## Declaration

```objectivec
void *asyncRefCon;
```
