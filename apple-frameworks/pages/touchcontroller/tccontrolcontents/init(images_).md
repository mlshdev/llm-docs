> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/touchcontroller/tccontrolcontents/init(images:)

# init(images:) (Swift)

**Framework:** Touch Controller  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new instance with the specified images.

## Declaration

```swift
convenience init(images: [TCControlImage])
```

## Parameters

- `images`: An array of `TCControlImage` objects to use for the contents.

<a id="return-value"></a>

## Return Value

A new `TCControlContents` instance.

# contentsWithImages: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new instance with the specified images.

## Declaration

```objectivec
+ (instancetype) contentsWithImages:(NSArray<TCControlImage *> *) images;
```

## Parameters

- `images`: An array of `TCControlImage` objects to use for the contents.

<a id="return-value"></a>

## Return Value

A new `TCControlContents` instance.
