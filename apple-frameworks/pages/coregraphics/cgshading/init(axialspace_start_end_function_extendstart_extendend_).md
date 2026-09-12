> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgshading/init(axialspace:start:end:function:extendstart:extendend:)](https://developer.apple.com/documentation/coregraphics/cgshading/init(axialspace:start:end:function:extendstart:extendend:))

# init(axialSpace:start:end:function:extendStart:extendEnd:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a shading object to use for axial shading.

## Declaration

```swift
init?(axialSpace space: CGColorSpace, start: CGPoint, end: CGPoint, function: CGFunction, extendStart: Bool, extendEnd: Bool)
```

## Parameters

- `space`: The color space in which color values are expressed. Core Graphics retains this object; upon return, you may safely release it.
- `start`: The starting point of the axis, in the shading’s target coordinate space.
- `end`: The ending point of the axis, in the shading’s target coordinate space.
- `function`: A CGFunction object created by the function [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md). This object refers to your function for creating an axial shading. Core Graphics retains this object; upon return, you may safely release it.
- `extendStart`: A Boolean value that specifies whether to extend the shading beyond the starting point of the axis.
- `extendEnd`: A Boolean value that specifies whether to extend the shading beyond the ending point of the axis.

<a id="return-value"></a>

## Return Value

A new Core Graphics axial shading. In Objective-C, you’re responsible for releasing this object using [CGShadingRelease](../cgshadingrelease.md).

<a id="Discussion"></a>

## Discussion

An axial shading is a color blend that varies along a linear axis between two endpoints and extends indefinitely perpendicular to that axis. When you are ready to draw the shading, call the function [drawShading(\_:)](../cgcontext/drawshading%28__%29.md).

## See Also

### Creating Shading Objects

- [init(radialSpace:start:startRadius:end:endRadius:function:extendStart:extendEnd:)](init%28radialspace_start_startradius_end_endradius_function_extendstart_extendend_%29.md): Creates a shading object to use for radial shading.

# CGShadingCreateAxial (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a shading object to use for axial shading.

## Declaration

```objectivec
extern CGShadingRefCGShadingCreateAxial(CGColorSpaceRef space, CGPoint start, CGPoint end, CGFunctionRef function, bool extendStart, bool extendEnd);
```

## Parameters

- `space`: The color space in which color values are expressed. Core Graphics retains this object; upon return, you may safely release it.
- `start`: The starting point of the axis, in the shading’s target coordinate space.
- `end`: The ending point of the axis, in the shading’s target coordinate space.
- `function`: A CGFunction object created by the function [CGFunctionCreate](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md). This object refers to your function for creating an axial shading. Core Graphics retains this object; upon return, you may safely release it.
- `extendStart`: A Boolean value that specifies whether to extend the shading beyond the starting point of the axis.
- `extendEnd`: A Boolean value that specifies whether to extend the shading beyond the ending point of the axis.

<a id="return-value"></a>

## Return Value

A new Core Graphics axial shading. In Objective-C, you’re responsible for releasing this object using [CGShadingRelease](../cgshadingrelease.md).

<a id="Discussion"></a>

## Discussion

An axial shading is a color blend that varies along a linear axis between two endpoints and extends indefinitely perpendicular to that axis. When you are ready to draw the shading, call the function [CGContextDrawShading](../cgcontext/drawshading%28__%29.md).

## See Also

### Creating Shading Objects

- [CGShadingCreateRadial](init%28radialspace_start_startradius_end_endradius_function_extendstart_extendend_%29.md): Creates a shading object to use for radial shading.
