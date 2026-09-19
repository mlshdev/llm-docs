> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1460381-pmprintercopystate

# PMPrinterCopyState(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```swift
func PMPrinterCopyState(_ printer: PMPrinter, _ stateDict: UnsafeMutablePointer<Unmanaged<CFDictionary>?>) -> OSStatus
```

# PMPrinterCopyState (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus PMPrinterCopyState(PMPrinter printer, CFDictionaryRef  _Nullable *stateDict);
```
