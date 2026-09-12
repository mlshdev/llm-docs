> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadable/program](https://developer.apple.com/documentation/scenekit/scnshadable/program)

# program (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A program used when rendering the object.

## Declaration

```swift
optional var program: SCNProgram? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a program to an object overrides all other rendering parameters, including material settings and shader modifiers.

# program (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A program used when rendering the object.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNProgram * program;
```

<a id="Discussion"></a>

## Discussion

Assigning a program to an object overrides all other rendering parameters, including material settings and shader modifiers.
