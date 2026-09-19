> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/axchartdescriptor/attributedtitle

# attributedTitle (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed version of the chart title.

## Declaration

```swift
@NSCopying var attributedTitle: NSAttributedString? { get set }
```

<a id="discussion"></a>

## Discussion

If you set the value of this property, the system uses this value instead of [title](title.md).

## See Also

### Specifying the chart title

- [title](title.md): The title of the chart.

# attributedTitle (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed version of the chart title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedTitle;
```

<a id="discussion"></a>

## Discussion

If you set the value of this property, the system uses this value instead of [title](title.md).

## See Also

### Specifying the chart title

- [title](title.md): The title of the chart.
