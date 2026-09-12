> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447372-aeobjectinit](https://developer.apple.com/documentation/coreservices/1447372-aeobjectinit)

# AEObjectInit() (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Initializes the Object Support Library.

## Declaration

```swift
func AEObjectInit() -> OSErr
```

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

You must call this function before calling any of the Apple Event Manager functions that describe or manipulate Apple event objects.

You should call the `AEObjectInit` function to initialize the Apple Event Manager functions that handle object specifiers and Apple event objects. 

<a id="1770197"></a>

### Version-Notes

To make these functions available to your application with version 1.01 and earlier versions of the Apple Event Manager, you must also link the Apple Event Object Support Library with your application when you build it. For more information, see the Version Notes section for the AppleScript Gestalt Selector described in *Inside macOS: Gestalt Manager Reference* and the function [AERemoveSpecialHandler(\_:\_:\_:)](1447960-aeremovespecialhandler.md).

## See Also

### Initializing the Object Support Library

- [AESetObjectCallbacks(\_:\_:\_:\_:\_:\_:\_:)](1447756-aesetobjectcallbacks.md): Specifies the object callback functions for your application.

# AEObjectInit (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Initializes the Object Support Library.

## Declaration

```objectivec
OSErr AEObjectInit(void);
```

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

You must call this function before calling any of the Apple Event Manager functions that describe or manipulate Apple event objects.

You should call the `AEObjectInit` function to initialize the Apple Event Manager functions that handle object specifiers and Apple event objects. 

<a id="1770197"></a>

### Version-Notes

To make these functions available to your application with version 1.01 and earlier versions of the Apple Event Manager, you must also link the Apple Event Object Support Library with your application when you build it. For more information, see the Version Notes section for the AppleScript Gestalt Selector described in *Inside macOS: Gestalt Manager Reference* and the function [AERemoveSpecialHandler](1447960-aeremovespecialhandler.md).

## See Also

### Initializing the Object Support Library

- [AESetObjectCallbacks](1447756-aesetobjectcallbacks.md): Specifies the object callback functions for your application.
