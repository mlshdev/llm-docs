> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretext/ctframesettercreatewithtypesetter(_:)

# CTFramesetterCreateWithTypesetter(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a framesetter directly from a typesetter.

## Declaration

```swift
func CTFramesetterCreateWithTypesetter(_ typesetter: CTTypesetter) -> CTFramesetter
```

## Parameters

- `typesetter`: The typesetter that the framesetter uses to lay out text.

<a id="return-value"></a>

## Return Value

This function returns a reference to a `CTFramesetter` object.

<a id="Discussion"></a>

## Discussion

Each framesetter uses a typesetter internally to perform line breaking and other contextual analysis according to the characters in a string. This function allows the framesetter to use a typesetter that the system constructs using specific options.

## See Also

### Creating a Framesetter

- [CTFramesetterCreateWithAttributedString(\_:)](ctframesettercreatewithattributedstring%28__%29.md): Creates an immutable framesetter object from an attributed string.

# CTFramesetterCreateWithTypesetter (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a framesetter directly from a typesetter.

## Declaration

```objectivec
extern CTFramesetterRefCTFramesetterCreateWithTypesetter(CTTypesetterRef typesetter);
```

## Parameters

- `typesetter`: The typesetter that the framesetter uses to lay out text.

<a id="return-value"></a>

## Return Value

This function returns a reference to a `CTFramesetter` object.

<a id="Discussion"></a>

## Discussion

Each framesetter uses a typesetter internally to perform line breaking and other contextual analysis according to the characters in a string. This function allows the framesetter to use a typesetter that the system constructs using specific options.

## See Also

### Creating a Framesetter

- [CTFramesetterCreateWithAttributedString](ctframesettercreatewithattributedstring%28__%29.md): Creates an immutable framesetter object from an attributed string.
