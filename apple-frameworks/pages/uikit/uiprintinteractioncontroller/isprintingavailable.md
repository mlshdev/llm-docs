> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/isprintingavailable](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/isprintingavailable)

# isPrintingAvailable (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the device supports printing.

## Declaration

```swift
class var isPrintingAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the device supports printing, otherwise [false](https://developer.apple.com/documentation/swift/false). An application can show or hide any print buttons based on this value.

## See Also

### Determining printability

- [canPrint(\_:)](canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [canPrint(\_:)](canprint%28__%29-364vj.md): Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.
- [printableUTIs](printableutis.md): Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.

# printingAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the device supports printing.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isPrintingAvailable) BOOL printingAvailable;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the device supports printing, otherwise [false](https://developer.apple.com/documentation/swift/false). An application can show or hide any print buttons based on this value.

## See Also

### Determining printability

- [canPrintData:](canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [canPrintURL:](canprint%28__%29-364vj.md): Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.
- [printableUTIs](printableutis.md): Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.
