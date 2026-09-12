> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/openurloptions/annotation](https://developer.apple.com/documentation/uikit/uiscene/openurloptions/annotation)

# annotation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A property-list object that contains the annotation data provided by a document interaction controller.

## Declaration

```swift
var annotation: Any? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the data that the originating app placed in the [annotation](../../uidocumentinteractioncontroller/annotation.md) property of its [UIDocumentInteractionController](../../uidocumentinteractioncontroller.md). The root object is always an [NSDictionary](../../../foundation/nsdictionary.md) object. The contents of that dictionary may be any other property list types, including [NSDictionary](../../../foundation/nsdictionary.md), [NSArray](../../../foundation/nsarray.md), [NSData](../../../foundation/nsdata.md), [NSString](../../../foundation/nsstring.md), [NSNumber](../../../foundation/nsnumber.md), or [NSDate](../../../foundation/nsdate.md) objects.

## See Also

### Specifying the URL details

- [sourceApplication](sourceapplication.md): The bundle ID of the app that originated the request.
- [eventAttribution](eventattribution.md): An event attribution associated with the URL to open.

# annotation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A property-list object that contains the annotation data provided by a document interaction controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id annotation;
```

<a id="Discussion"></a>

## Discussion

This property contains the data that the originating app placed in the [annotation](../../uidocumentinteractioncontroller/annotation.md) property of its [UIDocumentInteractionController](../../uidocumentinteractioncontroller.md). The root object is always an [NSDictionary](../../../foundation/nsdictionary.md) object. The contents of that dictionary may be any other property list types, including [NSDictionary](../../../foundation/nsdictionary.md), [NSArray](../../../foundation/nsarray.md), [NSData](../../../foundation/nsdata.md), [NSString](../../../foundation/nsstring.md), [NSNumber](../../../foundation/nsnumber.md), or [NSDate](../../../foundation/nsdate.md) objects.

## See Also

### Specifying the URL details

- [sourceApplication](sourceapplication.md): The bundle ID of the app that originated the request.
- [eventAttribution](eventattribution.md): An event attribution associated with the URL to open.
