> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/headerlevel](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/headerlevel)

# headerLevel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The paragraph’s header level for HTML generation.

## Declaration

```swift
var headerLevel: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If the paragraph is not a header, the value is `0`. If the paragraph is a header, the value ranges from `1` to `6`, depending on the header’s level.

The default value is `0`.

# headerLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The paragraph’s header level for HTML generation.

## Declaration

```objectivec
@property NSInteger headerLevel;
```

<a id="Discussion"></a>

## Discussion

If the paragraph is not a header, the value is `0`. If the paragraph is a header, the value ranges from `1` to `6`, depending on the header’s level.

The default value is `0`.
