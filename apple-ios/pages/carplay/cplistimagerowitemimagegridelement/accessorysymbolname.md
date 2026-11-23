> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemimagegridelement/accessorysymbolname

# accessorySymbolName (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The name of an image to display next to the element’s title.

## Declaration

```swift
var accessorySymbolName: String? { get set }
```

<a id="discussion"></a>

## Discussion

This property contains the name of an SF Symbol or the name of a custom image resource in your app’s main bundle. If the value of this property is `nil`, or if the system can’t find the image using the provided name, the element doesn’t display the image.

## See Also

### Getting the element’s content

- [title](title.md): The primary text for the element.

# accessorySymbolName (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The name of an image to display next to the element’s title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * accessorySymbolName;
```

<a id="discussion"></a>

## Discussion

This property contains the name of an SF Symbol or the name of a custom image resource in your app’s main bundle. If the value of this property is `nil`, or if the system can’t find the image using the provided name, the element doesn’t display the image.

## See Also

### Getting the element’s content

- [title](title.md): The primary text for the element.
