> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframesettergettypesetter(_:)](https://developer.apple.com/documentation/coretext/ctframesettergettypesetter(_:))

# CTFramesetterGetTypesetter(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the typesetter object being used by the framesetter.

## Declaration

```swift
func CTFramesetterGetTypesetter(_ framesetter: CTFramesetter) -> CTTypesetter
```

## Parameters

- `framesetter`: The framesetter from which a typesetter is requested.

<a id="return-value"></a>

## Return Value

A reference to a CTTypesetter object if the call was successful; otherwise, `NULL`. The framesetter maintains a reference to the returned object, which should not be released by the caller.

<a id="Discussion"></a>

## Discussion

Each framesetter uses a typesetter internally to perform line breaking and other contextual analysis based on the characters in a string; this function returns the typesetter being used by a particular framesetter in case the caller would like to perform other operations on that typesetter.

## See Also

### Creating Frames

- [CTFramesetterCreateFrame(\_:\_:\_:\_:)](ctframesettercreateframe%28________%29.md): Creates an immutable frame using a framesetter.

# CTFramesetterGetTypesetter (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the typesetter object being used by the framesetter.

## Declaration

```objectivec
extern CTTypesetterRefCTFramesetterGetTypesetter(CTFramesetterRef framesetter);
```

## Parameters

- `framesetter`: The framesetter from which a typesetter is requested.

<a id="return-value"></a>

## Return Value

A reference to a CTTypesetter object if the call was successful; otherwise, `NULL`. The framesetter maintains a reference to the returned object, which should not be released by the caller.

<a id="Discussion"></a>

## Discussion

Each framesetter uses a typesetter internally to perform line breaking and other contextual analysis based on the characters in a string; this function returns the typesetter being used by a particular framesetter in case the caller would like to perform other operations on that typesetter.

## See Also

### Creating Frames

- [CTFramesetterCreateFrame](ctframesettercreateframe%28________%29.md): Creates an immutable frame using a framesetter.
