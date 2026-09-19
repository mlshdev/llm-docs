> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/lsapplicationparameters/1449247-environment

# environment (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.10)

A dictionary of `CFStringRef` keysand values for environment variables to set in the launched process.The value of this field can be `NULL`.

## Declaration

```swift
var environment: Unmanaged<CFDictionary>!
```

# environment (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.10)

A dictionary of `CFStringRef` keysand values for environment variables to set in the launched process.The value of this field can be `NULL`.

## Declaration

```objectivec
CFDictionaryRef environment;
```
