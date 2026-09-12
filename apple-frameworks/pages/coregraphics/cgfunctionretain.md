> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfunctionretain](https://developer.apple.com/documentation/coregraphics/cgfunctionretain)

# CGFunctionRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a function object.

## Declaration

```objectivec
extern CGFunctionRefCGFunctionRetain(CGFunctionRef function);
```

## Parameters

- `function`: The function object to retain.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `function` parameter is `nil`.

## See Also

### Retaining and Releasing CGFunction Objects

- [CGFunctionRelease](cgfunctionrelease.md): Decrements the retain count of a function object.
