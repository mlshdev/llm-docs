> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/typeid](https://developer.apple.com/documentation/coregraphics/cgcontext/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for a graphics context.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGContextGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for a graphics context.

## Declaration

```objectivec
extern CFTypeID CGContextGetTypeID();
```

<a id="return-value"></a>

## Return Value

The identifier for the type [CGContextRef](../cgcontext.md).
