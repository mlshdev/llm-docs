> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cggradient/typeid

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for CGGradient objects.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGGradientGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for CGGradient objects.

## Declaration

```objectivec
extern CFTypeID CGGradientGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation identifier for the opaque type `CGGradientRef`.
