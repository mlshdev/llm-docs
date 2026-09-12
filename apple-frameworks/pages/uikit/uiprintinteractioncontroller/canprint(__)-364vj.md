> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/canprint(_:)-364vj](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/canprint(_:)-364vj)

# canPrint(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.

## Declaration

```swift
class func canPrint(_ url: URL) -> Bool
```

## Parameters

- `url`: An object representing a URL. Valid `NSURL` objects must use the `file:` or any scheme that can return an [NSData](../../foundation/nsdata.md) object with a registered protocol. The file referenced by the URL must contain PDF data or an image in a format supported by the Image I/O framework. See [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503) in [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503) for a list of the supported image formats.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if UIKit can print the contents of the referenced file, otherwise [false](https://developer.apple.com/documentation/swift/false). The method returns [false](https://developer.apple.com/documentation/swift/false) if `url` references PDF data that specifies that printing is not allowed.

<a id="Discussion"></a>

## Discussion

You should call this method to test the data referenced by a URL prior to assigning that URL to [printingItem](printingitem.md) or [printingItems](printingitems.md).

## See Also

### Determining printability

- [isPrintingAvailable](isprintingavailable.md): A Boolean value that indicates whether the device supports printing.
- [canPrint(\_:)](canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [printableUTIs](printableutis.md): Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.

# canPrintURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.

## Declaration

```objectivec
+ (BOOL) canPrintURL:(NSURL *) url;
```

## Parameters

- `url`: An object representing a URL. Valid `NSURL` objects must use the `file:` or any scheme that can return an [NSData](../../foundation/nsdata.md) object with a registered protocol. The file referenced by the URL must contain PDF data or an image in a format supported by the Image I/O framework. See [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503) in [View Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009503) for a list of the supported image formats.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if UIKit can print the contents of the referenced file, otherwise [false](https://developer.apple.com/documentation/swift/false). The method returns [false](https://developer.apple.com/documentation/swift/false) if `url` references PDF data that specifies that printing is not allowed.

<a id="Discussion"></a>

## Discussion

You should call this method to test the data referenced by a URL prior to assigning that URL to [printingItem](printingitem.md) or [printingItems](printingitems.md).

## See Also

### Determining printability

- [printingAvailable](isprintingavailable.md): A Boolean value that indicates whether the device supports printing.
- [canPrintData:](canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [printableUTIs](printableutis.md): Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.
