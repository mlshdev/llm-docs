> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseerror-swift.struct/code](https://developer.apple.com/documentation/phase/phaseerror-swift.struct/code)

# PHASEError.Code (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes that identify errors in PHASE.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [PHASEError.Code.initializeFailed](code/initializefailed.md): An error that indicates the engine failed to initialize.
- [PHASEError.Code.invalidObject](code/invalidobject.md): An error that indicates an object is invalid in a specific context.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Framework Errors

- [PHASEError](../phaseerror-swift.struct.md): An error that PHASE reports.
- [PHASEErrorDomain](../phaseerrordomain.md): A unique error domain for the framework.

# PHASEError (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes that identify errors in PHASE.

## Declaration

```objectivec
enum PHASEError : NSInteger;
```

## Topics

### Errors

- [PHASEErrorInitializeFailed](code/initializefailed.md): An error that indicates the engine failed to initialize.
- [PHASEErrorInvalidObject](code/invalidobject.md): An error that indicates an object is invalid in a specific context.

## See Also

### Framework Errors

- [PHASEErrorDomain](../phaseerrordomain.md): A unique error domain for the framework.
