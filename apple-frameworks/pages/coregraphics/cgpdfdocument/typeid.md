> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/typeid](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for Core Graphics PDF documents.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGPDFDocumentGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for Core Graphics PDF documents.

## Declaration

```objectivec
extern CFTypeID CGPDFDocumentGetTypeID();
```

<a id="return-value"></a>

## Return Value

The identifier for the type [CGPDFDocumentRef](../cgpdfdocument.md).
