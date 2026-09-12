> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkfindconfiguration/casesensitive](https://developer.apple.com/documentation/webkit/wkfindconfiguration/casesensitive)

# caseSensitive (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

A Boolean value that indicates whether to consider case when matching the search string.

## Declaration

```swift
var caseSensitive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the web view takes case into account when matching the search string. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Search Parameters

- [backwards](backwards.md): A Boolean value that indicates the search direction, relative to the current selection.
- [wraps](wraps.md): A Boolean value that indicates whether the search wraps around to the other side of the page.

# caseSensitive (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS 1.0+

A Boolean value that indicates whether to consider case when matching the search string.

## Declaration

```objectivec
@property (nonatomic) BOOL caseSensitive;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the web view takes case into account when matching the search string. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Search Parameters

- [backwards](backwards.md): A Boolean value that indicates the search direction, relative to the current selection.
- [wraps](wraps.md): A Boolean value that indicates whether the search wraps around to the other side of the page.
