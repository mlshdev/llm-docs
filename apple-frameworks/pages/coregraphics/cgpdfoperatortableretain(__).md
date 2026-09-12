> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfoperatortableretain(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfoperatortableretain(_:))

# CGPDFOperatorTableRetain(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a CGPDFOperatorTable object.

## Declaration

```swift
func CGPDFOperatorTableRetain(_ table: CGPDFOperatorTableRef) -> CGPDFOperatorTableRef
```

## Parameters

- `table`: A PDF operator table.

<a id="return-value"></a>

## Return Value

The same PDF operator table you passed in as the `table` parameter.

## See Also

### Retaining and Releasing a PDF Operator Table

- [CGPDFOperatorTableRelease(\_:)](cgpdfoperatortablerelease%28__%29.md): Decrements the retain count of a CGPDFOperatorTable object.

# CGPDFOperatorTableRetain (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a CGPDFOperatorTable object.

## Declaration

```objectivec
extern CGPDFOperatorTableRefCGPDFOperatorTableRetain(CGPDFOperatorTableRef table);
```

## Parameters

- `table`: A PDF operator table.

<a id="return-value"></a>

## Return Value

The same PDF operator table you passed in as the `table` parameter.

## See Also

### Retaining and Releasing a PDF Operator Table

- [CGPDFOperatorTableRelease](cgpdfoperatortablerelease%28__%29.md): Decrements the retain count of a CGPDFOperatorTable object.
