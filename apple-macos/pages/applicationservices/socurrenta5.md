> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/socurrenta5](https://developer.apple.com/documentation/applicationservices/socurrenta5)

# soCurrentA5

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soCurrentA5: OSType { get }
```

<a id="discussion"></a>

## Discussion

Set the value that the Speech Synthesis Managerassigns to the A5 register before invoking any application-definedcallback functions for the speech channel. The A5 register mustbe set correctly if the callback functions are to be able to accessapplication global variables. The `speechInfo` parameter shouldbe set to the pointer contained in the A5 register at a time whenthe application is not executing interrupt code or to `NULL` ifyour application wishes to clear a value previously set with the `soCurrentA5` selector.

This selector works with the `SetSpeechInfo` function.
