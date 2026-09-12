> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aebuilderror](https://developer.apple.com/documentation/coreservices/aebuilderror)

# AEBuildError (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Defines a structure for storing additional error codeinformation for “AEBuild” routines.

## Declaration

```swift
struct AEBuildError
```

## Topics

### Initializers

- [init()](aebuilderror/1447428-init.md)
- [init(fError:fErrorPos:)](aebuilderror/1449472-init.md)

### Instance Properties

- [fError](aebuilderror/1446581-ferror.md): The error code. See [AEBuildErrorCode](aebuilderrorcode.md) for alist of errors.
- [fErrorPos](aebuilderror/1448861-ferrorpos.md): The character position where the parser detectedthe error.

# AEBuildError (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Defines a structure for storing additional error codeinformation for “AEBuild” routines.

## Declaration

```objectivec
typedef struct AEBuildError {
    ...
} AEBuildError;
```

## Topics

### Instance Properties

- [fError](aebuilderror/1446581-ferror.md): The error code. See [AEBuildErrorCode](aebuilderrorcode.md) for alist of errors.
- [fErrorPos](aebuilderror/1448861-ferrorpos.md): The character position where the parser detectedthe error.
