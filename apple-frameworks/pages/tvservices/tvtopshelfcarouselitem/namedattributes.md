> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselitem/namedattributes](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselitem/namedattributes)

# namedAttributes (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

Additional information to display for your content, such as a list of leading actors.

## Declaration

```swift
var namedAttributes: [TVTopShelfNamedAttribute] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify additional details about your content. In appropriate views, the system formats the provided information and displays it alongside the rest of your content. For information about how to create named attributes, see [TVTopShelfNamedAttribute](../tvtopshelfnamedattribute.md).

## See Also

### Adding Custom Attributes

- [TVTopShelfNamedAttribute](../tvtopshelfnamedattribute.md): An object you use to display additional information.

# namedAttributes (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

Additional information to display for your content, such as a list of leading actors.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<TVTopShelfNamedAttribute *> * namedAttributes;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify additional details about your content. In appropriate views, the system formats the provided information and displays it alongside the rest of your content. For information about how to create named attributes, see [TVTopShelfNamedAttribute](../tvtopshelfnamedattribute.md).

## See Also

### Adding Custom Attributes

- [TVTopShelfNamedAttribute](../tvtopshelfnamedattribute.md): An object you use to display additional information.
