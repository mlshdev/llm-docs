> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgshading/init(radialspace:start:startradius:end:endradius:function:extendstart:extendend:)](https://developer.apple.com/documentation/coregraphics/cgshading/init(radialspace:start:startradius:end:endradius:function:extendstart:extendend:))

# init(radialSpace:start:startRadius:end:endRadius:function:extendStart:extendEnd:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a shading object to use for radial shading.

## Declaration

```swift
init?(radialSpace space: CGColorSpace, start: CGPoint, startRadius: CGFloat, end: CGPoint, endRadius: CGFloat, function: CGFunction, extendStart: Bool, extendEnd: Bool)
```

## Parameters

- `space`: The color space in which color values are expressed. Core Graphics retains this object; upon return, you may safely release it.
- `start`: The center of the starting circle, in the shading’s target coordinate space.
- `startRadius`: The radius of the starting circle, in the shading’s target coordinate space.
- `end`: The center of the ending circle, in the shading’s target coordinate space.
- `endRadius`: The radius of the ending circle, in the shading’s target coordinate space.
- `function`: A CGFunction object created by the function [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md). This object refers to your function for creating a radial shading. Core Graphics retains this object; upon return, you may safely release it.
- `extendStart`: A Boolean value that specifies whether to extend the shading beyond the starting circle.
- `extendEnd`: A Boolean value that specifies whether to extend the shading beyond the ending circle.

<a id="return-value"></a>

## Return Value

A new Core Graphics radial shading. In Objective-C, you’re responsible for releasing this object using [CGShadingRelease](../cgshadingrelease.md).

<a id="Discussion"></a>

## Discussion

A radial shading is a color blend that varies between two circles. To draw the shading, call the function [drawShading(\_:)](../cgcontext/drawshading%28__%29.md).

## See Also

### Creating Shading Objects

- [init(axialSpace:start:end:function:extendStart:extendEnd:)](init%28axialspace_start_end_function_extendstart_extendend_%29.md): Creates a shading object to use for axial shading.

# CGShadingCreateRadial (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a shading object to use for radial shading.

## Declaration

```objectivec
extern CGShadingRefCGShadingCreateRadial(CGColorSpaceRef space, CGPoint start, CGFloat startRadius, CGPoint end, CGFloat endRadius, CGFunctionRef function, bool extendStart, bool extendEnd);
```

## Parameters

- `space`: The color space in which color values are expressed. Core Graphics retains this object; upon return, you may safely release it.
- `start`: The center of the starting circle, in the shading’s target coordinate space.
- `startRadius`: The radius of the starting circle, in the shading’s target coordinate space.
- `end`: The center of the ending circle, in the shading’s target coordinate space.
- `endRadius`: The radius of the ending circle, in the shading’s target coordinate space.
- `function`: A CGFunction object created by the function [CGFunctionCreate](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md). This object refers to your function for creating a radial shading. Core Graphics retains this object; upon return, you may safely release it.
- `extendStart`: A Boolean value that specifies whether to extend the shading beyond the starting circle.
- `extendEnd`: A Boolean value that specifies whether to extend the shading beyond the ending circle.

<a id="return-value"></a>

## Return Value

A new Core Graphics radial shading. In Objective-C, you’re responsible for releasing this object using [CGShadingRelease](../cgshadingrelease.md).

<a id="Discussion"></a>

## Discussion

A radial shading is a color blend that varies between two circles. To draw the shading, call the function [CGContextDrawShading](../cgcontext/drawshading%28__%29.md).

## See Also

### Creating Shading Objects

- [CGShadingCreateAxial](init%28axialspace_start_end_function_extendstart_extendend_%29.md): Creates a shading object to use for axial shading.
