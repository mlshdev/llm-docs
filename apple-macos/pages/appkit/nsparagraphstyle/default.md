> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/default](https://developer.apple.com/documentation/appkit/nsparagraphstyle/default)

# default (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The default paragraph style.

## Declaration

```swift
@NSCopying class var `default`: NSParagraphStyle { get }
```

<a id="Discussion"></a>

## Discussion

The default paragraph style has the following default values:

| Subattribute | Default |
| --- | --- |
| Alignment | `NSNaturalTextAlignment` |
| Tab stops | 12 left-aligned tabs, spaced by `28.0` points |
| Line break mode | `NSLineBreakByWordWrapping` |
| All others | `0.0` |

See individual method descriptions for explanations of each subattribute.

## See Also

### Creating a paragraph style

- [init(coder:)](init%28coder_%29.md)

# defaultParagraphStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The default paragraph style.

## Declaration

```objectivec
@property (class, copy, readonly) NSParagraphStyle * defaultParagraphStyle;
```

<a id="Discussion"></a>

## Discussion

The default paragraph style has the following default values:

| Subattribute | Default |
| --- | --- |
| Alignment | `NSNaturalTextAlignment` |
| Tab stops | 12 left-aligned tabs, spaced by `28.0` points |
| Line break mode | `NSLineBreakByWordWrapping` |
| All others | `0.0` |

See individual method descriptions for explanations of each subattribute.
