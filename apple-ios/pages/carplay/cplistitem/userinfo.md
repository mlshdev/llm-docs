> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/userinfo](https://developer.apple.com/documentation/carplay/cplistitem/userinfo)

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An opaque value for the list item.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to attach a value that provides additional context to the list item. For example, you can attach a model object and reference it in the list item’s [handler](handler.md) when processing the selection.

## See Also

### Managing Configuration

- [isEnabled](isenabled.md): A Boolean value that indicates if the item is enabled.
- [handler](handler.md): An optional closure that CarPlay invokes when the user selects the list item.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An opaque value for the list item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="Discussion"></a>

## Discussion

Use this property to attach a value that provides additional context to the list item. For example, you can attach a model object and reference it in the list item’s [handler](handler.md) when processing the selection.

## See Also

### Managing Configuration

- [enabled](isenabled.md): A Boolean value that indicates if the item is enabled.
- [handler](handler.md): An optional closure that CarPlay invokes when the user selects the list item.
