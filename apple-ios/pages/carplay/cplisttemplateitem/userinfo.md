> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplateitem/userinfo

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

App-specific data you associate with the item.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to attach app-specific data to the item. For example, you might attach the model object from your app that corresponds to the item’s content. This information is just for your app, and CarPlay doesn’t use it. The default value of this property is `nil`.

## See Also

### Managing content

- [text](text.md): The primary text to display for the item.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

App-specific data you associate with the item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="discussion"></a>

## Discussion

Use this property to attach app-specific data to the item. For example, you might attach the model object from your app that corresponds to the item’s content. This information is just for your app, and CarPlay doesn’t use it. The default value of this property is `nil`.

## See Also

### Managing content

- [text](text.md): The primary text to display for the item.
