> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgshading/typeid](https://developer.apple.com/documentation/coregraphics/cgshading/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for Core Graphics shading objects.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGShadingGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for Core Graphics shading objects.

## Declaration

```objectivec
extern CFTypeID CGShadingGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation identifier for the type [CGShadingRef](../cgshading.md).
