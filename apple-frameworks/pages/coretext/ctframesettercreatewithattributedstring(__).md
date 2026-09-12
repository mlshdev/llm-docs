> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframesettercreatewithattributedstring(_:)](https://developer.apple.com/documentation/coretext/ctframesettercreatewithattributedstring(_:))

# CTFramesetterCreateWithAttributedString(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable framesetter object from an attributed string.

## Declaration

```swift
func CTFramesetterCreateWithAttributedString(_ attrString: CFAttributedString) -> CTFramesetter
```

## Parameters

- `attrString`: The attributed string for constructing the framesetter object.

<a id="return-value"></a>

## Return Value

A reference to a framesetter object if the call is successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

Use the framesetter object to create and fill text frames with the [CTFramesetterCreateFrame(\_:\_:\_:\_:)](ctframesettercreateframe%28________%29.md) call.

> **Note**

>  By default, the text system doesn’t typeset text that requires an unreasonable amount of effort. To create a framesetter that supports typesetting text regardless of the amount of effort necessary, create a [CTTypesetter](cttypesetter.md) with the [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md) option set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), then use [CTFramesetterCreateWithTypesetter(\_:)](ctframesettercreatewithtypesetter%28__%29.md) instead.

## See Also

### Creating a Framesetter

- [CTFramesetterCreateWithTypesetter(\_:)](ctframesettercreatewithtypesetter%28__%29.md): Creates a framesetter directly from a typesetter.

# CTFramesetterCreateWithAttributedString (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable framesetter object from an attributed string.

## Declaration

```objectivec
extern CTFramesetterRefCTFramesetterCreateWithAttributedString(CFAttributedStringRef attrString);
```

## Parameters

- `attrString`: The attributed string for constructing the framesetter object.

<a id="return-value"></a>

## Return Value

A reference to a framesetter object if the call is successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

Use the framesetter object to create and fill text frames with the [CTFramesetterCreateFrame](ctframesettercreateframe%28________%29.md) call.

> **Note**

>  By default, the text system doesn’t typeset text that requires an unreasonable amount of effort. To create a framesetter that supports typesetting text regardless of the amount of effort necessary, create a [CTTypesetterRef](cttypesetter.md) with the [kCTTypesetterOptionAllowUnboundedLayout](kcttypesetteroptionallowunboundedlayout.md) option set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), then use [CTFramesetterCreateWithTypesetter](ctframesettercreatewithtypesetter%28__%29.md) instead.

## See Also

### Creating a Framesetter

- [CTFramesetterCreateWithTypesetter](ctframesettercreatewithtypesetter%28__%29.md): Creates a framesetter directly from a typesetter.
