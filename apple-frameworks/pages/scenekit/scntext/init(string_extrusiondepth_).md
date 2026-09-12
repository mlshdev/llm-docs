> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/init(string:extrusiondepth:)](https://developer.apple.com/documentation/scenekit/scntext/init(string:extrusiondepth:))

# init(string:extrusionDepth:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a text geometry from a specified string, extruded with a specified depth.

## Declaration

```swift
convenience init(string: Any?, extrusionDepth: CGFloat)
```

## Parameters

- `string`: An [NSString](../../foundation/nsstring.md) or [NSAttributedString](../../foundation/nsattributedstring.md) object containing text from which to create the geometry.
- `extrusionDepth`: The extent of the text geometry in the Z dimension of its local coordinate space. Specify a depth of `0.0` to create 2D text confined to a plane.

<a id="return-value"></a>

## Return Value

A new text geometry.

<a id="Discussion"></a>

## Discussion

In the local coordinate system of the text geometry, the origin corresponds to the lower left corner of the text’s layout rectangle, with the text extending in the x- and y-axis dimensions. (SceneKit computes a layout rectangle automatically, or you can specify one using the [containerFrame](containerframe.md) property.) The geometry is centered along its z-axis. For example, if its [extrusionDepth](extrusiondepth.md) property is `1.0`, the geometry extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape—the geometry is confined to the plane whose z-coordinate is `0.0`, and viewable only from its front unless its material’s [isDoubleSided](../scnmaterial/isdoublesided.md) property is [true](https://developer.apple.com/documentation/swift/true).

# textWithString:extrusionDepth: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a text geometry from a specified string, extruded with a specified depth.

## Declaration

```objectivec
+ (instancetype) textWithString:(id) string extrusionDepth:(CGFloat) extrusionDepth;
```

## Parameters

- `string`: An [NSString](../../foundation/nsstring.md) or [NSAttributedString](../../foundation/nsattributedstring.md) object containing text from which to create the geometry.
- `extrusionDepth`: The extent of the text geometry in the Z dimension of its local coordinate space. Specify a depth of `0.0` to create 2D text confined to a plane.

<a id="return-value"></a>

## Return Value

A new text geometry.

<a id="Discussion"></a>

## Discussion

In the local coordinate system of the text geometry, the origin corresponds to the lower left corner of the text’s layout rectangle, with the text extending in the x- and y-axis dimensions. (SceneKit computes a layout rectangle automatically, or you can specify one using the [containerFrame](containerframe.md) property.) The geometry is centered along its z-axis. For example, if its [extrusionDepth](extrusiondepth.md) property is `1.0`, the geometry extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape—the geometry is confined to the plane whose z-coordinate is `0.0`, and viewable only from its front unless its material’s [doubleSided](../scnmaterial/isdoublesided.md) property is [true](https://developer.apple.com/documentation/swift/true).
