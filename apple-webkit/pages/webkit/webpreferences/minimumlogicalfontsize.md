> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/minimumlogicalfontsize](https://developer.apple.com/documentation/webkit/webpreferences/minimumlogicalfontsize)

# minimumLogicalFontSize (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The minimum logical font size of the web view.

## Declaration

```swift
var minimumLogicalFontSize: Int32 { get set }
```

<a id="Discussion"></a>

## Discussion

The minimum logical font size is the smallest font size that will display in a web view when the content’s font size is imprecisely specified. This includes content with logical sizes (such as `small`) or with a font size specified as a percentage of the default.

Most clients will not want to use this ; rather, explicitly set the minimum display font size using the [minimumFontSize](minimumfontsize.md) property.

The font size specified by `size` should always be greater than zero.

## See Also

### Getting and Setting Font Sizes

- [defaultFixedFontSize](defaultfixedfontsize.md): Deprecated. The default fixed font size of the web view.
- [defaultFontSize](defaultfontsize.md): Deprecated. The default font size of the web view.
- [minimumFontSize](minimumfontsize.md): Deprecated. The minimum font size of the web view.

# minimumLogicalFontSize (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The minimum logical font size of the web view.

## Declaration

```objectivec
@property (nonatomic) int minimumLogicalFontSize;
```

<a id="Discussion"></a>

## Discussion

The minimum logical font size is the smallest font size that will display in a web view when the content’s font size is imprecisely specified. This includes content with logical sizes (such as `small`) or with a font size specified as a percentage of the default.

Most clients will not want to use this ; rather, explicitly set the minimum display font size using the [minimumFontSize](minimumfontsize.md) property.

The font size specified by `size` should always be greater than zero.

## See Also

### Getting and Setting Font Sizes

- [defaultFixedFontSize](defaultfixedfontsize.md): Deprecated. The default fixed font size of the web view.
- [defaultFontSize](defaultfontsize.md): Deprecated. The default font size of the web view.
- [minimumFontSize](minimumfontsize.md): Deprecated. The minimum font size of the web view.
