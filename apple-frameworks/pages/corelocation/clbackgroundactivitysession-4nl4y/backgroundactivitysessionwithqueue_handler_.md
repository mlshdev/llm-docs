> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbackgroundactivitysession-4nl4y/backgroundactivitysessionwithqueue:handler:](https://developer.apple.com/documentation/corelocation/clbackgroundactivitysession-4nl4y/backgroundactivitysessionwithqueue:handler:)

# backgroundActivitySessionWithQueue:handler:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
+ (instancetype) backgroundActivitySessionWithQueue:(dispatch_queue_t) queue handler:(void (^)(CLBackgroundActivitySessionDiagnostic *diagnostic)) handler;
```
