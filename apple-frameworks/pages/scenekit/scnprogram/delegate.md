> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/delegate](https://developer.apple.com/documentation/scenekit/scnprogram/delegate)

# delegate (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The delegate of the program object.

## Declaration

```swift
unowned(unsafe) var delegate: (any SCNProgramDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

An [SCNProgram](../scnprogram.md) object sends delegate messages if errors occur when compiling GLSL source code.

## See Also

### Providing a Delegate Object

- [SCNProgramDelegate](../scnprogramdelegate.md): The interface for tracking errors that occur when compiling shader source code.

# delegate (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The delegate of the program object.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<SCNProgramDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

An [SCNProgram](../scnprogram.md) object sends delegate messages if errors occur when compiling GLSL source code.

## See Also

### Providing a Delegate Object

- [SCNProgramDelegate](../scnprogramdelegate.md): The interface for tracking errors that occur when compiling shader source code.
