> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsapplicationparameters/1446633-initialevent](https://developer.apple.com/documentation/coreservices/lsapplicationparameters/1446633-initialevent)

# initialEvent (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.10)

The first Apple Event to send to the launchedprocess. The value of this field can be `NULL`.

## Declaration

```swift
var initialEvent: UnsafeMutablePointer<AppleEvent>!
```

# initialEvent (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.10)

The first Apple Event to send to the launchedprocess. The value of this field can be `NULL`.

## Declaration

```objectivec
AppleEvent *initialEvent;
```
