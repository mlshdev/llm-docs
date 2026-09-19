> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1463872-pmprintersendcommand

# PMPrinterSendCommand(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```swift
func PMPrinterSendCommand(_ printer: PMPrinter, _ commandString: CFString, _ jobTitle: CFString?, _ options: CFDictionary?) -> OSStatus
```

# PMPrinterSendCommand (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.6+

## Declaration

```objectivec
OSStatus PMPrinterSendCommand(PMPrinter printer, CFStringRef commandString, CFStringRef jobTitle, CFDictionaryRef options);
```
