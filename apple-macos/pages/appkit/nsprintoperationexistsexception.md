> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsprintoperationexistsexception

# NSPrintOperationExistsException

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The name of an exception raised when there is already a print operation in process.

## Declaration

```objectivec
extern NSExceptionName NSPrintOperationExistsException;
```

<a id="Discussion"></a>

## Discussion

The methods that raise this exception are the `EPSOperation...` and `printOperation...`.
