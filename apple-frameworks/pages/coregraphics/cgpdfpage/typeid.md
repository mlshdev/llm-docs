> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfpage/typeid](https://developer.apple.com/documentation/coregraphics/cgpdfpage/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the CFType ID for PDF page objects.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGPDFPageGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the CFType ID for PDF page objects.

## Declaration

```objectivec
extern CFTypeID CGPDFPageGetTypeID();
```

<a id="return-value"></a>

## Return Value

Returns the Core Foundation type for a PDF page.
