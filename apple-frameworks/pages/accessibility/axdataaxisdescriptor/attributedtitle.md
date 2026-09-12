> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdataaxisdescriptor/attributedtitle](https://developer.apple.com/documentation/accessibility/axdataaxisdescriptor/attributedtitle)

# attributedTitle (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed version of the axis title.

## Declaration

```swift
@NSCopying var attributedTitle: NSAttributedString { get set }
```

<a id="discussion"></a>

## Discussion

If you set the value of this property, the system uses this value instead of [title](title.md).

## See Also

### Specifying the title

- [title](title.md): The title of the axis.

# attributedTitle (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed version of the axis title.

## Declaration

```objectivec
@property (nonatomic, copy) NSAttributedString * attributedTitle;
```

<a id="discussion"></a>

## Discussion

If you set the value of this property, the system uses this value instead of [title](title.md).

## See Also

### Specifying the title

- [title](title.md): The title of the axis.
