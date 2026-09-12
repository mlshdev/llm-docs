> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttab/init(type:location:)](https://developer.apple.com/documentation/appkit/nstexttab/init(type:location:))

# init(type:location:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Initializes a newly allocated text tab with the specified alignment and location.

## Declaration

```swift
convenience init(type: NSParagraphStyle.TextTabType, location loc: CGFloat)
```

<a id="Discussion"></a>

## Discussion

The location is relative to the back margin, based on the line sweep direction of the paragraph. The value in the `type` parameter can be any of the values described in [NSParagraphStyle.TextTabType](../nsparagraphstyle/texttabtype.md).

## See Also

### Deprecated

- [tabStopType](tabstoptype.md): Deprecated. The text tab’s type of tab stop.

# initWithType:location: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Initializes a newly allocated text tab with the specified alignment and location.

## Declaration

```objectivec
- (instancetype) initWithType:(NSTextTabType) type location:(CGFloat) loc;
```

<a id="Discussion"></a>

## Discussion

The location is relative to the back margin, based on the line sweep direction of the paragraph. The value in the `type` parameter can be any of the values described in [NSTextTabType](../nsparagraphstyle/texttabtype.md).

## See Also

### Deprecated

- [tabStopType](tabstoptype.md): Deprecated. The text tab’s type of tab stop.
