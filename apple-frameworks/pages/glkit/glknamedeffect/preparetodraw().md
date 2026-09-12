> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glknamedeffect/preparetodraw()](https://developer.apple.com/documentation/glkit/glknamedeffect/preparetodraw())

# prepareToDraw() (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Prepares an effect for OpenGL ES rendering.

## Declaration

```swift
func prepareToDraw()
```

<a id="Discussion"></a>

## Discussion

An effect binds a compiled shader program to the context and returns. Many effects also bind data to other OpenGL state variables—see the appropriate reference for each effect class.

# prepareToDraw (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Prepares an effect for OpenGL ES rendering.

## Declaration

```objectivec
- (void) prepareToDraw;
```

<a id="Discussion"></a>

## Discussion

An effect binds a compiled shader program to the context and returns. Many effects also bind data to other OpenGL state variables—see the appropriate reference for each effect class.
