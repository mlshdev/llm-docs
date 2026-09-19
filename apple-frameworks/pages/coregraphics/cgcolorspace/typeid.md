> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgcolorspace/typeid

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for Quartz color spaces.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGColorSpaceGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for Quartz color spaces.

## Declaration

```objectivec
extern CFTypeID CGColorSpaceGetTypeID();
```

<a id="return-value"></a>

## Return Value

The identifier for the opaque type [CGColorSpaceRef](../cgcolorspace.md).
