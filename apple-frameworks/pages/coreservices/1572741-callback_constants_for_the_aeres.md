> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1572741-callback_constants_for_the_aeres](https://developer.apple.com/documentation/coreservices/1572741-callback_constants_for_the_aeres)

# Callback Constants for the AEResolve Function

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify supported callback features to the `AEResolve` function.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAEIDoMinimum](1572741-callback_constants_for_the_aeres/kaeidominimum.md): The application does not handle whose tests or provide marking callbacks.
- [kAEIDoWhose](1572741-callback_constants_for_the_aeres/kaeidowhose.md): The application supports whose tests (supports key form `formWhose`).
- [kAEIDoMarking](1572741-callback_constants_for_the_aeres/kaeidomarking.md): The application provides marking callback functions. Marking callback functions are described in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).
- [kAEHandleSimpleRanges](1572741-callback_constants_for_the_aeres/kaehandlesimpleranges.md)
- [kAEPassSubDescs](1572741-callback_constants_for_the_aeres/kaepasssubdescs.md)
- [kAEResolveNestedLists](1572741-callback_constants_for_the_aeres/kaeresolvenestedlists.md)
- [kAEUseRelativeIterators](1572741-callback_constants_for_the_aeres/kaeuserelativeiterators.md)
