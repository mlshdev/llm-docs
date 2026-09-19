> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstexttab/tabstoptype

# tabStopType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The text tab’s type of tab stop.

> Use -alignment and -options.

## Declaration

```swift
var tabStopType: NSParagraphStyle.TextTabType { get }
```

<a id="Discussion"></a>

## Discussion

Possible values are listed in [NSParagraphStyle.TextTabType](../nsparagraphstyle/texttabtype.md).

## See Also

### Deprecated

- [init(type:location:)](init%28type_location_%29.md): Deprecated. Initializes a newly allocated text tab with the specified alignment and location.

# tabStopType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The text tab’s type of tab stop.

> Use -alignment and -options.

## Declaration

```objectivec
@property (readonly) NSTextTabType tabStopType;
```

<a id="Discussion"></a>

## Discussion

Possible values are listed in [NSTextTabType](../nsparagraphstyle/texttabtype.md).

## See Also

### Deprecated

- [initWithType:location:](init%28type_location_%29.md): Deprecated. Initializes a newly allocated text tab with the specified alignment and location.
