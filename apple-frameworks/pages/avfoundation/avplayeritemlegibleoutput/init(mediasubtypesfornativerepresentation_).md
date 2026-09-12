> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/init(mediasubtypesfornativerepresentation:)](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/init(mediasubtypesfornativerepresentation:))

# init(mediaSubtypesForNativeRepresentation:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates an initialized legible-output object.

## Declaration

```swift
init(mediaSubtypesForNativeRepresentation subtypes: [NSNumber])
```

## Parameters

- `subtypes`: An [NSArray](../../foundation/nsarray.md) of [NSNumber](../../foundation/nsnumber.md) FourCC codes.

<a id="return-value"></a>

## Return Value

An initialized instance of `AVPlayerItemLegibleOutput`.

## Mentioned In

- [init](../1805461-init.md)

<a id="Discussion"></a>

## Discussion

When creating an instance you add media subtype FourCC codes as `NSNumber` objects to the `subtypes` array to elect to receive that type as a [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) instead of an attributed string. FourCC codes are converted to `NSNumber` objects as shown:

```objc
@[ [NSNumber numberWithUnsignedInt:'tx3g'] ]
```

Initializing an `AVPlayerItemLegibleOutput` using the `init` method (which is preferred) is equivalent to calling this method with an empty `subtypes` array, which means that all legible data, regardless of media subtype, is delivered using [NSAttributedString](../../foundation/nsattributedstring.md) instances in a common format.

If a media subtype for which there is no legible data in the current player item is included in the media `subtypes` array, no error occurs.  An `AVPlayerItemLegibleOutput` instance doesn’t vend closed caption data as a [CMSampleBuffer](../../coremedia/cmsamplebuffer.md), so it is an error to include `'c608'` in the media subtypes array.

> **Note**

>  The preferred method of creating an `AVPlayerItemLegibleOutput` object is to use the [init](../1805461-init.md) method.

# initWithMediaSubtypesForNativeRepresentation: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates an initialized legible-output object.

## Declaration

```objectivec
- (instancetype) initWithMediaSubtypesForNativeRepresentation:(NSArray<NSNumber *> *) subtypes;
```

## Parameters

- `subtypes`: An [NSArray](../../foundation/nsarray.md) of [NSNumber](../../foundation/nsnumber.md) FourCC codes.

<a id="return-value"></a>

## Return Value

An initialized instance of `AVPlayerItemLegibleOutput`.

## Mentioned In

- [init](../1805461-init.md)

<a id="Discussion"></a>

## Discussion

When creating an instance you add media subtype FourCC codes as `NSNumber` objects to the `subtypes` array to elect to receive that type as a [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) instead of an attributed string. FourCC codes are converted to `NSNumber` objects as shown:

```objc
@[ [NSNumber numberWithUnsignedInt:'tx3g'] ]
```

Initializing an `AVPlayerItemLegibleOutput` using the `init` method (which is preferred) is equivalent to calling this method with an empty `subtypes` array, which means that all legible data, regardless of media subtype, is delivered using [NSAttributedString](../../foundation/nsattributedstring.md) instances in a common format.

If a media subtype for which there is no legible data in the current player item is included in the media `subtypes` array, no error occurs.  An `AVPlayerItemLegibleOutput` instance doesn’t vend closed caption data as a [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md), so it is an error to include `'c608'` in the media subtypes array.

> **Note**

>  The preferred method of creating an `AVPlayerItemLegibleOutput` object is to use the [init](../1805461-init.md) method.

## See Also

### Creating a legible output

- [init](../1805461-init.md): Creates an initialized legible output object.
