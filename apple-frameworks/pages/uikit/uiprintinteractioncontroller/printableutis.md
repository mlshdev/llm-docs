> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printableutis](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printableutis)

# printableUTIs (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.

## Declaration

```swift
class var printableUTIs: Set<String> { get }
```

<a id="return-value"></a>

## Return Value

A set object that contains, as strings, the UTIs identifying data types that UIKit knows how to print natively.

## See Also

### Determining printability

- [isPrintingAvailable](isprintingavailable.md): A Boolean value that indicates whether the device supports printing.
- [canPrint(\_:)](canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [canPrint(\_:)](canprint%28__%29-364vj.md): Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.

# printableUTIs (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSSet<NSString *> * printableUTIs;
```

<a id="return-value"></a>

## Return Value

A set object that contains, as strings, the UTIs identifying data types that UIKit knows how to print natively.

## See Also

### Determining printability

- [printingAvailable](isprintingavailable.md): A Boolean value that indicates whether the device supports printing.
- [canPrintData:](canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [canPrintURL:](canprint%28__%29-364vj.md): Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.
