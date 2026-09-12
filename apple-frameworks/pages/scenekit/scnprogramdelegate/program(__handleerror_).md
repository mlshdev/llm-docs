> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogramdelegate/program(_:handleerror:)](https://developer.apple.com/documentation/scenekit/scnprogramdelegate/program(_:handleerror:))

# program(\_:handleError:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate that an error occurred when compiling GLSL source code.

## Declaration

```swift
optional func program(_ program: SCNProgram, handleError error: any Error)
```

## Parameters

- `program`: The program that generated the compilation error.
- `error`: The compilation error that was raised.

<a id="Discussion"></a>

## Discussion

Examine the `error` parameter for details of the compilation error provided by the GLSL compiler.

## See Also

### Handling Shader Compilation Errors

- [SCNErrorDomain](../scnerrordomain.md): Identifies an error type defined by the SceneKit framework.
- [SceneKit Error Codes](../1409723-scenekit-error-codes.md)

# program:handleError: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate that an error occurred when compiling GLSL source code.

## Declaration

```objectivec
- (void) program:(SCNProgram *) program handleError:(NSError *) error;
```

## Parameters

- `program`: The program that generated the compilation error.
- `error`: The compilation error that was raised.

<a id="Discussion"></a>

## Discussion

Examine the `error` parameter for details of the compilation error provided by the GLSL compiler.

## See Also

### Handling Shader Compilation Errors

- [SCNErrorDomain](../scnerrordomain.md): Identifies an error type defined by the SceneKit framework.
- [SceneKit Error Codes](../1409723-scenekit-error-codes.md)
