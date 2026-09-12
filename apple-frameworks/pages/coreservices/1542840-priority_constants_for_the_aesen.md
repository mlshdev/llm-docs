> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542840-priority_constants_for_the_aesen](https://developer.apple.com/documentation/coreservices/1542840-priority_constants_for_the_aesen)

# Priority Constants for the AESend Function (Deprecated in macOS)

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify a value for the `sendPriority` parameter of the `AESend` function.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAENormalPriority](1542840-priority_constants_for_the_aesen/kaenormalpriority.md): Deprecated. The Apple Event Manager posts the event at the end of the event queue of the server process and the server processes the Apple event as soon as it has the opportunity.
- [kAEHighPriority](1542840-priority_constants_for_the_aesen/kaehighpriority.md): The Apple Event Manager posts the event at the beginning of the event queue of the server process.
