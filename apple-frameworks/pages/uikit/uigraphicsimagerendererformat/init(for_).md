> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/init(for:)

# init(for:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates the most suitable format for rendering on a device with the specified traits.

## Declaration

```swift
convenience init(for traitCollection: UITraitCollection)
```

## Parameters

- `traitCollection`: The traits of the drawing environment.

<a id="return-value"></a>

## Return Value

An initialized format object.

# formatForTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates the most suitable format for rendering on a device with the specified traits.

## Declaration

```objectivec
+ (instancetype) formatForTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: The traits of the drawing environment.

<a id="return-value"></a>

## Return Value

An initialized format object.
