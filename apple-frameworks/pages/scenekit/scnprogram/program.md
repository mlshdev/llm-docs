> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogram/program](https://developer.apple.com/documentation/scenekit/scnprogram/program)

# program

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new program object.

## Declaration

```objectivec
+ (instancetype) program;
```

<a id="return-value"></a>

## Return Value

The initialized `SCNProgram` object, or `nil` if initialization is not successful.

<a id="Discussion"></a>

## Discussion

You cannot use the newly created program object for rendering until you provide shader source code for its [vertexShader](vertexshader.md) and [fragmentShader](fragmentshader.md) properties.

To use a shader for rendering, assign it to the [program](program.md) property of a geometry or material.
