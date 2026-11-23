> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/userinfo

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

Use this property to attach app-specific data to the row. For example, you might attach the model object from your app that corresponds to the data for the row and its elements. This information is strictly for your app’s usage, and CarPlay doesn’t use it. The default value of this property is `nil`.

## See Also

### Managing the row’s content

- [text](text.md): The row’s primary text.
- [elements](elements.md): The elements to display in the row.
- [allowsMultipleLines](allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

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

Use this property to attach app-specific data to the row. For example, you might attach the model object from your app that corresponds to the data for the row and its elements. This information is strictly for your app’s usage, and CarPlay doesn’t use it. The default value of this property is `nil`.

## See Also

### Managing the row’s content

- [text](text.md): The row’s primary text.
- [elements](elements.md): The elements to display in the row.
- [allowsMultipleLines](allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.
