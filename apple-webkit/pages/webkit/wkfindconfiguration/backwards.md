> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkfindconfiguration/backwards](https://developer.apple.com/documentation/webkit/wkfindconfiguration/backwards)

# backwards (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

A Boolean value that indicates the search direction, relative to the current selection.

## Declaration

```swift
var backwards: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), searches proceed backward from the current selection. When the value is [false](https://developer.apple.com/documentation/swift/false), searches proceed forward from the current selection. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

The web view respects the writing direction of its content. For example, a forward search moves right-to-left and top-to-bottom for a right-to-left language.

## See Also

### Configuring the Search Parameters

- [caseSensitive](casesensitive.md): A Boolean value that indicates whether to consider case when matching the search string.
- [wraps](wraps.md): A Boolean value that indicates whether the search wraps around to the other side of the page.

# backwards (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

A Boolean value that indicates the search direction, relative to the current selection.

## Declaration

```objectivec
@property (nonatomic) BOOL backwards;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), searches proceed backward from the current selection. When the value is [false](https://developer.apple.com/documentation/swift/false), searches proceed forward from the current selection. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

The web view respects the writing direction of its content. For example, a forward search moves right-to-left and top-to-bottom for a right-to-left language.

## See Also

### Configuring the Search Parameters

- [caseSensitive](casesensitive.md): A Boolean value that indicates whether to consider case when matching the search string.
- [wraps](wraps.md): A Boolean value that indicates whether the search wraps around to the other side of the page.
