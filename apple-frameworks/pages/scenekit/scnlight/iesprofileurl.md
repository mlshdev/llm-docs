> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/iesprofileurl](https://developer.apple.com/documentation/scenekit/scnlight/iesprofileurl)

# iesProfileURL (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The URL for a file that contains photometry data describing the intended appearance of the light.

## Declaration

```swift
var iesProfileURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

A photometric light source is one whose shape, direction, and intensity of illumination is determined by a file in the IES format, containing physical measurements of a light source. Many manufacturers of real-world light fixtures publish such files describing the lighting characteristics of their products. This photometry data measures the light web surrounding a light source—measurements of the light’s intensity in all directions around the source.

By default, this property’s value is `nil`. After setting this property to a URL that references a valid IES profile, you must set the light’s type property to [IES](lighttype/ies.md) to load that file and apply its effect.

# IESProfileURL (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The URL for a file that contains photometry data describing the intended appearance of the light.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSURL * IESProfileURL;
```

<a id="Discussion"></a>

## Discussion

A photometric light source is one whose shape, direction, and intensity of illumination is determined by a file in the IES format, containing physical measurements of a light source. Many manufacturers of real-world light fixtures publish such files describing the lighting characteristics of their products. This photometry data measures the light web surrounding a light source—measurements of the light’s intensity in all directions around the source.

By default, this property’s value is `nil`. After setting this property to a URL that references a valid IES profile, you must set the light’s type property to [SCNLightTypeIES](lighttype/ies.md) to load that file and apply its effect.
