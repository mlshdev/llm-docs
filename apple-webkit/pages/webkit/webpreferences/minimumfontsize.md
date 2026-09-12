> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/minimumfontsize](https://developer.apple.com/documentation/webkit/webpreferences/minimumfontsize)

# minimumFontSize (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The minimum font size of the web view.

## Declaration

```swift
var minimumFontSize: Int32 { get set }
```

<a id="Discussion"></a>

## Discussion

This sets the minimum display font size for the web view, overriding all content-specified styles, including explicitly specified font sizes.

The font size specified by `size` should always be greater than zero.

## See Also

### Getting and Setting Font Sizes

- [defaultFixedFontSize](defaultfixedfontsize.md): Deprecated. The default fixed font size of the web view.
- [defaultFontSize](defaultfontsize.md): Deprecated. The default font size of the web view.
- [minimumLogicalFontSize](minimumlogicalfontsize.md): Deprecated. The minimum logical font size of the web view.

# minimumFontSize (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The minimum font size of the web view.

## Declaration

```objectivec
@property (nonatomic) int minimumFontSize;
```

<a id="Discussion"></a>

## Discussion

This sets the minimum display font size for the web view, overriding all content-specified styles, including explicitly specified font sizes.

The font size specified by `size` should always be greater than zero.

## See Also

### Getting and Setting Font Sizes

- [defaultFixedFontSize](defaultfixedfontsize.md): Deprecated. The default fixed font size of the web view.
- [defaultFontSize](defaultfontsize.md): Deprecated. The default font size of the web view.
- [minimumLogicalFontSize](minimumlogicalfontsize.md): Deprecated. The minimum logical font size of the web view.
