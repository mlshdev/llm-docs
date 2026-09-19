> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/userinfo

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An opaque value for the list item.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to attach a value that provides additional context to the list item. For example, you can attach a model object and reference it in the list item’s [handler](handler.md) or [listImageRowHandler](listimagerowhandler.md) when processing either selection.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An opaque value for the list item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="Discussion"></a>

## Discussion

Use this property to attach a value that provides additional context to the list item. For example, you can attach a model object and reference it in the list item’s [handler](handler.md) or [listImageRowHandler](listimagerowhandler.md) when processing either selection.
