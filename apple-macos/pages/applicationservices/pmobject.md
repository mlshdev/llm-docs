> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pmobject](https://developer.apple.com/documentation/applicationservices/pmobject)

# PMObject (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The base type for all the opaque types used in Core Printing.

## Declaration

```swift
typealias PMObject = UnsafeRawPointer
```

<a id="discussion"></a>

## Discussion

`PMObject` is the base type for opaque types such as `PMPrintSession`, `PMPageFormat`, `PMPrintSettings`, `PMPrinter`, `PMPaper`, `PMPreset`, and `PMServer`. `PMObject` is used in functions such as [PMRetain(\_:)](1460190-pmretain.md) and [PMRelease(\_:)](1461402-pmrelease.md) that operate on any opaque type.

# PMObject (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

The base type for all the opaque types used in Core Printing.

## Declaration

```objectivec
typedef const void *PMObject;
```

<a id="discussion"></a>

## Discussion

`PMObject` is the base type for opaque types such as `PMPrintSession`, `PMPageFormat`, `PMPrintSettings`, `PMPrinter`, `PMPaper`, `PMPreset`, and `PMServer`. `PMObject` is used in functions such as [PMRetain](1460190-pmretain.md) and [PMRelease](1461402-pmrelease.md) that operate on any opaque type.
