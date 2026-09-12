> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/annotation](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/annotation)

# annotation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Custom property list information for the target file.

## Declaration

```swift
var annotation: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to pass information about the document type to the app responsible for opening it. Although the type of this object should be one used to contain property list information—namely, [NSDictionary](../../foundation/nsdictionary.md), [NSArray](../../foundation/nsarray.md), [NSData](../../foundation/nsdata.md), [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md)—the root object must be an [NSDictionary](../../foundation/nsdictionary.md).

## See Also

### Accessing the target document’s attributes

- [url](url.md): The URL identifying the target file on the local filesystem.
- [uti](uti.md): The type of the target file.
- [name](name.md): The name of the target file.
- [icons](icons.md): The images associated with the target file.

# annotation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Custom property list information for the target file.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id annotation;
```

<a id="Discussion"></a>

## Discussion

Use this property to pass information about the document type to the app responsible for opening it. Although the type of this object should be one used to contain property list information—namely, [NSDictionary](../../foundation/nsdictionary.md), [NSArray](../../foundation/nsarray.md), [NSData](../../foundation/nsdata.md), [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md)—the root object must be an [NSDictionary](../../foundation/nsdictionary.md).

## See Also

### Accessing the target document’s attributes

- [URL](url.md): The URL identifying the target file on the local filesystem.
- [UTI](uti.md): The type of the target file.
- [name](name.md): The name of the target file.
- [icons](icons.md): The images associated with the target file.
