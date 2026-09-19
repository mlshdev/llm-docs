> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgfunction/typeid

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for Core Graphics function objects.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGFunctionGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for Core Graphics function objects.

## Declaration

```objectivec
extern CFTypeID CGFunctionGetTypeID();
```

<a id="return-value"></a>

## Return Value

The identifier for the opaque type [CGFunctionRef](../cgfunction.md).
