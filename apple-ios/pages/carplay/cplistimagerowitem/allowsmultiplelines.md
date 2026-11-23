> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/allowsmultiplelines

# allowsMultipleLines (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the row displays elements on more than one line.

## Declaration

```swift
var allowsMultipleLines: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay adds extra lines until it displays all the elements. When the value of this property is `false`, CarPlay displays only a single line of elements. If there isn’t enough room to display all of the elements in a single line, CarPlay displays only as many elements as fit and ignores the rest.

## See Also

### Managing the row’s content

- [text](text.md): The row’s primary text.
- [elements](elements.md): The elements to display in the row.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

# allowsMultipleLines (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the row displays elements on more than one line.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsMultipleLines;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay adds extra lines until it displays all the elements. When the value of this property is `false`, CarPlay displays only a single line of elements. If there isn’t enough room to display all of the elements in a single line, CarPlay displays only as many elements as fit and ignores the rest.

## See Also

### Managing the row’s content

- [text](text.md): The row’s primary text.
- [elements](elements.md): The elements to display in the row.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.
